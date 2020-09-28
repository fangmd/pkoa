import { Length, MinLength } from "class-validator";

export class CreateUser {
  @Length(10, 20)
  readonly username: string | undefined;

  @MinLength(8, {
    message: "Password is too short",
  })
  readonly password: string | undefined;
}
