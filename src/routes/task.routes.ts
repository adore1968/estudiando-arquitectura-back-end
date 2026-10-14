import { Router } from "express";
import {
  getTasks,
  createTask,
  deleteTask,
} from "../controllers/task.controller.js";
import validateSchema from "../middlewares/validateSchema.js";
import { createTaskSchema } from "../schemas/task.schema.js";

const router = Router();

router.get("/", getTasks);

router.post("/", validateSchema(createTaskSchema), createTask);

router.delete("/:id", deleteTask);

export default router;
