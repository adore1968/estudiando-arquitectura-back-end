import { Router } from "express";
import {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
} from "../controllers/task.controller.js";
import validateSchema from "../middlewares/validateSchema.js";
import { createTaskSchema, updateTaskSchema } from "../schemas/task.schema.js";
import validateObjectId from "../middlewares/validateObjectId.js";

const router = Router();

router.get("/", getTasks);

router.post("/", validateSchema(createTaskSchema), createTask);

router.delete("/:id", validateObjectId, deleteTask);

router.put(
  "/:id",
  validateObjectId,
  validateSchema(updateTaskSchema),
  updateTask,
);

export default router;
