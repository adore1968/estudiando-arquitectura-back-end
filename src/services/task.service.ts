import { AppError } from "../errors/AppError.js";
import {
  createTask,
  deleteById,
  findAll,
  findById,
  findByTitle,
  updateTask,
} from "../repositories/task.repository.js";
import type { CreateTask, UpdateTask } from "../schemas/task.schema.js";

export const getTasksService = async () => {
  return findAll();
};

export const createTaskService = async (task: CreateTask) => {
  const taskExists = await findByTitle(task.title);

  if (taskExists) {
    throw new AppError("La tarea ya existe", 409);
  }

  return createTask(task);
};

export const deleteTaskService = async (id: string) => {
  const deletedTask = await deleteById(id);

  if (!deletedTask) {
    throw new AppError("La tarea no existe", 404);
  }
};

export const updateTaskService = async (id: string, task: UpdateTask) => {
  const updatedTask = await updateTask(id, task);

  if (!updatedTask) {
    throw new AppError("La tarea no existe", 404);
  }

  return updatedTask;
};
