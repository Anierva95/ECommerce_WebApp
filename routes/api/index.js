const router = require("express").Router();
const productRoutes = require("./products");
const blogPostRoutes = require("./blogposts")

// Post routes
router.use("/products", productRoutes);
router.use("/blogposts", blogPostRoutes);

module.exports = router;
