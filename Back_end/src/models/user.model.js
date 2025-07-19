const mongoose = require("mongoose");
const { type } = require("os");

const { Schema } = mongoose;

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    trim: true,
    min: [6, "atleast use 6 charecter"],
    max: [19, "maximum 19 charecter"],
  },
  email: {
    type: String,
    required: true,
    trim: true,
    },
  
    password: {
        type: String,
        required: true,
        trim: true,
        min: [6]
    }
    ,
 

}, {
    timestamps: true
}

);



module.exports= mongoose.model("user", userSchema)