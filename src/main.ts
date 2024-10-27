import { logger } from "./application/logging";
import { web } from "./application/web";
import cors from "cors";
import corsMiddleware from "./middleware/cors";

web.use(corsMiddleware);

web.listen(3000, () => {
  logger.info("Listening on port 3000");
});

web.use(
  cors({
    origin: ["http://localhost:3000", "your-frontend-production-url"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allowedHeaders: ["Content-Type", "X-API-TOKEN"],
  })
);
