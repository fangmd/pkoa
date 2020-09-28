import Router from "koa-router";
import UserController from "../controller/user-controller";

const router = new Router();

router.get("/users", UserController.getUsers);
router.get("/user", UserController.getUserById);
router.post("/user", UserController.addUser);
router.put("/user", UserController.updateUser);
router.delete("/user", UserController.deleteUser);

export default router;
