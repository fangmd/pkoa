import { plainToClass } from "class-transformer";
import { transformAndValidate } from "class-transformer-validator";
import { validate, ValidationError } from "class-validator";
import { Context } from "koa";
import { User } from "../entity/user";
import UserService from "../service/user-service";
import HttpResult from "../utils/http-result";
import JwtUtils from "../utils/jwt-utils";
import MD5Utils from "../utils/md5";
import getUniqueID from "../utils/snowflake";
import { CreateUser, GetDeleteUser, UserLogin } from "../validators/user";

export default class UserController {
  public static async getUsers(ctx: Context) {
    const users: User[] = await UserService.getUsers();
    ctx.status = 200;
    ctx.body = HttpResult.success(users);
  }

  /**
   * 获取用户信息(自己或者他人)
   */
  public static async getUserById(ctx: Context) {
    // const vali = await plainToClass(GetDeleteUser, ctx.query);
    // const errors = await validate(vali, {
    //   forbidUnknownValues: true,
    // });
    // if (errors.length > 0) {
    //   ctx.body = errors;
    //   return;
    // }

    let id;
    if (ctx.query.id) {
      id = ctx.query.id;
    } else {
      const userId = JwtUtils.getUserId(ctx);
      if (userId) {
        id = userId;
      }
    }

    ctx.status = 200;
    ctx.body = HttpResult.success(await UserService.getUserById(id));
  }

  public static async addUser(ctx: Context) {
    const vali = await plainToClass(CreateUser, ctx.request.body);
    const errors = await validate(vali, {
      forbidUnknownValues: true,
    });
    if (errors.length > 0) {
      ctx.body = errors;
      return;
    }

    const user: User = ctx.request.body;
    user.id = `${getUniqueID()}`;
    user.password = MD5Utils.hashStr(user.password);
    const { error, data } = await UserService.addUser(user);

    ctx.status = 200;
    if (error) {
      ctx.body = HttpResult.fail(error);
    } else {
      ctx.body = HttpResult.success({ username: data?.username });
    }
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
    const vali = await plainToClass(GetDeleteUser, ctx.query);
    const errors = await validate(vali, {
      forbidUnknownValues: true,
    });
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

  public static async userLogin(ctx: Context) {
    const vali = await plainToClass(UserLogin, ctx.request.body);
    const errors = await validate(vali, {
      forbidUnknownValues: true,
    });
    if (errors.length > 0) {
      ctx.body = errors;
      return;
    }

    const { data, error } = await UserService.userLogin(ctx.request.body);
    if (error) {
      ctx.body = HttpResult.fail(error);
      return;
    }
    ctx.body = HttpResult.success({
      username: data?.username,
      jwt: JwtUtils.sign({ username: data?.username, id: data?.id }),
    });
  }
}
