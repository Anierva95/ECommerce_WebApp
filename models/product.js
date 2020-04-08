const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  Item: { type: String, required: true },
  Type: { type: String, required: true },
  Description: { type: String, required: true },
  Price: { type: Number, required: true },
  Quantity: { type: Number, required: true },
  Gender: { type: String, required: true },
  Image: { type: String, required: false }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;