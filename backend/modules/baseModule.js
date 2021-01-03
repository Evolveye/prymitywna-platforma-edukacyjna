/** @typedef {import('../src/dbManager').default} DatabaseManager */

export default class Module {
  /**
   * @param {DatabaseManager} dbManager
   */
  constructor( dbManager ) {
    this.dbManager = dbManager
  }

  /**
   * @param {import('express').Express} app
   * @param {DatabaseManager} dbManager
   */
  configure(app, dbManager) {
    throw new Error( `You have to override me!` )
  }
  toString() {
    throw new Error( `You have to override me!` )
  }

  /**
   * 
   * @param {import("socket.io").Socket} socket 
   */
  socketConfigurator(socket){
    throw new Error( `You have to override me!` )
  }

}