/**
 * @description router api test: example
 */

import server, { safeShutdown } from '../_server'

afterAll(async (done) => {
  await safeShutdown()
  done()
})

describe('routers/example', () => {
  it('should success', async () => {
    try {
      const response = await server.get('/example')
      expect(response.status).toEqual(200)
      expect(response.body.data).toEqual('ping')
    } catch (e) {
      console.error(e.message, e.stack)
    }
  })
})
