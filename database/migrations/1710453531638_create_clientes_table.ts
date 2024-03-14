import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'clientes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary();
      table.integer('user_id').unsigned().notNullable().references('id').inTable('users').onDelete('CASCADE');
      table.string('nome', 255).nullable();
      table.string('telefone', 15).notNullable();
      table.timestamp('updated_at').notNullable();
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}