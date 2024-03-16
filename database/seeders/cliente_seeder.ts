import Cliente from '#models/cliente'
import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    const user = await User.create({
      email: 'cliente@email.com',
      password: '123456',
      tipo: 'clientes'
    })

    await Cliente.create({
      nome: 'Cliente',
      telefone: '111 99999-9999',
      userId: user.id
    })
  }
}