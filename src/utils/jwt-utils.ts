import jsonwebtoken from 'jsonwebtoken'
import { Context } from 'koa'

export const jwtSecret = 'shared-secret'

export default class JwtUtils {
  /**
   * 获取 jwt
   * 签名
   */
  public static sign(data: any) {
    return jsonwebtoken.sign(data, jwtSecret, { expiresIn: '24h' })
  }

  /**
   * 从请求头中获取 jwt
   */
  public static getJWT(ctx: Context): string | undefined {
    let auth: string | undefined = ctx.headers.authorization
    return auth?.replace('Bearer ', '')
  }

  /**
   * 从 jwt 中获取 userid
   */
  public static getUserId(ctx: Context): string | undefined {
    const token = this.getJWT(ctx)
    if (token) {
      const data = jsonwebtoken.decode(token)
      if (data) {
        return (data as { [key: string]: any }).id
      }
    }
    return undefined
  }
}
