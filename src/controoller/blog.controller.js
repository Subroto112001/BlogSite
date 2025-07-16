const blogModel = require("../models/blog.model");
const fs = require("fs")
const path = require("path")
// @desc blog will create here
exports.createBlog = async (req, res) => {
  try {
    // console.log(req.file);

    const saveBlog = await new blogModel({
      blogTitle: req.body.blogTitle,
      blogDescription: req.body.blogDescription,
      image: `http//:localhost:4000/static/${req.file.filename}`,
    }).save();

    if (!saveBlog) {
      return res.status(401).json({
        msg: `Failed to sava blog on databse`,
      });
    }
    return res.status(201).json({
      msg: `Blog Created sucessfully on your database`,
      data: saveBlog,
    });
  } catch (error) {
    console.log("error from createBlog controller", error);
    return res.status(401).json({
      msg: `error from createBlog controller`,
      error: error,
    });
  }
};
// @desc now get all blog data
exports.getAllblog = async (req, res) => {
  try {
    const allblog = await blogModel.find({});
    if (!allblog) {
      return res.status(401).json({
        msg: `allblog not found`,
      });
    }
    return res.status(200).json({
      msg: "Blogs retrieved successfully",
      data: allblog,
    });
  } catch (error) {
    console.log("Error from getAllblog controller:", error);
    return res.status(500).json({
      msg: "Server error while fetching blogs",
      error: error.message,
    });
  }
};

// @desc get single blog data
exports.singleBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const Singleblog = await blogModel.findById(id);

    if (!Singleblog) {
      return res.status(401).json({
        msg: `Singleblog not found`,
      });
    }
    return res.status(201).json({
      msg: `Singleblog get sucessfully`,
      data: Singleblog,
      status: 201,
    });
  } catch (error) {
    console.log("error from singleBlog controller", error);
    return res.status(401).json({
      msg: `error from singleBlog controller`,
      error: error,
    });
  }
};

// @desc upddate blog
exports.updateblog = async (req, res) => {
  try {
    const { id } = req.params;

    const blogdata = await blogModel.findById(id);

    if (!blogdata) {
      return res.status(404).json({
        msg: `Blog with ID ${id} not found.`,
      });
    }

    blogdata.blogTitle = req.body.blogTitle || blogdata.blogTitle;
    blogdata.blogDescription =
      req.body.blogDescription || blogdata.blogDescription;

    if (req.file) {
      const part = blogdata.image.split("/");
      const targetpath = path.join("public", "temp", part[part.length - 1]);
     fs.unlinkSync(targetpath)
  
   
    
      blogdata.image = `http://localhost:4000/static/${req.file.filename}`;

    } else {
      blogdata.image = blogdata.image
    }
  
    await blogdata.save();

    return res.status(200).json({
      msg: `Blog updated successfully.`,
      data: blogdata,
    });
  } catch (error) {
    console.error("Error from updateblog:", error);
    return res.status(500).json({
      msg: `Error updating blog.`,
      error: error.message,
    });
  }
};
 
// @desc delete blog
exports.deleteBlog = async (req, res) => {
  try {
    
  } catch (error) {
      console.log("error from deleteBlog", error);
      return res.status(401).json({
        msg: `error from deleteBlog`,
        error: error,
      });
  }
}