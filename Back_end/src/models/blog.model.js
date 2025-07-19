const mongoose = require("mongoose");
const { Schema } = mongoose;
const blogShcema = new Schema(
  {
    userid: {
      type: mongoose.Schema.ObjectId,
      ref: "user",
    },
    blogTitle: {
      type: String,
      required: true,
      trim: true,
    },
    blogDescription: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
        type: String,
        required : true
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("blog", blogShcema);
