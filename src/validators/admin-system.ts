import { IsNotEmpty } from 'class-validator'

export class CreateRole {
  @IsNotEmpty()
  roleName?: string
  @IsNotEmpty()
  roleDescription?: string
  @IsNotEmpty()
  menuIds?: string
}

export class CreateAdminUser {
  @IsNotEmpty()
  username?: string
  @IsNotEmpty()
  password?: string
  @IsNotEmpty()
  roleId?: string
  @IsNotEmpty()
  nickname?: string
}
