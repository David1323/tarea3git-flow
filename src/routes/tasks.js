const express = require("express");
const { readAll, writeAll } = require("../db");
const { createTask } = require("../models/task");

const router = express.Router();

// POST /api/tasks
router.post("/", (req, res) => {
  const { title, description } = req.body;
  const task = createTask({ title, description });
  const tasks = readAll();
  tasks.push(task);
  writeAll(tasks);
  res.status(201).json(task);
});

module.exports = router;
