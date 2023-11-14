require("dotenv").config();

const express = require("express");
const expressLayout = require("express-ejs-layouts");

const app = express();
const PORT = 4000 || process.env.PORT;

app.use(express.static("public"));

// Templating Engine
app.use(expressLayout);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

app.get("", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
