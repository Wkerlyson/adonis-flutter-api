import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'admins'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary();
      table.integer('user_id').unsigned().notNullable().references('id').inTable('users').onDelete('CASCADE');
      table.string('nome', 255).notNullable();
      table.timestamp('updated_at');
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}