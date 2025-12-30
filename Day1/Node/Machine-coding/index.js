import express from "express";

const app = express();

app.use(express.json());

let tasks = [];
let id = 1;

app.post("/tasks", (req, res) => {
  const { title, description, status } = req.body;

  if (!title || !description) {
    return res.status(400).json({ msg: "Title and description are required" });
  }

  const task = {
    id: id++,
    title,
    description,
    status: status || "pending",
  };

  tasks.push(task);
  res.status(201).json(task);
});

app.get("/tasks", (req, res) => {
  res.status(200).json(tasks);
});

app.get("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({ msg: "Task not found" });
  }

  res.status(200).json(task);
});

app.put("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const { title, description, status } = req.body;

  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({ msg: "Task not found" });
  }

  if (!title || !description || !status) {
    return res
      .status(400)
      .json({ msg: "Title, description and status are required" });
  }

  task.title = title;
  task.description = description;
  task.status = status;

  res.status(200).json(task);
});

app.patch("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({ msg: "Task not found" });
  }

  const { title, description, status } = req.body;

  if (title) task.title = title;
  if (description) task.description = description;
  if (status) task.status = status;

  res.status(200).json(task);
});

app.delete("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = tasks.findIndex((t) => t.id === id);

  if (index === -1) {
    return res.status(404).json({ msg: "Task not found" });
  }

  tasks.splice(index, 1);
  res.status(204).send();
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
