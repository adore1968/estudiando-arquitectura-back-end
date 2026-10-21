import Task from "../models/task.model.js";
import type { UpdateTask, CreateTask } from "../schemas/task.schema.js";

export const findAll = async () => {
  return Task.find();
};

export const createTask = async (task: CreateTask) => {
  return Task.create(task);
};

export const findByTitle = async (title: string) => {
  return Task.findOne({ title });
};

export const findById = async (id: string) => {
  return Task.findById(id);
};

export const deleteById = async (id: string) => {
  return Task.findByIdAndDelete(id);
};

export const updateTask = async (id: string, task: UpdateTask) => {
  return Task.findByIdAndUpdate(id, task, {
    runValidators: true,
    returnDocument: "after",
  });
};
