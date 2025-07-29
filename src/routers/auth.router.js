import express from "express";
import { signin, signup } from "../controllers/auth.controller.js";
import { validateRequest } from "../middleware/validate.js";
import { signinSchema, signupSchema } from "../validations/auth.validate.js";
const authRouter = express.Router();

authRouter.post("/signup",validateRequest(signupSchema), signup)
authRouter.post("/signin",validateRequest(signinSchema), signin)

export default authRouter;