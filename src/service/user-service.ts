import { getRepository, Repository } from 'typeorm'
import { User } from '../db/model'
import MD5Utils from '../utils/md5'
import getUniqueID from '../utils/snowflake'

export default class UserService {
  private static repositoryUser(): Repository<User> {
    return getRepository(User)
  }

  public static async getUsers() {
    return this.repositoryUser().find()
  }

  public static async getUserById(id: string) {
    return this.repositoryUser().findOne(id)
  }

  public static async getUserByName(name: string) {
    return this.repositoryUser().findOne({
      username: name,
    })
  }

  public static async addUser(user: User) {
    user.id = `${getUniqueID()}`
    const findUser = await this.getUserByName(user.username)
    if (findUser) {
      return
    }
    return await this.repositoryUser().save(user)
  }

  public static async addAndUpdateUser(user: User) {
    return this.repositoryUser().save(user)
  }

  public static async deleteUser(user: User) {
    return this.repositoryUser().remove(user)
  }

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
    const findUser = await this.repositoryUser().findOne(findOpt)
    return findUser
  }
}
