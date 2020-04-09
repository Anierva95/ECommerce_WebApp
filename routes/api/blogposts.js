const router = require("express").Router();
const blogPostController = require("../../controllers/blogPostController");


router
  .route("/")
  .get(blogPostController.findAll)
  .post(blogPostController.create);

router
  .route("/:id")
  .delete(blogPostController.remove)
  .put(blogPostController.update)
module.exports = router;