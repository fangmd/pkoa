import { IConfig } from './base'

/**
 * 本地开发环境 & 本地单元测试环境
 */
export const devConf: IConfig = {
  port: 9090,
  mysql: {
    host: process.env.DATABASE_HOST || '0.0.0.0',
    port: process.env.DATABASE_PORT || '3306',
    userName: process.env.DATABASE_USER || 'root',
    password: process.env.DATABASE_PASSWORD || 'root',
    dbName: process.env.DATABASE_DB_NAME || 'koa',
  },
  redis: {
    host: '127.0.0.1',
    port: 6379
  }
}
