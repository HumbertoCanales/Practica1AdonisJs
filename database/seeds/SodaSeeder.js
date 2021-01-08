'use strict'

/*
|--------------------------------------------------------------------------
| SodaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class SodaSeeder {
  async run () {
    await Factory
      .model('App/Models/Soda')
      .createMany(5)
  }
}

module.exports = SodaSeeder
