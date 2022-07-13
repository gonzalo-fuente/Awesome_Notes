const express = require("express");
const path = require("path");

// Database
const db = require("./config/database");

const app = express();

const PORT = process.env.PORT || 5000;

// Test DB and start SERVER
db.authenticate()
  .then(() => {
    console.log("Connection to database has been established successfully.");
    app.listen(PORT, console.log(`Server started on port ${PORT}`));
  })
  .catch((error) => console.log("Unable to connect to the database:", error));
