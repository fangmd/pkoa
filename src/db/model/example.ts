import { Column, Entity, PrimaryColumn, Unique } from 'typeorm'
import BaseModel from './base-model'

@Entity()
@Unique(['id'])
export default class Example extends BaseModel {
  @PrimaryColumn()
  id!: string

  @Column({ comment: '首页 访问次数' })
  cnt!: number
}
