/**
 * @description admin 菜单操作
 */

import { getRepository, Repository } from 'typeorm'
import { Menu } from '../db/model/menu'

export class MenuService {
  /**
   * 添加菜单
   */
  public static async addMenu(
    id: number,
    parentId: number,
    sortId: number,
    menuName: string,
    menuIcon: string,
    menuTitle: string
  ) {
    const rep = getRepository(Menu)
    const menu = new Menu()
    menu.id = `${id}`
    menu.parentId = parentId
    menu.sortId = sortId
    menu.menuName = menuName
    menu.menuIcon = menuIcon
    menu.menuTitle = menuTitle
    rep.save(menu)
  }

  /**
   * 获取所有菜单
   */
  public static async getAllMenu() {
    const rep = getRepository(Menu)
    return rep.find()
  }

  /**
   * remove all
   */
  public static async removeAll() {
    const rep = getRepository(Menu)
    return rep.clear()
  }

  /**
   * 获取菜单树
   */
  public static async getMenuTree() {
    const rep = getRepository(Menu)
    const menus = await rep.find()
    const list: any[] = []
    for (const item of menus) {
      if (item.parentId === 0) {
        list.push(item)
      } else {
        for (const i of list) {
          if (`${item.parentId}` === i.id) {
            if (!i.children) {
              i.children = []
            }
            i.children.push(item)
            break
          }
        }
      }
    }
    return list
  }
}
