const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/ecommerceShop");

const productSeed = [
  {
    Item: "Zhaoyang",
    Type: "Person",
    Description: "Please stand up",
    Price: 1,
    Quantity: 1,
    Gender: "Male"
  },
  {
    Item: "Anthony",
    Type: "Person",
    Description: "Please stand up",
    Price: .5,
    Quantity: 100,
    Gender: "Male"
  },
  {
    Item: "Sick Sweatshirt",
    Type: "Sweatshirt",
    Description: "Laced with c0ke",
    Price: 1000,
    Quantity: 100,
    Gender: "Unisex"
  },
  {
    Item: "Used Napkin",
    Type: "Accessory",
    Description: "Found under a table",
    Price: 500,
    Quantity: 200,
    Gender: "Unisex"
  },
  {
    Item: "JingleBell",
    Type: "Accessory",
    Description: "Grandmother used to love this jinglebell...",
    Price: 1000,
    Quantity: 100,
    Gender: "Female"
  },
  {
    Item: "A white flag",
    Type: "Accessory",
    Description: "Used to surrender in a bad circumstance",
    Price: 100,
    Quantity: 100,
    Gender: "Unisex"
  },
  {
    Item: "Thick pair of jeans",
    Type: "Jean",
    Description: "No one will ever question if you skipped leg day",
    Price: 25,
    Quantity: 100,
    Gender: "Male"
  },
  {
    Item: "Jacket with holes",
    Type: "Jacket",
    Description: "You will look like a hipster, for sure.",
    Price: 85,
    Quantity: 150,
    Gender: "Female"
  },
];

const blogPostSeed = [
  {
    Title: "Blog about my store",
    Body: "Welcome to my store, we will be selling many things to try and make certain individuals stand up.. er I mean we will be raising money for charities. Yeah, this is a nonprofit ecommerce site. All profits will be donated to charities found on DonotSpot!",
    Date: "304923"
  }];

const userSeed = [
  {
    Email: "henry@henry.com"
  }
]

db.BlogPost.remove({})
  .then(() => db.BlogPost.collection.insertMany(blogPostSeed))
  .then(data => {
    console.log(data.result.n + " blog posts inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });



db.Product.remove({})
  .then(() => db.Product.collection.insertMany(productSeed))
  .then(data => {
    console.log(data.result.n + " products inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.UserList.remove({})
  .then(() => db.UserList.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " users inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

// db.Post.remove({})
//   .then(() => db.Post.collection.insertMany(bookSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });
