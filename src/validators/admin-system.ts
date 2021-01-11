import { IsNotEmpty } from 'class-validator'

export class CreateRole {
  @IsNotEmpty()
  roleName?: string
  @IsNotEmpty()
  roleDescription?: string
  @IsNotEmpty()
  menuIds?: string
}
