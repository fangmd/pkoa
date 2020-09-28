import { validate, ValidationError } from "class-validator";
import { Context } from "koa";
import { User } from "../entity/user";
import UserService from "../service/user-service";
import HttpResult from "../utils/http-result";
import getUniqueID from "../utils/snowflake";
import { CreateUser, GetDeleteUser } from "../validators/user";

export default class UserController {
  public static async getUsers(ctx: Context) {
    const users: User[] = await UserService.getUsers();
    ctx.status = 200;
    ctx.body = HttpResult.success(users);
  }

  public static async getUserById(ctx: Context) {
    const vali: GetDeleteUser = ctx.query;
    const errors: ValidationError[] = await validate(vali, {});
    if (errors.length > 0) {
      ctx.body = errors;
      return;
    }

    ctx.status = 200;
    ctx.body = HttpResult.success(await UserService.getUserById(ctx.query.id));
  }

  public static async addUser(ctx: Context) {
    const vali: CreateUser = ctx.request.body;
    const errors: ValidationError[] = await validate(vali, {});
    console.log(errors);
    if (errors.length > 0) {
      ctx.body = errors;
      return;
    }

    console.log(vali);
    const user: User = ctx.request.body;
    user.id = `${getUniqueID()}`;
    ctx.status = 200;
    ctx.body = await UserService.addAndUpdateUser(user);
  }

  public static async updateUser(ctx: Context) {
    const findUser = await UserService.getUserById(ctx.params.id);
    if (!findUser) {
      ctx.status = 400;
      ctx.body = "user is not exists!";
    } else {
      ctx.status = 200;
      await UserService.addAndUpdateUser(
        Object.assign(findUser, ctx.request.body)
      );
      ctx.body = HttpResult.success();
    }
  }

  public static async deleteUser(ctx: Context) {
    const vali: GetDeleteUser = ctx.query;
    const errors: ValidationError[] = await validate(vali, {});
    if (errors.length > 0) {
      ctx.body = errors;
      return;
    }

    const findUser = await UserService.getUserById(ctx.query.id);
    if (!findUser) {
      ctx.status = 400;
      ctx.body = "user is not exists!";
    } else {
      ctx.status = 200;
      const user: User = await UserService.deleteUser(findUser);
      ctx.body = HttpResult.success();
    }
  }
}
