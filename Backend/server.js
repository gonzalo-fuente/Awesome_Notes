const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const sequelize = require("./config/dbConnection");
const verifyJWT = require("./middleware/verifyJWT");
const PORT = process.env.PORT || 5000;

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

//serve static files
app.use("/", express.static(path.join(__dirname, "/public")));

// routes
app.use("/", require("./routes/root"));
app.use("/register", require("./routes/register"));
app.use("/auth", require("./routes/auth"));

app.use(verifyJWT);
app.use("/notes", require("./routes/api/notes"));
app.use("/users", require("./routes/api/users"));

app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ "error": "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});

// Test DB and start SERVER
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection to database has been established successfully.");
    app.listen(PORT, console.log(`Server started on port ${PORT}`));
  })
  .catch((error) => console.log("Unable to connect to the database:", error));
