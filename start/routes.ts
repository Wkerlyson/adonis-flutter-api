import { HttpContext } from '@adonisjs/core/http';
import User from '#models/user'
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js';
import AuthController from '#controllers/auth_controller';



router.post('login', [AuthController, 'login'])
router.post('logout', [AuthController, 'logout'])






// router.get('/', async () => {

//   const user = new User()

//   user.fullName = 'Wkerlyson'
//   user.email = 'wk@email.com'
//   user.password = '123456'
//   user.tipo = 'admin'

//   await user.save()

//   return {
//     id: user.id,
//   }
// })

// router.post('/get-token', async ({request}: HttpContext) => {
//   const { email, password } = request.only(['email', 'password'])
//   const user = await User.verifyCredentials(email, password)

//   const token = await User.accessTokens.create(user)

//   return {
//     type: 'bearer',
//     value: token.value!.release(),
//   }
// })

// router.get('/auth', async ({response}) => {
//   return response.ok('Usuario autenticado: acesso autorizado')
// }).use(middleware.auth({
//   guards: ['api']
// }))


