import express from "express";
import { publicRouter } from "../route/public-api";
import { errorMiddleware } from "../middleware/error-middleware";
import { apiRouter } from "../route/api";
import corsMiddleware from "../middleware/cors";

export const web = express();
// const cors = require("cors");

// web.use(
//   cors({
//     origin: "https://sam-element-fullstack-coding-challenge-frontend.vercel.app/",
//   })
// );
web.use(corsMiddleware);
web.options("*", corsMiddleware);
web.use(express.json());
web.use(publicRouter);
web.use(apiRouter);
web.use(errorMiddleware);
