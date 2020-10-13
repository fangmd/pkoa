import { getRepository, Repository } from "typeorm";
import HttpC from "../constants/http-c";
import { User } from "../entity/user";
import { UserLogin } from "../validators/user";

export default class UserService {
  private static repositoryUser(): Repository<User> {
    return getRepository(User);
  }

  public static async getUsers() {
    return this.repositoryUser().find();
  }

  public static async getUserById(id: string) {
    return this.repositoryUser().findOne(id);
  }

  public static async addAndUpdateUser(user: User) {
    return this.repositoryUser().save(user);
  }

  public static async deleteUser(user: User) {
    return this.repositoryUser().remove(user);
  }

  /**
   * 用户登陆
   * @param user 用户请求参数
   */
  public static async userLogin(user: UserLogin) {
    const findUser = await this.repositoryUser().findOne({
      username: user.username,
    });
    if (!findUser) {
      return { error: HttpC.USER_NOT_EXIST };
    } else if (findUser.password === user.password) {
      return { data: findUser };
    } else {
      return { error: HttpC.PWD_ERROR };
    }
  }
}
