const mongoose = require('mongoose');

// const Schema = mongoose.Schema;

const postSchema =  mongoose.Schema(
  {
    user: {
      // type:mongoose.Schema.Types.ObjectId,
      name: { type: String },
      email: { type: String },
      password: { type: String },
      bio: { type: String },
      phone: { type: Number },
      dateNaissance: { type: Date },
      adress: { type: String },
      likers: {
          type:
              [String]
      },
      id: {
        type : String
      }
    },
  
    message: {
      type: String,
      trim: true,
      maxlength: 5000,
    },
    // picture: {
    //   type: String,
    // },
    // video: {
    //   type: String,
    // },
    likers: {
      type: [String],
      required: true,
     
    },
    comments: {
      type: [
        {
          commenterId:String,
          commenterPseudo: String,
          text: String,
          timestamp: Number,
        }

      ],
      // required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Postuser = mongoose.model('postuser', postSchema);