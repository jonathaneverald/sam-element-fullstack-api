import cors from "cors";

const corsMiddleware = cors({
  origin: ["http://localhost:3000", "your-frontend-production-url"],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
});

export default corsMiddleware;
