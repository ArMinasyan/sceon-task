import { Router } from "express";
import {
  userValidator,
  userValidatorOptional,
} from "../common/validators/user.validator";
import handleValidation from "../common/validation.handle";
import { UserController } from "./user.controller";

const userController = new UserController();

const userRouter = Router();
userRouter
  .get("/", userController.getUsers)
  .get(":id", userController.getUserById)
  .post("/", userValidator, handleValidation, userController.createUser)
  .put(
    ":id",
    userValidatorOptional,
    handleValidation,
    userController.updateUser
  )
  .delete("/:id", userController.deleteUser);

export { userRouter };
