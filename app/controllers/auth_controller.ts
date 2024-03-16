import Admin from '#models/admin'
import Cliente from '#models/cliente'
import Estabelecimento from '#models/estabelecimento'
import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
    public async login ({request}: HttpContext) {
       const {email, password} = request.only(['email', 'password'])
       const user = await User.verifyCredentials(email, password)

       let expire

       switch (user.tipo) {
        case 'clientes':
            expire = '30days'
            break;
        case 'estabelecimentos':
            expire = '7days'
            break;
        case 'admins':
            expire = '1days'
            break;
        default:
            expire = '30days'
            break;
       }

       const token = await User.accessTokens.create(user, ['*'],{
        expiresIn: expire,
        name: user.serialize().email
       })

       return {
        token
      }
    }

    public async logout({response, auth}: HttpContext){
        const identifier = (await auth.authenticate()).currentAccessToken.identifier
        await User.accessTokens.delete(await auth.authenticate(), identifier)
       
        return response.ok('logout success')
    }

    public async me({auth, response}: HttpContext){

        const userAuth = auth.user
        let data

        switch (userAuth?.tipo) {
            case 'clientes':
                const cliente = await Cliente.findByOrFail('userId', userAuth.id)
                data = {
                    id_cliente: cliente.id,
                    nome: cliente.nome,
                    telefone: cliente.telefone,
                    email: userAuth.email
                }
            break;
            case 'estabelecimentos':
                const estabelecimento = await Estabelecimento.findByOrFail('userId', userAuth.id)
                data = {
                    id_estabelecimento: estabelecimento.id,
                    nome: estabelecimento.nome,
                    logo: estabelecimento.logo,
                    online: estabelecimento.online,
                    bloqueado: estabelecimento.bloqueado,
                    email: userAuth.email
                }
            break;
            case 'admins':
                const admin = await Admin.findByOrFail('userId', userAuth.id)
                data = {
                    id_admin: admin.id,
                    nome: admin.nome,
                    email: userAuth.email
                }
            break;
            default:
                return response.unauthorized('unauthorized user - type not found')
            break;
        }

        return response.ok(data)
    }
}