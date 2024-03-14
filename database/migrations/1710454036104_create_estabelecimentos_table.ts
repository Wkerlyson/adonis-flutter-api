import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'estabelecimentos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary();
      table.integer('user_id').unsigned().notNullable().references('id').inTable('users').onDelete('CASCADE');
      table.string('nome', 255).notNullable();
      table.string('logo', 255).nullable();
      table.boolean('bloqueado').notNullable().defaultTo(false);
      table.boolean('online').notNullable().defaultTo(false);
      table.timestamp('updated_at').notNullable();
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}