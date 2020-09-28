import { createConnection } from "typeorm";
import root from "./root-path";

export const dbInit = async () => {
  await createConnection({
    type: "mysql", // 数据库类型
    host: "0.0.0.0", // 数据库地址
    port: 3306, // 数据库端口号
    username: "root", // 数据库用户名
    password: "double", // 密码
    database: "koa", // 数据库名
    entities: [root() + "/entity/*.ts", "dist/data/entity/*.js"], // 引入实体
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
