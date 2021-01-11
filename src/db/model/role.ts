import { Column, Entity, PrimaryColumn, Unique } from 'typeorm'
import BaseModel from './base-model'

@Entity()
@Unique(['id'])
export class Role extends BaseModel {
  @PrimaryColumn()
  id!: string
  @Column({ comment: '菜单 ids' })
  menuIds!: string
  @Column({ comment: '角色名', unique: true })
  roleName!: string
  @Column({ comment: '角色描述' })
  roleDescription!: string
}
