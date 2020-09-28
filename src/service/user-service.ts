import { getRepository, Repository } from "typeorm";
import { User } from "../entity/user";

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
}
