/**
 * @description example cache
 */

import { Example } from '../db/model'
import { ExampleService } from '../service/example-service'
import { get, set } from './redis'

const KEY_PREFIX = 'pkoa:example:'

/**
 * 获取首页缓存数据
 */
async function getHomeCacheData(): Promise<Example | undefined> {
  // const key = KEY_PREFIX
  // const cacheResult = await get(key)
  // if (cacheResult) {
  //   return cacheResult as Example
  // }
  const dbResult = await ExampleService.getHome()
  // set(key, dbResult, 10)
  return dbResult
}

export { getHomeCacheData }
