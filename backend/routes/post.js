const express = require("express");
const postController = require("../controllers/post");
const validator = require("../helpers/validator");

const router = express.Router();

router.get("/post", postController.getAllPosts);
router.get("/post/:id", postController.getPostById);
router.post("/post", validator.createPostValidator, postController.createPost);
router.patch("/post/:id", postController.updatePost);
router.delete("/post/:id", postController.deletePost);

module.exports = router;



