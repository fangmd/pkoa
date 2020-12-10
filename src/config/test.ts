import { IConfig } from './base'

/**
 * 测试环境
 */
export const testConf: IConfig = {
  port: 9010,
  mysql: {
    host: '0.0.0.0',
    port: '3306',
    userName: 'root',
    password: 'double',
    dbName: 'koa',
  },
}
