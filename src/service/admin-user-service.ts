import { getRepository, Repository } from 'typeorm'
import { PAGE_SIZE } from '../constants/c'
import { AdminUser } from '../db/model/admin-user'
import { Role } from '../db/model/role'
import MD5Utils from '../utils/md5'
import getUniqueID from '../utils/snowflake'

export default class AdminUserService {
  /**
   * 查找用户
   * @param username 用户名称
   * @param password 用户密码
   */
  public static async findUser(username: string, password?: string) {
    let findOpt: any = { username }
    if (password) {
      findOpt.password = MD5Utils.hashStr(password)
    }
    const findUser = await getRepository(AdminUser).findOne(findOpt)
    return findUser
  }

  public static async getUserById(id: string) {
    return getRepository(AdminUser).findOne(id)
  }

  /**
   * 查询数据
   * @param page 页码
   * @param size 每页数量
   */
  public static async query(page: number = 0, size: number = PAGE_SIZE) {
    const rep = getRepository(AdminUser)
    const where: any = {}
    if (page > 0) {
      page--
    }

    const ret = await getRepository(AdminUser)
      .createQueryBuilder('u')
      .leftJoinAndMapOne('u.role', 'role', 'r', 'r.id = u.roleId') // & .getMany()
      // .leftJoinAndSelect(Role, 'r', 'u.role_id=r.id') // & .getRawMany()
      .skip(page * size)
      .take(size)
      .orderBy('u.createTime', 'DESC')
      // .getRawMany()
      .getManyAndCount()
    return ret
  }

  /**
   * 添加
   */
  public static async add(username: string, password: string, roleId: string, nickname: string) {
    const rep = getRepository(AdminUser)
    const user = new AdminUser()
    user.id = `${getUniqueID()}`
    user.username = username
    user.password = MD5Utils.hashStr(password)
    user.roleId = roleId
    user.nickname = nickname
    return rep.save(user)
  }

  /**
   * 删除
   * @param id role id
   */
  public static async delete(id: string) {
    if (!id) {
      return null
    }
    const rep = getRepository(AdminUser)
    const where: any = {}
    if (id) {
      where.id = id
    }
    return rep.delete(where)
  }

  /**
   * 更新
   */
  static async update(
    id: string,
    username: string,
    password: string,
    roleId: string,
    nickname: string,
    status: number
  ) {
    if (!id) {
      return null
    }
    const rep = getRepository(AdminUser)
    const whereOpt: any = {}
    if (id) {
      whereOpt.id = id
    }
    const updateOpt: any = {}
    if (username) {
      updateOpt.username = username
    }
    if (password) {
      updateOpt.password = MD5Utils.hashStr(password)
    }
    if (roleId) {
      updateOpt.roleId = roleId
    }
    if (nickname) {
      updateOpt.nickname = nickname
    }
    if (status) {
      updateOpt.status = status
    }
    return rep.update(whereOpt, updateOpt)
  }
}
