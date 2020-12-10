/**
 * @description User 相关操作
 */

import Router from 'koa-router'
import UserController from '../controller/user-controller'
import { genValidator } from '../middleware/validator'
import { CreateUser, GetDeleteUser, UpdateUser, UserLogin } from '../validators/user'

const router = new Router()

router.get('/user', UserController.getUserById)
router.put('/user', genValidator(UpdateUser), UserController.updateUser)
router.delete('/user', genValidator(GetDeleteUser), UserController.deleteUser)

router.post('/login', genValidator(UserLogin), UserController.userLogin)
router.post('/register', genValidator(CreateUser), UserController.register)

export default router
