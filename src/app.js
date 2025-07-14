const express = require("express");
const usermodal = require("../src/models/user.model");
const userController= require("./controoller/user.controller")
const app = express();
require("dotenv").config();

// use midleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/test", (req, res) => {
  res.send("hi");
  console.log("ok");
});
app.post("/registration", userController.registration);
app.post("/login", userController.login);

module.exports = { app };
