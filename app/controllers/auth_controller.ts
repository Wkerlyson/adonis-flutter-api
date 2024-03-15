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
        type: 'bearer',
        value: token.value!.release(),
      }

    }
}