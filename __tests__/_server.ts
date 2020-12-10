import request from 'supertest'
import app, { serverInner } from '../src/app'

export { serverInner }
export default request(app.callback())
