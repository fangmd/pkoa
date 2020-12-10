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
