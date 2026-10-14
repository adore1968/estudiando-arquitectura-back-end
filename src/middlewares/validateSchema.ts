import { NextFunction, Request, Response } from "express";
import { ZodType } from "zod";

const validateSchema =
  (schema: ZodType) => (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      const errors = result.error.issues.map((err) => err.message);
      return res.status(400).json({ errors });
    }

    req.body = result.data;

    next();
  };

export default validateSchema;
