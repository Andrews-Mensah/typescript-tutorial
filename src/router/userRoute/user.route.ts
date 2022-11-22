import express from 'express'
import { createUserSessionHandler,deleteUserSessionHandler,getUserSessionsHandler } from '../../controllers/session.controller';
import { createUserHandler } from "../../controllers/user.controller"
import { createSessionSchema } from '../../schema/session.schema';
import { createUserSchema } from '../../schema/user.schema';
import { createSession } from '../../service/session.service';
import requireUser from '../../validator/requireUser';
import validateResource from '../../validator/validateResource';


const userRouter = express.Router();

userRouter.post("/register", validateResource(createUserSchema), createUserHandler)
userRouter.get("/", validateResource(createUserSchema), createUserHandler)
userRouter.post("/session", validateResource(createSessionSchema),createUserSessionHandler)
userRouter.get("/sessions",requireUser, getUserSessionsHandler)
userRouter.delete("/session", requireUser, deleteUserSessionHandler)



export default userRouter;