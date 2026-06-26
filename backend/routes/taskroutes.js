import express from "express";
import { validateTask } from "../middleware/validateTask.js";
import {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} from "../controller/taskcontroller.js";

const router = express.Router();

// GET all tasks
// POST create task
router.route("/")
.get(getAllTasks)
.post(validateTask, createTask);

// GET single task
// PUT update task
// DELETE task
router.route("/:id")
.get(getTaskById)
.put(validateTask, updateTask)
.delete(deleteTask);

export default router;