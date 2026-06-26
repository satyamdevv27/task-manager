import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import taskRoutes from "./routes/taskroutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Task Manager API Running 🚀",
  });
});

app.use("/api/tasks", taskRoutes);

export default app;