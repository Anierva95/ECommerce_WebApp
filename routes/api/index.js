const router = require("express").Router();
const productRoutes = require("./products");

// Post routes
router.use("/products", productRoutes);

module.exports = router;
