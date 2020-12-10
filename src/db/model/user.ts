import { Column, Entity, PrimaryColumn, Unique } from 'typeorm'
import BaseModel from './base-model'

@Entity()
@Unique(['username'])
export class User extends BaseModel {
  @PrimaryColumn()
  id!: string
  @Column({
    length: 30,
  })
  username!: string
  @Column()
  password!: string
}
