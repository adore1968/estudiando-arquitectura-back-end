import { AppError } from "../errors/AppError.js";
import {
  createTask,
  deleteById,
  findAll,
  findById,
  findByTitle,
} from "../repositories/task.repository.js";
import { CreateTask } from "../schemas/task.schema.js";

export const getTasksService = async () => {
  const tasks = await findAll();

  return tasks;
};

export const createTaskService = async (task: CreateTask) => {
  const taskExists = await findByTitle(task.title);

  if (taskExists) {
    throw new AppError("La tarea ya existe", 409);
  }

  const newTask = await createTask(task);

  return newTask;
};

export const deleteTaskService = async (id: string) => {
  const taskExists = await findById(id);

  if (!taskExists) {
    throw new AppError("La tarea no existe", 404);
  }

  await deleteById(id);
};
