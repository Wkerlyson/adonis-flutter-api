import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'produtos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('nome').notNullable()
      table.string('descricao').notNullable()
      table.string('imagem').nullable()
      table.decimal('preco', 10, 2).notNullable()
      table.string('unidade', 3).notNullable()
      table.string('posicao').notNullable()
      table.boolean('ativo').notNullable().defaultTo(true)
      table.integer('categoria_id').unsigned().notNullable().references('id').inTable('categorias').onDelete('RESTRICT')

      table.timestamps(true, true)
      table.timestamp('deleted_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}