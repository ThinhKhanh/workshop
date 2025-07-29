import express from "express";
import { signin, signup } from "../controllers/auth.controller";
import { validateRequest } from "../middleware/validate";
import { signinSchema, signupSchema } from "../validations/auth.validate";
const authRouter = express.Router();

authRouter.post("/signup",validateRequest(signupSchema), signup)
authRouter.post("/signin",validateRequest(signinSchema), signin)

export default authRouter;