/**
 * @description example
 */

import Router from 'koa-router'
import { getHomeCacheData } from '../cache/example'
import { ExampleService } from '../service/example-service'
import getUniqueID from '../utils/snowflake'

const router = new Router()

router.get('/', async (ctx) => {
  try {
    const data = await getHomeCacheData()
    await ExampleService.addHomeCnt();
    ctx.body = {
      msg: 'Hello world!',
      cnt: data?.cnt,
    }
  } catch (e) {
    console.error(e)
  }
})

router.get('/example', async (ctx) => {
  try {
    ctx.body = {
      msg: 'success example23',
      data: 'ping',
    }
  } catch (e) {
    console.error(e)
  }
})

router.get('/example/snowflake', async (ctx) => {
  try {
    ctx.body = {
      msg: 'success example23',
      data: `${getUniqueID()}`,
    }
  } catch (e) {
    console.error(e)
  }
})

export default router
