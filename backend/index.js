// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";

// import connectDB from "./config/db.js";
// import taskRoutes from "./routes/taskroutes.js";

// dotenv.config();

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.json({
//     success: true,
//     message: "Task Manager API Running 🚀",
//   });
// });

// app.use("/api/tasks" , taskRoutes)


// const PORT = process.env.PORT || 5000;

// const startServer = async () => {
//   await connectDB();

//   app.listen(PORT, () => {
//     console.log(`🚀 Server running on http://localhost:${PORT}`);
//   });
// };

// startServer();
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });

  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

startServer();