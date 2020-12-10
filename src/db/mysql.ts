/**
 * @description 数据库配置，初始化
 */

import { createConnection } from "typeorm";
import root from "../utils/root-path";
import Config from "../config";

export const dbInit = async () => {
  const ret = await createConnection({
    type: "mysql", // 数据库类型
    host: Config.mysql.host, // 数据库地址
    port: parseInt(Config.mysql.port), // 数据库端口号
    username: Config.mysql.userName, // 数据库用户名
    password: Config.mysql.password, // 密码
    database: Config.mysql.dbName, // 数据库名
    // entities: [root() + "/entity/*.ts", root() + "/entity/*.js"], // 引入实体
    entities: [
      // process.env.entityPath ? process.env.entityPath : "./src/entity/*.ts",
      '/Users/double/projects/pkoa/src/db/model/*.ts'
    ], // 引入实体
    synchronize: true,
  });
  console.log(`数据库连接结果 ${ret}`);
};
