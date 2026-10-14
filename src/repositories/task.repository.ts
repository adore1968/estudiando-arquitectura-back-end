import Task from "../models/task.model.js";
import { type CreateTask } from "../schemas/task.schema.js";

export const findAll = async () => {
  const tasks = await Task.find();

  return tasks;
};

export const createTask = async (task: CreateTask) => {
  const newTask = await Task.create(task);

  return newTask;
};

export const findByTitle = async (title: string) => {
  const task = await Task.findOne({ title });

  return task;
};

export const findById = async (id: string) => {
  const task = await Task.findById(id);

  return task;
};

export const deleteById = async (id: string) => {
  await Task.findByIdAndDelete(id);
};
