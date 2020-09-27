import Koa from "koa";
import Router from "koa-router";
import logger from "koa-logger";
import example from "./routers/example";
import Config from "./config";

const app = new Koa();
const router = new Router();

app.use(logger());
//TODO: cors, bodyParser

router.get("/", async (ctx) => {
  ctx.body = { msg: "Hello world!3332" };
});
app.use(router.routes());
app.use(example.routes());

app.listen(Config.port);

console.log(`Server running on port ${Config.port}`);

export default app;
