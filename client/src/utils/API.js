import axios from "axios";

export default {
  // Gets all products
  getProducts: function() {
    return axios.get("/api/products");
  },
  // Gets the product with the given id
  getProduct: function(id) {
    return axios.get("/api/products/" + id);
  },
  // Deletes the product with the given id
  deleteProduct: function(id) {
    return axios.delete("/api/products/" + id);
  },
  // Saves a product to the database
  saveProduct: function(postData) {
    return axios.post("/api/products", postData);
  },
  // Update product quantity
  updateProduct: function (id, postData) {
    return axios.put("/api/products/" + id, postData);
  },

  getBlogPosts: function() {
    return axios.get("/api/blogposts");
  },
  saveBlogPost: function(postData) {
    return axios.post("/api/blogposts", postData);
  },
  deleteBlogPost: function(id) {
    return axios.delete("/api/blogposts/" + id);
  },
  updateBlogPost: function(id, postData) {
    return axios.put("/api/blogposts/" + id, postData);
  },

  getUsers: function() {
    return axios.get("/api/users");
  },
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  saveUsers: function(postData) {
    return axios.post("/api/users", postData);
  },
  addTransaction: function(id, postData) {
    return axios.put("/api/users/" + id, postData)
  },
  saveCart: function(id, postData) {
    return axios.post("/api/users/" + id, postData)
  }
};