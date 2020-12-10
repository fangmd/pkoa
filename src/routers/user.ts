/**
 * @description User 相关操作
 */

import Router from 'koa-router'
import UserController from '../controller/user-controller'

const router = new Router()

router.get('/user', UserController.getUserById)
router.put('/user', UserController.updateUser)
router.delete('/user', UserController.deleteUser)

router.post('/login', UserController.userLogin)
router.post('/register', UserController.register)

export default router
