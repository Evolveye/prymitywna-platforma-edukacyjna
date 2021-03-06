import React from "react"
import { useEffect, useState } from "react"
import { navigate } from "gatsby"
import { fetcher, getFromStorage, clearStorage, setInStorage, isBrowser } from "./functions.js"
import URLS from "./urls.js"
import ws from "./ws.js"

const fakeUser = {
  login: `fakelogin`,
  name: `Fakename`,
  surname: `Fakesurname`,
  email: `fake@email.com`,
}

const changedUserSetters = []
const setToken = token => {
  ws.emit( `authenticate`, token )
  setInStorage( `token`, token )
}
const setUser = user => {
  setInStorage( `user`, user )

  changedUserSetters.forEach( setter => setter( user ) )
}

// export const AuthContext = React.createContext({ user:null, platform:null, group:null, meet:null })
export const getAuthHeaders = () => ({ Authentication:`Bearer ${getToken()}` })
export const Authorized = ({ children }) => isLogged() ? children : <>{isBrowser() && navigate( `/unauthorized` )}</>
export const getUser = () => getFromStorage( `user` )
export const getToken = () => getFromStorage( `token` )
export const fakeLogin = () => setUser( fakeUser )
export const isLogged = () => !!getUser()
export const logout = () => clearStorage()
export const authorizeWs = ws => ws.emit( `authenticate`, getToken() )

if (getToken()) authorizeWs( ws )

export const authFetcher = new Proxy( fetcher, {
  get( fetcher, key ) {
    if ([ `get` ].includes( key )) {
      return address => fetcher[ key ]( address, getAuthHeaders() )
    }

    if ([ `post`, `put`, `delete` ].includes( key )) {
      return (address, data) => fetcher[ key ]( address, data, getAuthHeaders() )
    }

    return fetcher[ key ]
  },
} )


export const useUser = () => {
  const [ user, setUser ] = useState( getUser() )

  changedUserSetters.push( setUser )

  useEffect( () =>
    () => changedUserSetters.splice( changedUserSetters.indexOf( setUser ), 1 )
  , [] )

  return user
}


export const fetchUser = async() => {
  const { user } = await fetcher.get( URLS.USER_ME_GET(), getAuthHeaders() )

  if (user) return setUser( user )
}


export const register = data => {
  return fetcher.post( URLS.REGISTER_POST(), data )
}


export const login = async data => {
  const tokenData = await fetcher.post( URLS.LOGIN_POST(), data )

  if (!tokenData?.token) return tokenData

  setToken( tokenData.token )
  fetchUser()
}
