import { getRepository } from 'typeorm'
import { PAGE_SIZE } from '../constants/c'
import { Role } from '../db/model/role'
import getUniqueID from '../utils/snowflake'

/**
 * Role Model 处理
 */
export class RoleService {
  /**
   * 查询数据
   * @param page 页码
   * @param size 每页数量
   */
  public static async query(page: number = 0, size: number = PAGE_SIZE) {
    const rep = getRepository(Role)
    const where: any = {}
    if (page > 0) {
      page--
    }
    return rep.findAndCount({
      where,
      take: size,
      skip: page * size,
      order: {
        createTime: 'DESC',
      },
    })
  }

  /**
   * 添加角色
   * @param roleName 角色名称
   * @param roleDescription 角色描述
   * @param menuIds 菜单，权限
   */
  public static async addRole(roleName: string, roleDescription: string, menuIds: string) {
    const rep = getRepository(Role)
    const role = new Role()
    role.id = `${getUniqueID()}`
    role.roleName = roleName
    role.roleDescription = roleDescription
    role.menuIds = menuIds
    return rep.save(role)
  }

  /**
   * 删除角色
   * TODO: 如果有用户使用了这个角色，就不能删除
   * @param id role id
   */
  public static async deleteRole(id: string) {
    if (!id) {
      return null
    }
    const rep = getRepository(Role)
    const where: any = {}
    if (id) {
      where.id = id
    }
    return rep.delete(where)
  }

  /**
   * 更新角色
   * @param id id
   * @param roleName 角色名称
   * @param roleDescription 角色描述
   * @param menuIds 菜单
   */
  static async updateRole(id: string, roleName: string, roleDescription: string, menuIds: string) {
    if (!id) {
      return null
    }
    const rep = getRepository(Role)
    const whereOpt: any = {}
    if (id) {
      whereOpt.id = id
    }
    const updateOpt: any = {}
    if (roleName) {
      updateOpt.roleName = roleName
    }
    if (roleDescription) {
      updateOpt.roleDescription = roleDescription
    }
    if (menuIds) {
      updateOpt.menuIds = menuIds
    }
    return rep.update(whereOpt, updateOpt)
  }
}
