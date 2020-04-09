const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/ecommerceShop");

const productSeed = [
  {
    Item: "Ditch Slash Embroidered",
    Type: "Hoodies",
    Description: "The Ditch Hoodie is our take on a classic hooded sweatshirt and features original Saturdays NYC artwork. Made from a medium weight french terry cloth, it will soften with each wear. 100% cotton in our standard hoodie fit.",
    Price: 125,
    Quantity: 94,
    Gender: "M",
    Image: "http://res.cloudinary.com/diadpow6d/image/upload/v1586396291/qfwgouhe9r2cgvw8kpra.jpg"
  },
  {
    Item: "Vintage Henley T-Shirt",
    Type: "T-Shirts",
    Description: "Our Vintage styles are constructed in a soft, lightweight slub-knit that offers great texture and a casual, relaxed look. Crew neck with three-button placket. Short sleeves.",
    Price: 10,
    Quantity: 58,
    Gender: "S",
    Image: "https://res.cloudinary.com/diadpow6d/image/upload/v1586396561/ewvzpgoa9nrvqf7x0wzb.jpg"
  },
  {
    Item: "Restful Intention Sweater",
    Type: "Sweaters",
    Description: "Designed for On the Move. Soft, Cashlu Fabric",
    Price: 200,
    Quantity: 92,
    Gender: "L",
    Image: "https://res.cloudinary.com/diadpow6d/image/upload/v1586397225/jjzlrxiqdsxteiwuwgs8.webp"
  },
  {
    Item: "U Wide-Fit Pleated Tapered Pants",
    Type: "Pants",
    Description: "Chino pants in flexible cotton twill material.",
    Price: 39.90,
    Quantity: 4,
    Gender: "M",
    Image: "http://res.cloudinary.com/diadpow6d/image/upload/v1586397577/drohwvbadsgwcjz9fsxd.jpg"
  },
  {
    Item: "Tiger King - Catchphrase",
    Type: "Socks",
    Description: "Be the real Tiger King in these exclusive socks from Rock 'Em! ",
    Price: 14,
    Quantity: 10000,
    Gender: "M",
    Image: "https://res.cloudinary.com/diadpow6d/image/upload/v1586397986/jxchrmc98j1pub4pkvoy.png"
  },
  {
    Item: "Stripe Multi-Ball Icon Sport Coat",
    Type: "Suits",
    Description: "Medium Grey Sport Coat, Cotton Seersucker from Thom Browne",
    Price: 5500,
    Quantity: 9,
    Gender: "S",
    Image: "https://res.cloudinary.com/diadpow6d/image/upload/v1586398267/eeyhgndiz7qcygucmmi8.jpg"
  },
  {
    Item: "Botanical Bangle, Rhodium Plated",
    Type: "Accessory",
    Description: "The Botanical collection is Atelier Swarovski’s latest collaboration with award-winning actress Penélope Cruz. Inspired by some of the earth’s most endangered flora, this elegant hinged bangle features delicate green and white crystal petals and floral motifs in sparkling pavé. Shining like a flower in the sun, this refined and feminine rhodium-plated design will work by day or by night. Wear with a necklace from the same collection to dial up your look for an evening out.",
    Price: 198,
    Quantity: 46,
    Gender: "S",
    Image: "https://res.cloudinary.com/diadpow6d/image/upload/v1586398954/nkesyfogl9aiturafoqo.jpg"
  },
  {
    Item: "Pocket Detail Wool Pencil Skirt",
    Type: "Skirts",
    Description: "A form-fitting pencil skirt in Italian-woven wool, patterned with our signature Vintage check. The style is detailed with patch pockets secured with equestrian-inspired leather tabs.",
    Price: 1190,
    Quantity: 5,
    Gender: "S",
    Image: "https://res.cloudinary.com/diadpow6d/image/upload/v1586399551/ufxpw8zygr7o2atel4sa.jpg"
  },
  {
    Item: "GG stretch cotton polo",
    Type: "Polo Shirts",
    Description: "The GG motif is reworked into an allover embroidery, contrasting this polo's dark blue stretch cotton base. An off-white and green striped collar completes the vintage inspired design.",
    Price: 1100,
    Quantity: 5,
    Gender: "",
    Image: "https://res.cloudinary.com/diadpow6d/image/upload/v1586399663/yjy7vopbl5jmbyk9t81e.jpg"
  },
  {
    Item: "Cashmere RWB Tipped Polo",
    Type: "Dress Shirts",
    Description: "Light Grey Polo, Cashmere Fabric",
    Price: 1100,
    Quantity: 85,
    Gender: "S",
    Image: "https://res.cloudinary.com/diadpow6d/image/upload/v1586398467/blekxugaenco0ozt7qfp.jpg"
  },
];

const blogPostSeed = [
  {
    Title: "Welcome to our store!",
    Body: "We are currently limited to only a few items, but please sign up for e-mail notifications to get notified when there are new releases. Thank you for visiting!",
    Date: "April 8th 2020, 9:31:44 pm"
  }];

const userSeed = [
  {
    Email: "henry@henry.com"
  }
]

db.BlogPost.remove({})
  .then(() => db.BlogPost.collection.insertMany(blogPostSeed))
  .then(data => {
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Product.remove({})
  .then(() => db.Product.collection.insertMany(productSeed))
  .then(data => {
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.UserList.remove({})
  .then(() => db.UserList.collection.insertMany(userSeed))
  .then(data => {
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
