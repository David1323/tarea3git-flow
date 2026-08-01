const express = require("express");
const tasksRouter = require("./routes/tasks");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "ok", service: "task-manager-api" });
});

app.use("/api/tasks", tasksRouter);

module.exports = app;
