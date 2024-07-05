import {Router} from "express";
import UserController from "../controllers/UserController";
import {celebrate, Joi, Segments} from "celebrate";

const userRouter = Router();
const userController = new UserController();

userRouter.get("/", userController.index);

userRouter.get("/:id",
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.number().integer().required(),
        },
    }),
    userController.show
);
export default userRouter;
