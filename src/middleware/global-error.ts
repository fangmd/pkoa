/**
 * @description 全局错误处理
 */

import { Context, Next } from 'koa'
import HttpC from '../constants/http-c'
import HttpResult from '../utils/http-result'

/**
 * 全局错误处理 中间件
 * @param ctx Context
 * @param next next
 */
async function globalErrorHandle(ctx: Context, next: Next) {
  try {
    return await next()
  } catch (err) {
    if (err.status === 401) {
      ctx.body = HttpResult.fail(HttpC.AUTH_ERROR)
    } else {
      console.error(err.message, err.stack)
      ctx.body = HttpResult.fail(HttpC.SERVER_ERROR)
    }
  }
}

export default globalErrorHandle
