import Router from "koa-router";
const router = new Router();

router.get("/example", async (ctx) => {
  try {
    ctx.body = {
      msg: "success example23",
      data: "ping",
    };
  } catch (e) {
    console.error(e);
  }
});

export default router;
