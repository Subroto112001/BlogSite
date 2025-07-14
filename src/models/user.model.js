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
    avatar: {
        type: String,
    trim: true    
  },
  phoneNumber: {
    type: Number,
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
    lastLogin: {
        type: Date,
        trim: true
    },
    presentAddress: {
        type: String,
    trim: true ,
    },
    permanenAddress: {
        type: String,
    trim: true ,
    }

}, {
    timestamps: true
}

);



module.exports= mongoose.model("user", userSchema)