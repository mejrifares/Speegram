const express = require('express')
const postController = require ("../controllers/post.controller")
// const multer = require("multer");
// const upload = multer();

const router = express.Router()


router.get('/', postController.readPost);
router.post('/post', postController.createPost);
// router.put('/post/:id', postController.updatePost);
router.delete('/post/:id', postController.deletePost);
router.patch('/like-post/:id', postController.likePost);

// comments
router.patch('/comment-post/:id', postController.commentPost);
router.patch('/edit-comment-post/:id', postController.editCommentPost);
router.patch('/delete-comment-post/:id', postController.deleteCommentPost);



module.exports = router;