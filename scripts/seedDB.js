const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/ecommerceShop");

const productSeed = [
  {
    Item: "Zhaoyang",
    Description: "Please stand up",
    Price: 1,
    Quantity: 1
  },
  {
    Item: "Anthony",
    Description: "Please stand up",
    Price: .5,
    Quantity: 10
  },
  {
    Item: "Sick Sweatshirt",
    Description: "Laced with c0ke",
    Price: 1000,
    Quantity: 1
  },
  {
    Item: "Used Napkin",
    Description: "Found under a table",
    Price: 500,
    Quantity: 2
  },
  {
    Item: "JingleBell",
    Description: "Grandmother used to love this jinglebell...",
    Price: 1000,
    Quantity: 1
  },
  {
    Item: "A white flag",
    Description: "Used to surrender in a bad circumstance",
    Price: 100,
    Quantity: 1
  },
  {
    Item: "Thick pair of jeans",
    Description: "No one will ever question if you skipped leg day",
    Price: 25,
    Quantity: 10
  },
  {
    Item: "Jacket with holes",
    Description: "You will look like a hipster, for sure.",
    Price: 85,
    Quantity: 15
  },
];


db.Product.remove({})
  .then(() => db.Product.collection.insertMany(productSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
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
