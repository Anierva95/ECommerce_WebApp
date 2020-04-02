const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogPostSchema = new Schema({
  Title: { type: String, required: true },
  Body: { type: String, required: true },
  Date: {type: Number, required: false},
  Likes: {type: Number, required: false}
});

const BlogPost = mongoose.model("BlogPost", blogPostSchema);

module.exports = BlogPost;