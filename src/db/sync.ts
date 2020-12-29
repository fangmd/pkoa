/**
 * @description 数据库初始化操作
 * 运行脚本：ts-node src/db/sync.ts
 */
import { dbInit } from './mysql'

async function initSQL() {
  const connection = await dbInit()
  await connection.synchronize()
}

initSQL()
