import { Column, Entity, PrimaryColumn, Unique } from 'typeorm'
import BaseModel from './base-model'

@Entity()
@Unique(['id'])
export class Menu extends BaseModel {
  @PrimaryColumn()
  id!: string
  @Column({ comment: '父菜单 id', name: 'parent_id' })
  parentId!: number
  @Column({ comment: '排序', name: 'sort_id' })
  sortId!: number
  @Column({ comment: '菜单名称', name: 'menu_name' })
  menuName!: string
  @Column({ comment: '菜单 icon', name: 'menu_icon' })
  menuIcon!: string
  @Column({ comment: '菜单 Title', name: 'menu_title' })
  menuTitle!: string
}
