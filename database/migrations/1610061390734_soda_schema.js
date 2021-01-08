'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SodaSchema extends Schema {
  up () {
    this.create('sodas', (table) => {
      table.increments()
      table.string('name', 40).notNullable().unique()
      table.string('flavor', 80)
      table.integer('calories')
      table.boolean('is_dietetic')
      table.timestamps()
    })
  }

  down () {
    this.drop('sodas')
  }
}

module.exports = SodaSchema
