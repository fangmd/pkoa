import { Context } from 'koa'
import HttpC from '../constants/http-c'
import { MenuService } from '../service/menu-service'
import UserService from '../service/user-service'
import HttpResult from '../utils/http-result'
import JwtUtils from '../utils/jwt-utils'

export class AdminController {
  /**
   * 登入
   */
  public static async login(ctx: Context) {
    const { username, password } = ctx.request.body
    const userInfo = await UserService.findUser(username!, password)
    if (!userInfo) {
      ctx.body = HttpResult.fail(HttpC.USER_NOT_EXIST)
      return
    }
    ctx.body = HttpResult.success({
      username: userInfo.username,
      userId: userInfo.id,
      jwt: JwtUtils.sign({ username: userInfo.username, id: userInfo.id }),
    })
  }

  /**
   * 获取 菜单
   * 目前全部返回，没有权限控制
   */
  public static async menus(ctx: Context) {
    const userId = JwtUtils.getUserId(ctx)!
    const userInfo = await UserService.getUserById(userId)
    const menus = await MenuService.getAllMenu()
    ctx.body = HttpResult.success({
      username: userInfo!.username,
      userId: userInfo!.id,
      menus: menus,
    })
  }

  /**
   * 返回树形结构的菜单
   */
  public static async menuTree(ctx: Context) {
    const menus = await MenuService.getMenuTree()
    ctx.body = HttpResult.success({ list: menus })
  }
}
