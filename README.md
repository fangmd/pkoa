
Koa 项目模版

# Run

1. run redis

```
docker run --name global-redis -d -p 6379:6379 redis
```

2. 配置项目参数 `.env.development`, `.env.production` 文件：

```
SERVER_PORT=9090

DATABASE_HOST=xxx.xxx.xxx.xxx
DATABASE_PORT=xxx
DATABASE_USER=xxx
DATABASE_PASSWORD=xxx
DATABASE_DB_NAME=xxx

REDIS_HOST=127.0.0.1
REDIS_PORT=6379
```

3. 运行

```
npm run serve
```


## Base Feature

- [x] jwt
- [x] ORM: typeorm, mysql2
- [x] redis
- [x] 请求参数验证 class-validator class-transformer
- [x] 请求结果封装 `HttpResult`
- [x] 部署: Aliyun 测试服务器 
- [x] logger 打印到文件
- [x] dayjs 处理时间
- [x] dotenv 处理环境变量
- [x] bullmq 任务队列(任务队列UI: bull-board/Taskforce, 未集成)



