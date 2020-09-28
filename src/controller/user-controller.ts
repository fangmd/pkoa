import { validate, ValidationError } from "class-validator";
import { Context } from "koa";
import { User } from "../entity/user";
import UserService from "../service/user-service";
import getUniqueID from "../utils/snowflake";
import { CreateUser } from "../validators/user";

export default class UserController {
  public static async getUsers(ctx: Context) {
    const users: User[] = await UserService.getUsers();
    ctx.status = 200;
    ctx.body = users;
  }

  public static async getUserById(ctx: Context) {
    ctx.status = 200;
    ctx.body = await UserService.getUserById(ctx.params.id);
  }

  public static async addUser(ctx: Context) {
    const userVali: CreateUser = ctx.request.body;
    // const errors: ValidationError[] = await validate(userVali);
    const errors = await validate(userVali);
    console.log(errors);

    if (errors.length > 0) {
      ctx.body = errors;
      return;
    }

    console.log(userVali);

    const user: User = ctx.request.body;

    user.id = `${getUniqueID()}`;
    ctx.status = 200;

    // ctx.body = await UserService.addAndUpdateUser(user);
  }

  public static async updateUser(ctx: Context) {
    const findUser = await UserService.getUserById(ctx.params.id);
    if (!findUser) {
      ctx.status = 400;
      ctx.body = "user is not exists!";
    } else {
      ctx.status = 200;
      ctx.body = await UserService.addAndUpdateUser(
        Object.assign(findUser, ctx.request.body)
      );
    }
  }

  public static async deleteUser(ctx: Context) {
    const findUser = await UserService.getUserById(ctx.params.id);
    if (!findUser) {
      ctx.status = 400;
      ctx.body = "user is not exists!";
    } else {
      ctx.status = 204;
      await UserService.deleteUser(findUser);
    }
  }
}
