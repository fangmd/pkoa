/**
 * @description router api test: user
 */

import HttpC from '../../src/constants/http-c'
import server, { safeShutdown, initAll } from '../_server'

beforeAll(async () => {
  await initAll()
})

afterAll(async (done) => {
  await safeShutdown()
  done()
})

let userId: String
const userName = `username=test_${Date.now()}`
const PASSWORD = '12345678'
let jwt: String

describe('routers/user', () => {
  it('register user params error', async () => {
    const response = await server.post('/register')
    expect(response.body.code).toEqual(HttpC.PARAMS_ERROR)
  })

  it('register user success', async () => {
    const response = await server.post('/register').send(`username=${userName}&password=${PASSWORD}`)
    userId = response.body.data.id
    expect(response.body.code).toEqual(HttpC.SUCCESS)
  })

  it('login user, should be success', async () => {
    const response = await server.post('/login').send(`username=${userName}&password=${PASSWORD}`)
    jwt = response.body.data.jwt
    expect(response.body.code).toEqual(HttpC.SUCCESS)
  })

  it('delete user success, should be success', async () => {
    const response = await server.delete(`/user?id=${userId}`).set('Authorization', `Bearer ${jwt}`)
    expect(response.body.code).toEqual(HttpC.SUCCESS)
  })
})
