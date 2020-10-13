import { IConfig } from "./base";

/**
 * 测试环境
 */
export const testConf: IConfig = {
  port: 3009,
  mysql: {
    host: process.env.DATABASE_HOST || "0.0.0.0",
    port: process.env.DATABASE_PORT || "3306",
    userName: process.env.DATABASE_USER || "root",
    password: process.env.DATABASE_PASSWORD || "root",
    dbName: process.env.DATABASE_DB_NAME || "koa",
  },
};
