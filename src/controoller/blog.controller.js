const blogModel = require("../models/blog.model");

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
    const { blogTitle, blogDescription } = req.body;
    const image = req.file;
    const { id } = req.params;

    // is exist this blog
    const blogdata = await blogModel.findById(id);
    blogdata.blogTitle = req.body.blogTitle || blogdata.blogTitle;
    blogdata.blogDescription =
      req.body.blogDescription || blogdata.blogDescription;

    await blogdata.save();
    return res.status(200).json({
      msg: `category blogdata sucessfully.`,
      data: blogdata,
    });
  } catch (error) {
    console.log("error from updateblog", error);
    return res.status(401).json({
      msg: `error from updateblog`,
      error: error,
    });
  }
};
