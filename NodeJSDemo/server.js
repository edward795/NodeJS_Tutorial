const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/alien", (req, res) => {
  res.send("Welcome back alien");
});

//params
app.get("/alien/:id", (req, res) => {
  const id = req.params.id;
  res.send("Hey Naveen " + id);
});

//query string
app.get("/alien", (req, res) => {
  const id = req.query.id;
  res.send("Hey Alien " + id);
});

app.listen(9000, (req, res) => {
  console.log("running!");
});
