


Koa 项目模版

## 运行项目

本地测试 docker:

```
docker-compose up -d
```


aliyun:(第一次要执行两次)

```
docker-compose -f docker-compose.test.yml up

docker-compose -f docker-compose.test.yml up -d
```

## Others

TODO:

- [x] jwt
- [x] ORM: typeorm, mysql2
- [x] redis
- [x] 请求参数验证 class-validator class-transformer
- [x] 请求结果封装 `HttpResult`
- [x] 部署: Aliyun 测试服务器 
- [x] logger 打印到文件
- [x] dayjs 处理时间
- [x] dotenv 处理环境变量

sms 验证功能
