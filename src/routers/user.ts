import Router from "koa-router";
import UserController from "../controller/user-controller";

const router = new Router();

router.get("/user", UserController.getUsers);
router.get("/user/:id", UserController.getUserById);
router.post("/user", UserController.addUser);
router.put("/user/:id", UserController.updateUser);
router.delete("/user/:id", UserController.deleteUser);

export default router;
