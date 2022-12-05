import express from "express";
import {  logIn, registerUser } from "../controlers/userContoler";
import validate from "../middaleware/validate";
import { loginSchema, registerSchema } from "../zodSchema/userSchema";

const userRouter = express();

userRouter.post(`/login`, validate(loginSchema), logIn);
userRouter.post(`/registar`, validate(registerSchema), registerUser);

export default userRouter;
