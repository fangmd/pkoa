/**
 * @description router api test: example
 */

import server, { serverInner } from '../_server'

afterAll(async (done) => {
  serverInner.close() // CLOSE THE SERVER CONNECTION
  await new Promise((resolve) => setTimeout(() => resolve(), 500)) // avoid jest open handle error
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
