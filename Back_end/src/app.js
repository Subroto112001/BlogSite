const express = require("express");
const cors = require("cors");
const usermodal = require("../src/models/user.model");
const userController = require("./controoller/user.controller");
const categoryController = require("./controoller/categroy.controller");

const path = require("path");
const blogController = require("./controoller/blog.controller");
const upload = require("./middleware/multer.MIddleware");
const app = express();
require("dotenv").config();

// use midleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/test", (req, res) => {
  res.send("hi");
  console.log("ok");
});
app.post("/registration", userController.registration);
app.post("/login", userController.login);
app.get("/get-singleuser/:id", userController.getSingleUser);

// category routes
app.post("/create-category", categoryController.createCategory);
app.get("/getallCateggroy", categoryController.getAllcategory);
app.get("/single-category/:name", categoryController.getsinglecategory);
app.put("/update-category/:id", categoryController.updateCategoryName);
app.delete("/delete-category/:id", categoryController.deletecategorydata);

// blog routes
app.post("/create-blog", upload.single("image"), blogController.createBlog);

app.get("/getall-blog", blogController.getAllblog);
app.get("/getsingle-blog/:id", blogController.singleBlog);
app.put("/update-blog/:id", upload.single("image"), blogController.updateblog);
app.delete("/delete-blog/:id", blogController.deleteBlog);
app.use("/static", express.static("public/temp"));

module.exports = { app };
