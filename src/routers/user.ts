
/**
 * User 相关操作
 * 1. user CRUD
 * 2. login
 */

import Router from "koa-router";
import UserController from "../controller/user-controller";

const router = new Router();

router.get("/users", UserController.getUsers);
router.get("/user", UserController.getUserById);
router.post("/user", UserController.addUser);
router.put("/user", UserController.updateUser);
// router.delete("/user", UserController.deleteUser);


router.post("/login", UserController.userLogin);


export default router;
