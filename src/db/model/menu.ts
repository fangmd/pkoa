import { Column, Entity, PrimaryColumn, Unique } from 'typeorm'
import BaseModel from './base-model'

@Entity()
@Unique(['id'])
export class Menu extends BaseModel {
  @PrimaryColumn()
  id!: string
  @Column({ comment: '父菜单 id' })
  parentId!: number
  @Column({ comment: '排序' })
  sortId!: number
  @Column({ comment: '菜单名称' })
  menuName!: string
  @Column({ comment: '菜单 icon' })
  menuIcon!: string
  @Column({ comment: '菜单 Title' })
  menuTitle!: string
}
