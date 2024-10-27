import express from "express";
import { publicRouter } from "../route/public-api";
import { errorMiddleware } from "../middleware/error-middleware";
import { apiRouter } from "../route/api";
import cors from "cors";
import corsMiddleware from "../middleware/cors";

export const web = express();

web.use(
  cors({
    origin: true,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allowedHeaders: ["Content-Type", "X-API-TOKEN", "Authorization", "Accept"],
    exposedHeaders: ["X-API-TOKEN"],
  })
);

web.use(corsMiddleware);
web.use(express.json());
web.use(publicRouter);
web.use(apiRouter);
web.use(errorMiddleware);
