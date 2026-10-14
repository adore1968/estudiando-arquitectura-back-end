import mongoose, { type InferSchemaType } from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
});

type Task = InferSchemaType<typeof taskSchema>;

const Task = mongoose.model<Task>("Task", taskSchema);

export default Task;
