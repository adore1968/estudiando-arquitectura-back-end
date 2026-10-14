import { Request, Response } from "express";
import {
  createTaskService,
  deleteTaskService,
  getTasksService,
} from "../services/task.service.js";
import { CreateTask } from "../schemas/task.schema.js";
import mongoose from "mongoose";

export const getTasks = async (req: Request, res: Response) => {
  const tasks = await getTasksService();

  return res.json(tasks);
};

export const createTask = async (req: Request, res: Response) => {
  const task: CreateTask = req.body;

  const newTask = await createTaskService(task);

  return res.status(201).json(newTask);
};

export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (typeof id !== "string") {
    return res.status(400).json({ message: "El id debe ser un string" });
  }

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: "El id no es valido" });
  }

  await deleteTaskService(id);

  return res.sendStatus(204);
};
