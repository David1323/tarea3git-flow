const express = require("express");
const { readAll, writeAll } = require("../db");
const { createTask } = require("../models/task");

const router = express.Router();

// GET /api/tasks
router.get("/", (req, res) => {
  const tasks = readAll();
  res.json(tasks);
});

// GET /api/tasks/:id
router.get("/:id", (req, res) => {
  const tasks = readAll();
  const task = tasks.find((t) => t.id === Number(req.params.id));
  if (!task) return res.status(404).json({ error: "Tarea no encontrada" });
  res.json(task);
});

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
