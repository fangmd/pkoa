/**
 * @description http server
 */
import { initEnv } from '../src/env'
initEnv()
import request from 'supertest'
import app, { serverInner } from '../src/app'
import { dbInit } from '../src/db/mysql'
// import { redisClient } from '../src/cache/redis'

/**
 * 关闭 redis 连接
 */
async function shutdownRedis() {
  // await new Promise<void>((resolve) => {
  //   redisClient.quit(() => {
  //     resolve()
  //   })
  // })
  // redis.quit() creates a thread to close the connection.
  // We wait until all threads have been run once to ensure the connection closes.
  //   await new Promise((resolve) => setImmediate(resolve))
}

/**
 * 安全关闭 测试环境
 */
async function safeShutdown() {
  await shutdownRedis()
  serverInner.close() // CLOSE THE SERVER CONNECTION
  await new Promise<void>((resolve) => setTimeout(() => resolve(), 500)) // avoid jest open handle error
}

async function initAll() {
  await dbInit()
}

export { safeShutdown, initAll }
export default request(app.callback())
