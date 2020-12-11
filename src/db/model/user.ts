import { Column, Entity, PrimaryColumn, Unique } from 'typeorm'
import BaseModel from './base-model'

@Entity()
@Unique(['username', 'id'])
export class User extends BaseModel {
  @PrimaryColumn()
  id!: string
  @Column({
    length: 30,
    comment: '用户名',
  })
  username!: string
  @Column({ comment: '密码' })
  password!: string
  @Column({ comment: '昵称', nullable: true })
  nickname!: string
}
