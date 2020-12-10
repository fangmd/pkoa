/**
 * @description redis client
 */

import redis from 'redis'
import Config from '../config'

const redisClient = redis.createClient(Config.redis.port, Config.redis.host)

redisClient.on('error', (err) => {
  console.error('redis connect error', err)
})

/**
 * redis set
 * @param {string} key key
 * @param {any} val any
 * @param {number} timeout time unit: s
 */
function set(key: string, val: any, timeout = 60 * 60) {
  if (typeof val === 'object') {
    val = JSON.stringify(val)
  }
  redisClient.set(key, val)
  redisClient.expire(key, timeout)
}

/**
 * redis get
 * @param {string} key key
 */
function get(key: string) {
  const promise = new Promise((resolve, reject) => {
    redisClient.get(key, (err, val) => {
      if (err) {
        reject(err)
        return
      }
      if (val == null) {
        resolve(null)
        return
      }
      try {
        resolve(JSON.parse(val))
      } catch (e) {
        resolve(val)
      }
    })
  })
  return promise
}

export { redisClient, set, get }
