import express from "express"
import { Server } from "socket.io"
import cors from 'cors'

import WSS from "./src/ws.js"
import dbManager from "./src/dbManager.js"
import { DEBUG, APP_ROOT_DIR, PORT, LOGGERS } from "./consts.js" // LOGGERS
import {
  doHttpLogShouldBePrinted as doHttpLog,
  doWsLogShouldBePrinted as doWsLog,
  logUnderControl as log,
  addNextLineToLog as logLine,
} from "./src/utils.js"

/** @typedef {import("./modules/module.js").default[]} Module */



/* *
 *  Variables
 */


/** @type {Express} */
const app = express()

const moduleLogger = modName => string => log(LOGGERS.module, modName, string)

/** @type {Map<string,Module>} */
const modulesClasses = new Map(
  await Promise.all([
    import(`./modules/user/index.js`),
    import(`./modules/platform/index.js`),
    import(`./modules/group/index.js`),
    import(`./modules/meet/index.js`),
  ]).then(mods => mods.map(({default:d}) => [d.toString(), d]) )
)
/** @type {Map<string,Module>} */
const modulesInstances = new Map()

const server = app.listen(PORT, () => log(LOGGERS.server, `Working localhost:${PORT}`))
const wss = new WSS({ server })



/* *
 *  Configuration
 */


modulesClasses.forEach( (Class, modName) => {
  const requiredModules = {}
  let doInstallation = true

  for (const requiredModule of Class.requiredModules) {
    if (modulesInstances.has( requiredModule )) {
      const modName = requiredModule.charAt( 0 ).toLowerCase() + requiredModule.slice( 1 )

      requiredModules[ modName ] = modulesInstances.get( requiredModule )
    } else {
      doInstallation = false
      break
    }
  }

  if (doInstallation) {
    modulesInstances.set( modName, new Class(moduleLogger(modName), dbManager, requiredModules) )
  }
} )

modulesInstances.forEach( (instance, modName) =>
  (/** @type {string[]} */ (modulesClasses.get( modName ).additionalModules))
    .filter( optModName => modulesInstances.has( optModName ) )
    .map( optModName => modulesInstances.get( optModName ) )
    .forEach( instance.addAdditionalModule )
)

// app.use((req, _, next) => next(
//   console.log( req.query )
// ))
app.use((req, _, next) => next( //logging middleware
  doHttpLog(req) ? log(LOGGERS.newRequest, `HTTP`, req.method, req.url) : undefined
))

app.use("/", express.static(DEBUG ? "./public" : "./public"))
app.use("/media", express.static("./media"))
app.use("/uploads", express.static("./uploads"))

app.use(cors())
app.use(express.json())

modulesInstances.forEach(mod => {
  log(LOGGERS.server, `[fgYellow]LOADING MODULE[] ${mod.toString()}`)

  mod.getApi().forEach((methods, path) => {
    path = path.match( /\/?(?:api)?\/?(.+)/ )[ 1 ]

    if (typeof methods === `function`) {
      logLine( `[fgYellow]/api/${path}[] :: GET`)

      return app.get(`/api/${path}`, methods )
    }

    const includedMethods = Object.keys(methods)
      .filter(method => method in app)
      .filter(method => typeof methods[method] === `function`)
      .map(method => {
        app[method](`/api/${path}`, methods[method] )

        return method.toUpperCase()
      })

    logLine( `[fgYellow]/api/${path}[] :: ${includedMethods.join( ` ` )}`)
  })

  // mod.configure(app)
})

app.use((_, res) => res.status( 404 ).json( { code:0, error:`Endpoint not found` } ) )

wss.on(`connection`, (ws) => {
  const socket = wss.reshapeWebSocket(ws)

  log( LOGGERS.newRequest, `WS`, `[fgGreen]New socket[]`, socket.id )

  socket.addMiddleware( (event, data) => {
    if (!doWsLog()) return

    const dataStr = data === event || !data
      ? `[[fgWhite]no data[]]`
      : typeof data === `string` || Array.isArray( data )
      ? data
      : Object.keys( data )

    log( LOGGERS.newRequest, `WS`, event, dataStr )
  } )
  socket.on(`disconnect`, () =>
    doWsLog() && log( LOGGERS.newRequest, `WS`, `[fgGreen]Socket left[]`, socket.id )
  )

  modulesInstances.forEach(mod => mod.socketConfigurator(socket))
})
