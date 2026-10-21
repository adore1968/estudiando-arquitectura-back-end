import { Request, Response } from "express";
import {
  createTaskService,
  deleteTaskService,
  getTasksService,
  updateTaskService,
} from "../services/task.service.js";
import { CreateTask, UpdateTask } from "../schemas/task.schema.js";

export const getTasks = async (req: Request, res: Response) => {
  const tasks = await getTasksService();

  return res.json(tasks);
};

export const createTask = async (req: Request, res: Response) => {
  const task: CreateTask = req.body;

  const newTask = await createTaskService(task);

  return res.status(201).json(newTask);
};

export const deleteTask = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  const { id } = req.params;

  await deleteTaskService(id);

  return res.sendStatus(204);
};

export const updateTask = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  const { id } = req.params;
  const task: UpdateTask = req.body;

  const updatedTask = await updateTaskService(id, task);

  return res.status(200).json(updatedTask);
};
