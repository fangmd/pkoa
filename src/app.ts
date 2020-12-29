import { initEnv } from './env'
initEnv()
import Koa from 'koa'
import logger from 'koa-logger'
import Config from './config'
import { dbInit } from './db/mysql'
import Bodyparser from 'koa-bodyparser'
import jwt from 'koa-jwt'
import cors from '@koa/cors'
import { accessLogger, systemLogger } from './utils/logger'

import { jwtSecret } from './utils/jwt-utils'
import globalErrorHandle from './middleware/global-error'
import example from './routers/example'
import user from './routers/user'
import { isUniTest } from './utils/env'
import { Server } from 'http'

const app = new Koa()

// middleware start
app.use(globalErrorHandle) // 全局错误处理
app.use(logger())
app.use(accessLogger)
app.use(cors())
app.use(Bodyparser())
app.use(
  jwt({ secret: jwtSecret }).unless({
    path: [/^\/public/, /^\/example/, '/login', '/register', '/'],
  })
)
// middleware end

// router start
app.use(example.routes()).use(example.allowedMethods())
app.use(user.routes()).use(user.allowedMethods())

app.on('error', function (err, ctx) {
  console.log(err)
  systemLogger.error('server error', err, ctx)
})
// router end

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
