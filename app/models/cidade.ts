import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Cidade extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare estado_id: number

  @column()
  declare ativo: boolean
}