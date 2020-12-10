/**
 * @description http server
 */

import request from 'supertest'
import app, { serverInner } from '../src/app'
import { redisClient } from '../src/cache/redis'

async function shutdownRedis() {
  await new Promise((resolve) => {
    redisClient.quit(() => {
      resolve()
    })
  })
  // redis.quit() creates a thread to close the connection.
  // We wait until all threads have been run once to ensure the connection closes.
  //   await new Promise((resolve) => setImmediate(resolve))
}

export { serverInner, shutdownRedis }
export default request(app.callback())
