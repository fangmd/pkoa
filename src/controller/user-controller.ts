import { Context } from 'koa'
import HttpC from '../constants/http-c'
import { User } from '../db/model'
import UserService from '../service/user-service'
import HttpResult from '../utils/http-result'
import JwtUtils from '../utils/jwt-utils'
import MD5Utils from '../utils/md5'
import getUniqueID from '../utils/snowflake'

export default class UserController {
  /**
   * 获取用户信息(自己或者他人)
   */
  public static async getUserById(ctx: Context) {
    let id
    if (ctx.query.id) {
      id = ctx.query.id
    } else {
      const userId = JwtUtils.getUserId(ctx)
      if (userId) {
        id = userId
      }
    }
    ctx.body = HttpResult.success(await UserService.getUserById(id))
  }

  /**
   * 注册
   * @param ctx context
   */
  public static async register(ctx: Context) {
    const user: User = ctx.request.body
    user.id = `${getUniqueID()}`
    user.password = MD5Utils.hashStr(user.password)
    const { error, data } = await UserService.addUser(user)
    if (error) {
      ctx.body = HttpResult.fail(error)
    } else {
      ctx.body = HttpResult.success({ username: data?.username, id: data?.id })
    }
  }

  /**
   * 更新用户
   * @param ctx Context
   */
  public static async updateUser(ctx: Context) {
    const userId = JwtUtils.getUserId(ctx)
    const findUser = await UserService.getUserById(userId!)
    if (!findUser) {
      ctx.body = HttpResult.fail(HttpC.USER_NOT_EXIST)
    } else {
      await UserService.addAndUpdateUser(Object.assign(findUser, ctx.request.body))
      ctx.body = HttpResult.success()
    }
  }

  /**
   * 删除用户
   * @param ctx Context
   */
  public static async deleteUser(ctx: Context) {
    const findUser = await UserService.getUserById(ctx.query.id)
    if (!findUser) {
      ctx.body = HttpResult.fail(HttpC.DELETE_USER_FAIL)
    } else {
      const user: User = await UserService.deleteUser(findUser)
      ctx.body = HttpResult.success()
    }
  }

  /**
   * 用户登录
   * @param ctx Context
   */
  public static async userLogin(ctx: Context) {
    const { username, password } = ctx.request.body
    const userInfo = await UserService.findUser(username!, password)
    if (!userInfo) {
      ctx.body = HttpResult.fail(HttpC.USER_NOT_EXIST)
      return
    }
    ctx.body = HttpResult.success({
      username: userInfo.username,
      jwt: JwtUtils.sign({ username: userInfo.username, id: userInfo.id }),
    })
  }
}
