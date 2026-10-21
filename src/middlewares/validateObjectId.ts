import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";

const validateObjectId = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  if (typeof id !== "string") {
    return res.status(400).json({ message: "El id debe ser un string" });
  }

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: "El id no es valido" });
  }

  next();
};

export default validateObjectId;
