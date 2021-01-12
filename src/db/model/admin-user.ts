import { Column, Entity, PrimaryColumn, Unique } from 'typeorm'
import { STATUS_ENABLE } from '../../constants/c'
import BaseModel from './base-model'

@Entity({ name: 't_admin_user' })
@Unique(['id'])
export class AdminUser extends BaseModel {
  @PrimaryColumn()
  id!: string
  @Column({
    length: 30,
    comment: '用户名',
    unique: true,
  })
  username!: string
  @Column({ comment: '密码', select: false})
  password!: string
  @Column({ comment: '昵称', nullable: true })
  nickname!: string
  @Column({ comment: '角色 id', nullable: false, name: 'role_id' })
  roleId!: string
  @Column({ comment: '是否可用', default: STATUS_ENABLE, name: 'status' })
  status!: number
}
