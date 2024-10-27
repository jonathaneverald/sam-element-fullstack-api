import cors from "cors";

const corsMiddleware = cors({
  origin: "https://sam-element-fullstack-coding-challenge-frontend.vercel.app/",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  allowedHeaders: ["Content-Type", "X-API-TOKEN", "Authorization", "Accept"],
});

export default corsMiddleware;
