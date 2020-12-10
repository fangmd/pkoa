export interface IConfig {
  // 监听端口
  port: number
  // mongodb配置
  // mongodb: {
  //   host: string;
  //   port: number;
  //   db: string;
  // };
  mysql: {
    host: string
    port: string
    userName: string
    password: string
    dbName: string
  }
}

// mode: prod
export interface IProdConfig extends IConfig {
  // 日志存储位置
  logRoot: string
}
