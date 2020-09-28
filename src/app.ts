import Koa from "koa";
import Router from "koa-router";
import logger from "koa-logger";
import Config from "./config";
import { dbInit } from "./utils/mysql";
import Bodyparser from "koa-bodyparser";

import example from "./routers/example";
import user from "./routers/user";

const app = new Koa();
const router = new Router();

app.use(logger());
app.use(Bodyparser());

//TODO: cors

router.get("/", async (ctx) => {
  ctx.body = { msg: "Hello world!3332" };
});

app.use(router.routes());
app.use(example.routes());
app.use(user.routes());

dbInit().then((res) => {
  app.listen(Config.port);
  console.log(`Server running on port ${Config.port}`);
});

export default app;
