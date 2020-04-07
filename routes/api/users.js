const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router
  .route("/")
  .get(usersController.findAll)
  .post(usersController.create);

router
  .route("/:id")
  .get(usersController.find)
  .put(usersController.update)
  .post(usersController.updateCart)

module.exports = router;