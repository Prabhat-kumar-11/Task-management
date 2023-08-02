const express = require("express");
const { TaskModel } = require("../Models/task.model");
const taskRouter = express.Router();

// Add a new task
taskRouter.post("/add", async (req, res) => {
  console.log(req.body);
  try {
    let newTask = new TaskModel(req.body);
    await newTask.save();
    res.status(200).send({ "msg": "New task added" });
  } catch (error) {
    res.status(400).send({ "error": error.message });
  }
});

// Get all tasks
taskRouter.get("/", async (req, res) => {
  try {
    let data = await TaskModel.find();
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send({ "err": error.message });
  }
});

// Get a specific task by ID
taskRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let find = await TaskModel.findById(id);
    console.log(find);
    res.status(200).send(find);
  } catch (error) {
    res.send({ "err": error.message });
  }
});

// Update a task
taskRouter.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let updateTask = await TaskModel.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).send({ "msg": "Task updated successfully", updateTask });
  } catch (error) {
    res.status(400).send({ "err": error.message });
  }
});

// Delete a task
taskRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let deletedTask = await TaskModel.findByIdAndDelete(id);
    res.status(200).send({ "msg": "Task deleted successfully", deletedTask });
  } catch (error) {
    res.status(400).send({ "err": error.message });
  }
});

module.exports = {
  taskRouter
};
