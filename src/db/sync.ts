/**
 * @description 数据库初始化操作
 * 运行脚本：export NODE_ENV=development && ts-node src/db/sync.ts
 */
import { initEnv } from '../env'
initEnv()
import { dbInit } from './mysql'

async function initSQL() {
  const connection = await dbInit()
  await connection.synchronize()
}

initSQL()
