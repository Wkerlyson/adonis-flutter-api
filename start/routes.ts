import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js';
import AuthController from '#controllers/auth_controller';
import ClientesController from '#controllers/clientes_controller';




router.post('login', [AuthController, 'login'])
router.post('logout', [AuthController, 'logout'])

router.post('cliente/cadastro', [ClientesController, 'store'])

router.group(() => {
    router.get('auth/me', [AuthController, 'me'])

}).use(middleware.auth({
    guards: ['api']
}))

