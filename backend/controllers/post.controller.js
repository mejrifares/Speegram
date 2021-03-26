const Postuser = require ("../models/postuser")
const User = require ("../models/user") 
const ObjectID = require("mongoose").Types.ObjectId;


exports.readPost = (req, res) => {
 
  
  Postuser.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log("Error to get data : " + err);
  }).sort({ createdAt: -1 });
};

exports.createPost = async (req, res) => {

  try {
    const newPost = new Postuser({
      message: req.body.message,
      user: {...req.user , id: req.user.id},
      likers: [],
      comments: [],
      
    });
  
  const post= await  newPost.save();
    return res.status(201).json(post);
  } catch (err) {
    return res.status(400).send(err);
  }
};

// exports.updatePost = (req, res) => {
//   if (!ObjectID.isValid(req.params.id))
//     return res.status(400).send("ID unknown : " + req.params.id);

//   const updatedRecord = {
//     message: req.body.message,
//   };

//   Postuser.findByIdAndUpdate(
//     req.params.id,
//     { $set: updatedRecord },
//     { new: true },
//     (err, docs) => {
//       if (!err) res.send(docs);
//       else console.log("Update error : " + err);
//     }   
//   );
// };

exports.deletePost  = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);
    const post = await Postuser.findById(req.params.id)
    if (post.user.id !== req.user.id){
      return res.status(400).send ("you can not delete this post")
    }
    
  Postuser.findByIdAndRemove(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("Delete error : " + err);
  });
};

exports.likePost = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);
    console.log(req.user, req.params.id)
    const post = await Postuser.findById(
      req.params.id
    )
    var likers = post.likers
    if (likers.includes(req.user.id)){
      likers = likers.filter(item => item !== req.user.id)
      
    }
    else{likers=[...likers, req.user.id]}
  try {
    await Postuser.findByIdAndUpdate(
      req.params.id,
      {
        $set: { likers },
      },
      { new: true },
      (err, docs) => {
        if (err) return res.status(400).send(err);
      }
    );
  } catch (err) {
    return res.status(400).send(err);
  }
};


exports.commentPost = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    return Postuser.findByIdAndUpdate(
      req.params.id,
      {
        $push: {
          comments: {
            commenterId: req.body.commenterId,
            commenterPseudo: req.body.commenterPseudo,
            text: req.body.text,
            timestamp: new Date().getTime(),
          },
        },
      },
      { new: true },
      (err, docs) => {
        if (!err) return res.send(docs);
        else return res.status(400).send(err);
      }
    );
  } catch (err) {
    return res.status(400).send(err);
  }
};

exports.editCommentPost = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    return Postuser.findById(req.params.id, (err, docs) => {
      const theComment = docs.comments.find((comment) =>
        comment._id.equals(req.body.commentId)
      );

      if (!theComment) return res.status(404).send("Comment not found");
      theComment.text = req.body.text;

      return docs.save((err) => {
        if (!err) return res.status(200).send(docs);
        return res.status(500).send(err);
      });
    });
  } catch (err) {
    return res.status(400).send(err);
  }
};

exports.deleteCommentPost = async(req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
  await   Postuser.findById(
      req.params.id,
      {
        $pull: {
          comments: {
            _id: req.body.commentId,
          },
        },
      },
      { new: true },
      (err, docs) => {
        if (!err) return res.send(docs);
        else return res.status(400).send(err);
      }
    );
  } catch (err) {
    return res.status(400).send(err);
  }
};