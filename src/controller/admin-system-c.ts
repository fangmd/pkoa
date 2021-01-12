import { Context } from 'koa'
import AdminUserService from '../service/admin-user-service'
import { RoleService } from '../service/role-service'
import HttpResult from '../utils/http-result'

/**
 * Admin 系统管理相关
 */
export class AdminSystemC {
  public static async roles(ctx: Context) {
    const { page, size } = ctx.request.query
    const result = await RoleService.query(page, size)
    ctx.body = HttpResult.success({ list: result[0], totalCnt: result[1] })
  }

  /**
   * 创建 Role
   */
  public static async createRole(ctx: Context) {
    const { roleName, roleDescription, menuIds } = ctx.request.body
    const role = await RoleService.addRole(roleName, roleDescription, menuIds)
    if (!role) {
      ctx.body = HttpResult.fail()
    }
    ctx.body = HttpResult.success()
  }
  /**
   * 删除 Role
   */
  public static async deleteRole(ctx: Context) {
    const { id } = ctx.request.query
    const ret = await RoleService.deleteRole(id)
    if (ret && ret.affected && ret.affected <= 0) {
      ctx.body = HttpResult.fail()
    }
    ctx.body = HttpResult.success()
  }
  /**
   * 更新 Role
   */
  public static async updateRole(ctx: Context) {
    const { id, roleName, roleDescription, menuIds } = ctx.request.body
    const ret = await RoleService.updateRole(id, roleName, roleDescription, menuIds)
    if (!ret) {
      ctx.body = HttpResult.fail()
    }
    ctx.body = HttpResult.success()
  }
  /**
   * 获取 Role 详情
   */
  public static async getRole(ctx: Context) {}

  /**
   * 获取所有 管理员用户, 分页
   */
  static async adminUsers(ctx: Context) {
    const { page, size } = ctx.request.query
    const ret = await AdminUserService.query(page, size)
    ctx.body = HttpResult.success({ list: ret[0], totalCnt: ret[1] })
  }
  /**
   * 创建用户
   */
  static async createUser(ctx: Context) {
    const { username, password, roleId, nickname } = ctx.request.body
    const ret = await AdminUserService.add(username, password, roleId, nickname)
    if (!ret) {
      ctx.body = HttpResult.fail()
    }
    ctx.body = HttpResult.success()
  }
  /**
   * 删除用户
   */
  static async deleteUser(ctx: Context) {
    const { id } = ctx.request.query
    const ret = await AdminUserService.delete(id)
    if (!ret) {
      ctx.body = HttpResult.fail()
    }
    ctx.body = HttpResult.success()
  }
  /**
   * 更新用户
   */
  static async updateUser(ctx: Context) {
    const { id, username, password, roleId, nickname, status } = ctx.request.body
    const ret = await AdminUserService.update(id, username, password, roleId, nickname, status)
    if (!ret) {
      ctx.body = HttpResult.fail()
    }
    ctx.body = HttpResult.success()
  }
  /**
   * 获取用户详情
   */
  static async getUser(ctx: Context) {}
}
