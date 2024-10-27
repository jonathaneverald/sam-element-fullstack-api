import express from "express";
import cors from "cors";
import { publicRouter } from "../route/public-api";
import { errorMiddleware } from "../middleware/error-middleware";
import { apiRouter } from "../route/api";
import corsMiddleware from "../middleware/cors";

export const web = express();
web.use(express.json());
web.use(express.urlencoded({ extended: true }));
web.use(publicRouter);
web.use(apiRouter);
web.use(errorMiddleware);
web.use(corsMiddleware);

web.use(
  cors({
    origin: ["http://localhost:3000", "your-frontend-production-url"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "X-API-TOKEN"],
  })
);
