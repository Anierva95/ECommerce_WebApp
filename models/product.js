const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  Item: { type: String, required: true },
  Type: { type: String, required: true }, //make this a dropdown? when adding a new item *for sorting purposes later on
  Description: { type: String, required: true },
  Price: { type: Number, required: true },
  Quantity: { type: Number, required: true },
  Gender: { type: String, required: true}, //dropdown? male/female/unisex
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;