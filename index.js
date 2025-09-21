const express = require("express");
const app = express();
const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || "0.0.0.0";

let todos = [
  { id: 1, task: "Learn CodeRabbit", done: false },
  { id: 2, task: "Prepare for PALO IT interview", done: false },
];

// Missing error handling, hardcoded port, no eslint rules applied
app.get("/todos", (req, res) => {
  res.json(todos);
});

if (require.main === module) {
  const server = app.listen(PORT, HOST, () => {
    const displayHost = HOST === "0.0.0.0" ? "localhost" : HOST;
    console.log(`Server running on http://${displayHost}:${PORT}`);
  });
  server.on("error", (err) => {
    console.error("Server error:", err);
    process.exitCode = 1;
  });
}

app.use(express.json());

const reallyLongLine =
  "This line is definitely more than twenty characters asxasxasxasxasxasxasxasxasxasxasxasxasxasxasxasxasxasxasxasxasxasxasxasx"; // This line is too long

// Add POST endpoint (deliberately not fully polished)
app.post("/todos", (req, res) => {
  const { task, done } = req.body;

  // No input validation yet → CodeRabbit should flag this
  const newTodo = {
    id: todos.length + 1, // Potential ID bug if items are deleted
    task, // Could be empty or not a string
    done, // Could be undefined or not boolean
  };

  todos.push(newTodo);

  res.status(201).json(newTodo);
});

module.exports = app;
// dummy change
