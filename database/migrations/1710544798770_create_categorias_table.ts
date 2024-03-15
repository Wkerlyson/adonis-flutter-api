import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'categorias'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('nome').notNullable()
      table.string('descricao').nullable()
      table.string('posicao').notNullable()
      table.boolean('ativo').notNullable().defaultTo(true)
      table.integer('estabelecimento_id').unsigned().notNullable().references('id')
            .inTable('estabelecimentos').onDelete('RESTRICT')
      table.timestamps(true, true)
      table.timestamp('deleted_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}