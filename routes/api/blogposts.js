const router = require("express").Router();
const blogPostController = require("../../controllers/blogPostController");


router
  .route("/")
  .get(blogPostController.findAll)
  .post(blogPostController.create);

module.exports = router;