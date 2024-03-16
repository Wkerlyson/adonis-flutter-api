import Estabelecimento from '#models/estabelecimento'
import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    const user = await User.create({
      email: 'estabelecimento@email.com',
      password: '123456',
      tipo: 'estabelecimentos'
    })

    await Estabelecimento.create({
      nome: 'Estabelecimento',
      logo: 'https://avatars.githubusercontent.com/u/10518996?s=96&v=4',
      online: true,
      bloqueado: false,
      userId: user.id
    })
  }
}