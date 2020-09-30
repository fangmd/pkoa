import { createConnection } from "typeorm";
import root from "./root-path";
import Config from "../config";

export const dbInit = async () => {
  await createConnection({
    type: "mysql", // 数据库类型
    host: Config.mysql.host, // 数据库地址
    port: parseInt(Config.mysql.port), // 数据库端口号
    username: Config.mysql.userName, // 数据库用户名
    password: Config.mysql.password, // 密码
    database: Config.mysql.dbName, // 数据库名
    entities: [root() + "/entity/*.ts", root() + "/entity/*.js"], // 引入实体
    synchronize: true,
  })
    .then((conn: any) => {
      console.log("数据库连接成功");
      return true;
    })
    .catch((error: any) => {
      console.log(`数据库连接失败 ${error}`);
      return false;
    });
};
