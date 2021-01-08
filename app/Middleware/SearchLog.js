'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Logger = use ('Logger')

class SearchLog {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ params }, next) {
    Logger.info('SearchLog: Searching the soda with the id %s', params.id)
    await next()
  }
}

module.exports = SearchLog
