'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.route('/', () => {
  return { greeting: 'Hello world in JSON' }
}, ['GET', 'POST', 'PUT', 'DELETE'])

Route.get('sodas', 'SodaController.index')

Route.get('sodas/:id', 'SodaController.find')

Route.post('sodas', 'SodaController.store')

Route.put('sodas/:id', 'SodaController.edit')

Route.delete('sodas/:id', 'SodaController.delete')
