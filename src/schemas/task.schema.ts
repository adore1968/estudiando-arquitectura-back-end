import { z } from "zod";

export const createTaskSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, { message: "El titulo de la tarea es requerido" }),
});

export const updateTaskSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, { message: "El titulo de la tarea es requerido" }),
});

export type CreateTask = z.infer<typeof createTaskSchema>;

export type UpdateTask = z.infer<typeof updateTaskSchema>;
