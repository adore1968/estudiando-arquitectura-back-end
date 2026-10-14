import express from "express";
import taskRouter from "./routes/task.routes.js";
import errorHandler from "./middlewares/errorHandler.js";

export const app = express();

app.use(express.json());

app.use("/api/tasks", taskRouter);

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.use(errorHandler);
