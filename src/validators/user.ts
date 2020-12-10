import { IsNotEmpty, MinLength } from 'class-validator'

export class CreateUser {
  @IsNotEmpty()
  username?: string

  @MinLength(8, {
    message: 'Password Length must >= 8',
  })
  password?: string
}

export class UpdateUser {
  @IsNotEmpty()
  username?: string
}

export class GetDeleteUser {
  @IsNotEmpty()
  id?: string
}

export class UserLogin {
  @IsNotEmpty()
  username?: string

  @MinLength(8, {
    message: 'Password Length must >= 8',
  })
  password?: string
}
