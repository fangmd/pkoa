/**
 * @description 初始化 tag
 * 运行脚本：export NODE_ENV=development && ts-node src/db/init/menu-init.ts
 */
import { initEnv } from '../../env'
initEnv()

import { MenuService } from '../../service/menu-service'
import { dbInit } from '../mysql'

export async function initMenu() {
  await MenuService.removeAll()

  // menu blog
  await MenuService.addMenu(1, 0, 1, 'BlogManage', 'fa-circle-o', 'BlogManage')
  await MenuService.addMenu(11, 1, 1, 'TagManage', 'fa-circle-o', 'TagManage')
  await MenuService.addMenu(12, 1, 2, 'CategoryManage', 'fa-circle-o', 'CategoryManage')
  await MenuService.addMenu(13, 1, 3, 'ArticleManage', 'fa-circle-o', 'ArticleManage')

  // menu system manager
  await MenuService.addMenu(2, 0, 1, 'SystemManage', 'fa-circle-o', 'SystemManage')
  await MenuService.addMenu(21, 2, 1, 'RoleManage', 'fa-circle-o', 'RoleManage')
  await MenuService.addMenu(22, 2, 2, 'UserManage', 'fa-circle-o', 'UserManage')
}

async function initTag() {
  await dbInit()

  await initMenu()
}

initTag()
