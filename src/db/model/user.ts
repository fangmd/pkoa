import { Column, Entity, PrimaryColumn, Unique } from 'typeorm'
import BaseModel from './base-model'

@Entity()
@Unique(['id'])
export class User extends BaseModel {
  @PrimaryColumn()
  id!: string
  @Column({
    length: 30,
    comment: '用户名',
    unique: true,
  })
  username!: string
  @Column({ comment: '密码', select: false })
  password!: string
  @Column({ comment: '昵称', nullable: true })
  nickname!: string
}
