// import cors from "cors";

const cors = require("cors");

const corsMiddleware = cors({
  origin: "https://sam-element-fullstack-coding-challenge-frontend.vercel.app/register",
  //   credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  allowedHeaders: ["Content-Type", "X-API-TOKEN", "Authorization", "Accept"],
  exposedHeaders: ["X-API-TOKEN"],
});

export default corsMiddleware;
