const usermodal = require("../models/user.model");

exports.registration = async (req, res) => {
  console.log(req.body);
  try {
    const { userName, email, avatar, phoneNumber, password } = req.body;

    if (!userName) {
      return res.status(401).json({
        msg: "Username Missing",
      });
    }
    if (!email) {
      return res.status(401).json({
        msg: "email Missing",
      });
    }

    if (!password) {
      return res.status(401).json({
        msg: "password Missing",
      });
    }

    /**
     * todo : is there any email already exist we will find it
     *
     * */

    const isExist = await usermodal.findOne({ email: email });
    console.log(isExist);
    if (isExist) {
      return res.status(401).json({
        msg: `${email} is already exist in databse, Try another one`,
      });
    }

    /**
     * todo : here now we will save the data in databse
     * */

    usermodal.create({
      userName,
      email,

      password,
      ...req.body,
    });
    return res.status(200).json({
      msg: "Registration Succesfull",
    });
  } catch (error) {
    console.log("error from user registration controller", error);
    res.status(501).json({
      msg: " Server error",
      error: error,
    });
  }
};
exports.login = async (req, res) => {
  try {
    const user = await usermodal.findOne({
      email: req.body.email,
      password: req.body.password,
    });

    if (!user) {
      return res.status(401).json({
        msg: `${req.body.email} Email and password is invalid`,
      });
    }

    // Send back user info along with message
    return res.status(200).json({
      msg: "Login successful",
      user: {
        id: user._id,
        email: user.email,
        userName: user.userName,
        // any other fields you want to send
      },
    });
  } catch (error) {
    console.log("Error from login", error);
    return res.status(500).json({
      msg: "Server error",
      error: error.message,
    });
  }
};


// @desc Get Single User
exports.getSingleUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await usermodal.findById(id)

    if (!user) {
      return res.status(404).json({
        msg: "User not found",
      });
    }

    return res.status(200).json({
      msg: "User fetched successfully",
      data: user,
    });
  } catch (error) {
    console.log("Error from getSingleUser controller", error);
    return res.status(500).json({
      msg: "Server error",
      error: error.message,
    });
  }
};
