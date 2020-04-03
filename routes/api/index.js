const router = require("express").Router();
const productRoutes = require("./products");
const blogPostRoutes = require("./blogposts")

// Post routes
router.use("/products", productRoutes);
router.use("/blogposts", blogPostRoutes);
router.use("/users", userRoutes);

module.exports = router;
