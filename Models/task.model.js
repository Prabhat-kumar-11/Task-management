const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
  {
    title: { type: String, require: true },
    description: { type: String, required: true },
    status: { type: String, enum: ["todo", "in-progress", "completed"] },
  },
  {
    versionKey: false,
  }
);

const TaskModel = mongoose.model("tasks", taskSchema);

module.exports = {
  TaskModel,
};
