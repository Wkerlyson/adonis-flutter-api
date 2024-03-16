import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'cidades_estabelecimentos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('cidade_id').unsigned().notNullable().references('id').inTable('cidades')
      table.integer('estabelecimento_id').unsigned().notNullable().references('id').inTable('estabelecimentos')
      table.decimal('custo_entrega', 8, 2).notNullable()
      table.primary(['cidade_id', 'estabelecimento_id'])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}