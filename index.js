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

module.exports = app;
