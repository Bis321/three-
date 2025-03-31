const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Server is running!");
});
 
const server = app.listen(3000, () => {
  console.log("Server running on port 3000");
});

// Automatically stop server after 30 seconds
setTimeout(() => {
  console.log("Shutting down server...");
  server.close(() => {
    console.log("Server stopped.");
    process.exit(0);
  });
}, 30000);
