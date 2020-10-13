import Koa from "koa";
import Router from "koa-router";
import logger from "koa-logger";
import Config from "./config";
import { dbInit } from "./utils/mysql";
import Bodyparser from "koa-bodyparser";
import jwt from "koa-jwt";

import example from "./routers/example";
import user from "./routers/user";
import HttpResult from "./utils/http-result";
import HttpC from "./constants/http-c";
import { jwtSecret } from "./utils/jwt-utils";

const app = new Koa();
const router = new Router();

// Custom 401 handling (first middleware)
app.use(function (ctx, next) {
  return next().catch((err) => {
    if (err.status === 401) {
      ctx.status = 401;
      ctx.body = HttpResult.fail(HttpC.AUTH_ERROR);
    } else {
      throw err;
    }
  });
});

app.use(logger());
app.use(Bodyparser());

app.use(
  jwt({ secret: jwtSecret }).unless({
    path: [/^\/public/, /^\/example/, "/login", "/register"],
  })
);

// { url: "/user", method: ["POST"] },

//TODO: cors

router.get("/", async (ctx) => {
  ctx.body = { msg: "Hello world!" };
});

app.use(router.routes());
app.use(example.routes());
app.use(user.routes());

dbInit().then((res) => {
  app.listen(Config.port);
  console.log(`Server running on port ${Config.port}`);
});

export default app;
