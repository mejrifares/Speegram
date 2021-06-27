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
    // coverPicture: {
    //   type: String,
    //   default: "",
    // },
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
      default: false,
    },
    bio: {
      type: String,
      max: 99,
    },
    city: {
      type: String,
      max: 50,
    },
    birthday : {
      type : Date
    },
    website : {
      type : String
    },
    country: {
      type: String,
      max: 50,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);

// const mongoose = require("mongoose");
// // const schema = mongoose.Schema

// const userSchema = mongoose.Schema(
//   {
//     name: { type: String },
//     email: { type: String },
//     password: { type: String },
//     bio: {
//       type: String,
//       maxlength: 130,

//     },
//     phone: { type: Number },
//     dateNaissance: { type: Date },
//     adress: { type: String },
//     likers: {
//       type: [String],
//     },
//   },
//   { timestamps: true }
// );

// module.exports = User = mongoose.model("user", userSchema);
