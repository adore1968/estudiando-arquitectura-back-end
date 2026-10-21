import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError.js";

const errorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  if (typeof err === "object" && err !== null && "code" in err) {
    if (err.code === 11000) {
      return res.status(409).json({ message: "La tarea ya existe" });
    }
  }

  console.error(err);

  return res.status(500).json({ message: "Error interno del servidor" });
};

export default errorHandler;
