const express = require("express");
const usermodal = require("../src/models/user.model");
const userController = require("./controoller/user.controller")
const categoryController = require("./controoller/categroy.controller")
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

// category routes
app.post("/create-category", categoryController.createCategory);
app.get("/getallCateggroy", categoryController.getAllcategory);
app.get("/single-category/:name", categoryController.getsinglecategory)
app.put("/update-category/:id", categoryController.updateCategoryName);

app.delete("/delete-category/:id", categoryController.deletecategorydata);
module.exports = { app };
