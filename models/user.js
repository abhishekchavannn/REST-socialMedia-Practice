const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },

    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },

    password: {
      type: String,
      required: true,
      min: 6,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    coverPicture: {
      type: String,
      default: "",
    },

    followers: {
      type: Array,
      default: [],
    },
    followings: {
      type: Array,
      default: [],
    },
    isAdmin: {
      type: Boolean,
      deafult: false,
    },
    desc:{
      type: String,
      max: 50,
    },
    city:{
      type: String,
      max:50
    },
    role:{
      type: String,
      max: 50
    },
    jobs:{
      type: Number,
      enum: [1, 2, 3],
    }
  },
  //whenever a user is created, there will be time recorded
  { timestamps: true }
);

module.exports = mongoose.model("user", UserSchema);
