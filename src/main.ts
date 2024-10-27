import { logger } from "./application/logging";
import { web } from "./application/web";
import cors from "cors";
import corsMiddleware from "./middleware/cors";
import { NextFunction, Request, Response } from "express";

web.listen(3000, () => {
  logger.info("Listening on port 3000");
});
