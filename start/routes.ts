import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js';
import AuthController from '#controllers/auth_controller';



router.post('login', [AuthController, 'login'])
router.post('logout', [AuthController, 'logout'])

router.group(() => {
    router.get('auth/me', [AuthController, 'me'])

}).use(middleware.auth({
    guards: ['api']
}))

