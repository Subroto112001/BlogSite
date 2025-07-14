const { validatebody } = require("../helpers/validator");
const categoryModel = require("../models/category.modal");

// @desc craeteCategory
exports.createCategory = async (req, res) => {
  try {
    console.log(req.body);
    const { emptyBody, fieldName } = validatebody(req);
    if (emptyBody) {
      return res.status(401).json({
        msg: `${fieldName} missing`,
      });
    }

    // isExist fieldname
    const isExist = await categoryModel.findOne({
      categoryName: req.body.categoryName,
    });
    if (isExist) {
      return res.status(401).json({
        msg: `${isExist.categoryName} already exist try another one`,
      });
    }

    // now it will save in databaase
    const SaveCategory = await new categoryModel({
      categoryName: req.body.categoryName,
      categoryDescription: req.body.categoryDescription,
    }).save();

    if (!SaveCategory) {
      return res.status(401).json({
        msg: `${req.body.categoryName} create failed`,
      });
    }

    // if all ok

    return res.status(201).json({
      msg: `${req.body.categoryName} created sucessfully`,
    });
  } catch (error) {
    console.log("error from category controller", error);
    return res.status(401).json({
      msg: `error from category controller`,
      error: error,
    });
  }
};
// @desc getallcategory
exports.getAllcategory = async (req, res) => {
  try {
    const allcategory = await categoryModel.find({});

    if (!allcategory) {
      return res.status(401).json({
        msg: `category not found`,
      });
    }

    return res.status(201).json({
      msg: `category get sucessfully`,
      data: allcategory,
      status: 201,
    });
  } catch (error) {
    console.log("error from getAllcategory controller ", error);
    return res.status(401).json({
      msg: `error from getAllcategory controller`,
      error: error,
    });
  }
};
// @desc get singlecategory
exports.getsinglecategory = async (req, res) => {
  try {
    console.log(req.params);
    const { name } = req.params;
    if (!name) {
      return res.status(401).json({
        msg: `category name missing`,
        error: error,
      });
    }

    const category = await categoryModel.findOne({ categoryName: name });
    if (!category) {
      return res.status(401).json({
        msg: `Category not found`,
      });
    }

    return res.status(200).json({
      msg: `Category found sucessfully`,
      data: category,
      status: "ok",
    });
  } catch (error) {
    console.log("error from getsinglecategory", error);
    return res.status(401).json({
      msg: `error from getsinglecategory`,
      error: error,
    });
  }
};

// @desc updateCategory name
exports.updateCategoryName = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await categoryModel.findOne({ _id: id })
    category.categoryName = req.body.categoryName || category.categoryName
    category.categoryDescription = req.body.categoryDescription || category.categoryDescription
    

    // save new update data

await category.save()
return res.status(200).json({
  msg: `category updated sucessfully.`,
  data: category,
});

  } catch (error) {
    console.log("error from updateCategoryName", error);
    return res.status(401).json({
      msg: `error from updateCategoryName`,
      error: error,
    });
  }
};
//@desc delete category data
exports.deletecategorydata = async (req, res) => {
  try {
    const { id } = req.params;
    const deletecategoryitem = await categoryModel.findOneAndDelete({ _id: id });
    
    if (!deletecategoryitem) {
       return res.status(401).json({
         msg: `deletecategoryitem unsucessful`,
         
       });
    }
     return res.status(200).json({
       msg: `deletecategoryitem sucessful`,
       data: deletecategoryitem,
       status: 200
     });
    } catch (error) {
    console.log("error from deletecategorydata", error);
    return res.status(401).json({
      msg: `error from deletecategorydata`,
      error: error,
    });
  }
}