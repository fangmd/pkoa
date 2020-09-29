import { IsEmail, IsNotEmpty, Length, MinLength } from "class-validator";

export class CreateUser {
  @Length(0)
  username?: string;

  @MinLength(8, {
    message: "Password Length must >= 8",
  })
  password?: string;
}

export class GetDeleteUser {
  @IsNotEmpty()
  id?: string;
}
