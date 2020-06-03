const express = require("express");
const fs = require("fs");
const app = express();

app.get("/", function(req, res) {
  res.send(fs.readFileSync("./index.html").toString());
});

app.listen(8000);
