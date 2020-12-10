/**
 * @description 请求参数校验中间件
 */

import { plainToClass } from 'class-transformer'
import { validate } from 'class-validator'
import { Context, Next } from 'koa'
import HttpResult from '../utils/http-result'

/**
 * 生成 Post 请求 参数校验中间件
 * @param validationData 参数校验规则
 */
function genValidator(validationData: any) {
  const retFunc = async (ctx: Context, next: Next) => {
    let vali: any
    if (ctx.request.method === 'POST' || ctx.request.method === 'PUT') {
      vali = plainToClass(validationData, ctx.request.body)
    } else if (ctx.request.method === 'GET' || ctx.request.method === 'DELETE') {
      vali = plainToClass(validationData, ctx.request.query)
    }
    const errors = await validate(vali!, {
      forbidUnknownValues: true,
    })
    if (errors.length > 0) {
      ctx.body = HttpResult.paramsError(errors)
      return
    }
    await next()
  }
  return retFunc
}

export { genValidator }
