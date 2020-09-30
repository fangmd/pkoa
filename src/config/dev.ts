// import { IConfig } from "./base";
import { IConfig } from "./base";

/**
 * 本地开发环境
 */
export const devConf: IConfig = {
  port: 9090,
  mysql: {
    host: "0.0.0.0",
    port: "3306",
    userName: "root",
    password: "double",
    dbName: "koa",
  },
};
