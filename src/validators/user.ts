import { IsEmail, IsNotEmpty, Length, MinLength } from "class-validator";

export class CreateUser {
  @Length(10, 20)
  username?: string;

  @MinLength(8, {
    message: "Password is too short",
  })
  password?: string;

  @IsEmail({}, { message: "邮箱格式错误" })
  email?: string;
}

export class GetDeleteUser {
  @IsNotEmpty()
  id?: string;
}
