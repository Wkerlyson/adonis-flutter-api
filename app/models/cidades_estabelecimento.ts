import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class CidadesEstabelecimento extends BaseModel {
  @column({ isPrimary: true })
  declare cidade_id: number

  @column({ isPrimary: true })
  declare estabelecimento_id: number

  @column()
  declare custo_entrega: number
}