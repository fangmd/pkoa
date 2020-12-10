/**
 * @description example
 */

import Router from 'koa-router'
import getUniqueID from '../utils/snowflake'

const router = new Router()

router.get('/', async (ctx) => {
  try {
    ctx.body = {
      msg: 'Hello world!',
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
