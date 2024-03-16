import Admin from '#models/admin'
import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    const user = await User.create({
      email: 'admin@email.com',
      password: '123456',
      tipo: 'admins'
    })

    await Admin.create({
      nome: 'Admin',
      userId: user.id
    })
  }
}