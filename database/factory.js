'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

/*Factory.blueprint('App/Models/User', (faker) => {
   return {
     username: faker.username()
   }
 })*/

Factory.blueprint('App/Models/Soda', (faker) => {
  return {
    name: faker.word({syllabes: 4}),
    flavor: faker.sentence({words: 6}),
    calories: faker.integer({min: 0, max: 1000}),
    is_dietetic: faker.bool()
  }
})
