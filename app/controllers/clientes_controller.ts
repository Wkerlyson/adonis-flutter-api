import Cliente from '#models/cliente'
import User from '#models/user'
import { createClienteValidator } from '#validators/create_cliente'
import type { HttpContext } from '@adonisjs/core/http'

export default class ClientesController {
    public async store ({request, response}: HttpContext){
        const data = request.all()
        const payload = await createClienteValidator.validate(data)

        const user = await User.create({
            email: payload.email,
            password: payload.password,
            tipo: 'clientes'
        })

        const cliente = await Cliente.create({
            nome: payload.nome,
            telefone: payload.telefone,
            userId: user.id
        })

        return response.ok({
            id: cliente.id,
            nome: cliente.nome,
            email: user.email,
            telefone: cliente.telefone
        })
    }
}