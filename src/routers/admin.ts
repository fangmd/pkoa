import Router from 'koa-router'
import { AdminController } from '../controller/admin-controller'
import { AdminSystemC } from '../controller/admin-system-c'
import { genValidator } from '../middleware/validator'
import { CreateRole } from '../validators/admin-system'
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

export default router
