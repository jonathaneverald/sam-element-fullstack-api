import express from "express";
import { UserController } from "../controller/user-controller";
import corsMiddleware from "../middleware/cors";

export const publicRouter = express.Router();

publicRouter.use(corsMiddleware);
publicRouter.post("/api/users", UserController.register);
publicRouter.post("/api/users/login", UserController.login);
