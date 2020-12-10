
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


log

TODO:

- [x] jwt
- [x] ORM: typeorm, mysql2
- [ ] redis
- [x] 请求参数验证 class-validator class-transformer
- [x] 请求结果封装 `HttpResult`
- [x] 部署: Aliyun 测试服务器 

sms 验证功能

接口加拦截器

`app.ts` 代码分离
