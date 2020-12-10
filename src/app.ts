import Koa from 'koa'
import logger from 'koa-logger'
import Config from './config'
import { dbInit } from './db/mysql'
import Bodyparser from 'koa-bodyparser'
import jwt from 'koa-jwt'

import example from './routers/example'
import user from './routers/user'
import HttpResult from './utils/http-result'
import HttpC from './constants/http-c'
import { jwtSecret } from './utils/jwt-utils'

const app = new Koa()

// 全局错误处理
// Custom 401 handling (first middleware)
app.use(async (ctx, next) => {
  try {
    return next()
  } catch (err) {
    if (err.status === 401) {
      ctx.status = 401
      ctx.body = HttpResult.fail(HttpC.AUTH_ERROR)
    } else {
      throw err
    }
  }
})

app.use(logger())
app.use(Bodyparser())
app.use(
  jwt({ secret: jwtSecret }).unless({
    path: [/^\/public/, /^\/example/, '/login', '/register', '/'],
  })
)

//TODO: cors

// router start
app.use(example.routes()).use(example.allowedMethods())
app.use(user.routes()).use(user.allowedMethods())
// router end

// dbInit().then((res) => {
//   app.listen(Config.port);
//   console.log(`Server running on port ${Config.port}`);
// });

// async function start() {
//   await dbInit()
//   serverInner = app.listen(Config.port)
// }

// start()
const serverInner = app.listen(Config.port)
dbInit()

export { serverInner }
export default app
