/**
 * @description 请求结果
 */

import HttpC from '../constants/http-c'
import HttpMsg from '../constants/http-msg'
/**
 * 网络请求结果封装类
 * Restful 接口结果封装
 */
export default class HttpResult {
  code: number
  msg: string
  data: any
  error: any

  constructor(code: number, msg: string, data?: any, error?: any) {
    this.code = code
    this.msg = msg
    this.data = data
    this.error = error
  }

  // Create Success HttpResult
  static success(data?: any): HttpResult {
    return new HttpResult(HttpC.SUCCESS, 'success', data)
  }

  // Create Fail HttpResult
  static failMsg(code: number, msg: string): HttpResult {
    return new HttpResult(code, msg)
  }

  // Create Fail HttpResult
  static fail(code: number): HttpResult {
    return new HttpResult(code, HttpMsg.getMsg(code))
  }

  // 参数错误
  static paramsError(errors: import('class-validator').ValidationError[]): any {
    return new HttpResult(HttpC.PARAMS_ERROR, 'Params Error', {}, errors)
  }

  public toString(): string {
    return `${this.code}`
  }
}
