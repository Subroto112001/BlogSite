const usermodal = require('../models/user.model')

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
}

exports.login = async (req, res) => {
    try {

        // if (!email) {
        //   return res.status(401).json({
        //     msg: "email Missing",
        //   });
        // }
       
        // if (!password) {
        //   return res.status(401).json({
        //     msg: "password Missing",
        //   });
        // }
        


console.log(req.body);

        const isExist = await usermodal.findOne({
          $and: [{ email: req.body.email, password: req.body.password }],
        });
        console.log(isExist);
     
        if (!isExist) {
          return res.status(401).json({
            msg: `${email} Email and password in invalid`,
          });
        }
    return res.status(200).json({
      msg: "login Succesfull",
    });
    } catch (error) {
        console.log("Error from login", error);
        
    }
}