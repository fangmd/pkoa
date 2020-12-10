import Koa from 'koa'
import logger from 'koa-logger'
import Config from './config'
import { dbInit } from './db/mysql'
import Bodyparser from 'koa-bodyparser'
import jwt from 'koa-jwt'

import { jwtSecret } from './utils/jwt-utils'
import globalErrorHandle from './middleware/global-error'
import example from './routers/example'
import user from './routers/user'
import { isUniTest } from './utils/env'
import { Server } from 'http'

const app = new Koa()

// 全局错误处理
app.use(globalErrorHandle)
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

// async function start() {
//   await dbInit()
//   serverInner = app.listen(Config.port)
// }

// start()

let serverInner: Server
if (isUniTest) {
  serverInner = app.listen(Config.port)
} else {
  dbInit().then((res) => {
    app.listen(Config.port)
    console.log(`Server running on port ${Config.port}`)
  })
}

export { serverInner }
export default app
