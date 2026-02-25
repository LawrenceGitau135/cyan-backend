const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
""
const hostname = "127.0.0.1";

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("This is the cyan backend server");
});

app.listen(port, () => {
  console.log(`server is running on http://${hostname}:${port}`);
  console.log(`let's go.........`)
});
