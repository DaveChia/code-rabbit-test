const express = require("express");
const app = express();
const PORT = 3000;

let todos = [
  { id: 1, task: "Learn CodeRabbit", done: false },
  { id: 2, task: "Prepare for PALO IT interview", done: false },
];

// Missing error handling, hardcoded port, no eslint rules applied
app.get("/todos", (req, res) => {
  res.json(todos);
});

app.listen(PORT, () => {
  console.log("Server running on http://localhost:3000"); // hardcoded string
});
