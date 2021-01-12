import Router from 'koa-router'
import { AdminController } from '../controller/admin-controller'
import { AdminSystemC } from '../controller/admin-system-c'
import { genValidator } from '../middleware/validator'
import { CreateAdminUser, CreateRole } from '../validators/admin-system'
import { IdValid } from '../validators/common'
import { UserLogin } from '../validators/user'

const router = new Router()

router.prefix('/api/admin')

router.post('/login', genValidator(UserLogin), AdminController.login)
router.get('/menu', AdminController.menus)
router.get('/menu-tree', AdminController.menuTree)

router.get('/roles', AdminSystemC.roles)
router.post('/role', genValidator(CreateRole), AdminSystemC.createRole)
router.delete('/role', genValidator(IdValid), AdminSystemC.deleteRole)
router.put('/role', genValidator(IdValid), AdminSystemC.updateRole)
router.get('/role', genValidator(IdValid), AdminSystemC.getRole)

router.get('/managers', AdminSystemC.adminUsers)
router.post('/manager', genValidator(CreateAdminUser), AdminSystemC.createUser)
router.delete('/manager', genValidator(IdValid), AdminSystemC.deleteUser)
router.put('/manager', genValidator(IdValid), AdminSystemC.updateUser)
router.get('/manager', genValidator(IdValid), AdminSystemC.getUser)

export default router
