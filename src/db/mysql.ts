/**
 * @description 数据库配置，初始化
 */

import { createConnection } from 'typeorm'
import Config from '../config'

export const dbInit = async () => {
  const connection = await createConnection({
    type: 'mysql', // 数据库类型
    host: Config.mysql.host, // 数据库地址
    port: parseInt(Config.mysql.port), // 数据库端口号
    username: Config.mysql.userName, // 数据库用户名
    password: Config.mysql.password, // 密码
    database: Config.mysql.dbName, // 数据库名
    entities: [`${__dirname}/model/**/*.ts`, `${__dirname}/model/**/*.js`],
    synchronize: false,
    logging: true,
    migrationsTableName: 'user_table',
    migrations: [`${__dirname}/migration/*{.js,.ts}`],
    cli: {
      migrationsDir: `${__dirname}/migration`,
    },
  })
  // run all migrations
  // await connection.runMigrations()

  console.log(`数据库连接结果 ${connection}`)
  return connection
}
