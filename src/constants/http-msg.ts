/**
 * @description HttpResult 消息提示
 */

import HttpC from './http-c'

export default class HttpMsg {
  public static readonly map: Map<number, string> = new Map([
    [HttpC.SUCCESS, '成功'],
    [HttpC.AUTH_ERROR, '未登陆'],
    [HttpC.PWD_ERROR, '密码错误'],
    [HttpC.USER_NOT_EXIST, '用户不存在'],
    [HttpC.USER_NAME_IS_TAKEN, '用户名已经被使用'],
    [HttpC.DELETE_USER_FAIL, '用户不存在'],

    // { key: HttpC.SUCCESS, value: "成功" },
    // { key: HttpC.AUTH_ERROR, value: "未登陆" },
  ])

  /**
   * 获取错误对应的提示
   * @param code HttpC
   */
  public static getMsg(code: number): string {
    return this.map.get(code) ?? 'unknow error'
  }
}
