const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
// const postCharge = require('./stripe')
require('dotenv').config()
const mongoose = require("mongoose");
const routes = require("./routes");

const env = require("dotenv").config({ path: "./.env" });
const stripe = require("stripe")("sk_test_ZJ27OYNBBKyx1APxHOc7HCYy00z7lu2Sdn");
const cors = require("cors");
const uuid = require("uuid/v4")

const port = process.env.PORT || 7000

// const { resolve } = require("path");

const app = express()
app.use(cors())
// const router = express.Router()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/ecommerceShop");

app.post("/payment", (req, res) => {
  console.log(req.body)

  const { product , token } = req.body;
  console.log("PRODUCT", product);
  console.log("PRICE", product.price);
  const idempotencyKey = uuid();

  return stripe.customers.create({
    email: token.email,
    source: token.id
  }).then(customer => {
    stripe.charges.create({
      amount: product.price,
      currency: 'usd',
      customer: customer.id,
      receipt_email: token.email,
      description: product.name
    }, {idempotencyKey})
  }).then(charge => {
    stripe.paymentIntents.create({
      amount: product.price,
      currency: 'usd'
    })
  }).then(result => res.status(200).json(result)).catch(err => console.log(err))
})


app.use(routes);



// app.use(bodyParser.json());
// app.use(
//   express.json({
//     // We need the raw body to verify webhook signatures.
//     // Let's compute it only when hitting the Stripe webhook endpoint.
//     verify: function(req, res, buf) {
//       if (req.originalUrl.startsWith("/webhook")) {
//         req.rawBody = buf.toString();
//       }
//     }
//   })
// );

// app.get("/public-key", (req, res) => {
//   res.send({ publicKey: process.env.STRIPE_PUBLISHABLE_KEY });
// });

// app.get("/product-details", (req, res) => {
//   let data = getProductDetails();
//   res.send(data);
// });

// app.post("/create-payment-intent", async (req, res) => {
//   const body = req.body;
//   const productDetails = getProductDetails();

//   const options = {
//     ...body,
//     amount: productDetails.amount,
//     currency: productDetails.currency
//   };

//   try {
//     const paymentIntent = await stripe.paymentIntents.create(options);
//     res.json(paymentIntent);
//   } catch (err) {
//     res.json(err);
//   }
// });

// let getProductDetails = () => {
//   return { currency: "USD", amount: 100000 };
// };

// // Webhook handler for asynchronous events.
// app.post("/webhook", async (req, res) => {
//   let data;
//   let eventType;
//   // Check if webhook signing is configured.
//   if (process.env.STRIPE_WEBHOOK_SECRET) {
//     // Retrieve the event by verifying the signature using the raw body and secret.
//     let event;
//     let signature = req.headers["stripe-signature"];

//     try {
//       event = stripe.webhooks.constructEvent(
//         req.rawBody,
//         signature,
//         process.env.STRIPE_WEBHOOK_SECRET
//       );
//     } catch (err) {
//       console.log(`⚠️ Webhook signature verification failed.`);
//       return res.sendStatus(400);
//     }
//     // Extract the object from the event.
//     data = event.data;
//     eventType = event.type;
//   } else {
//     // Webhook signing is recommended, but if the secret is not configured in `config.js`,
//     // retrieve the event data directly from the request body.
//     data = req.body.data;
//     eventType = req.body.type;
//   }

//   if (eventType === "payment_intent.succeeded") {
//     // Fulfill any orders, e-mail receipts, etc
//     console.log("💰 Payment received!");
//   }

//   if (eventType === "payment_intent.payment_failed") {
//     // Notify the customer that their order was not fulfilled
//     console.log("❌ Payment failed.");
//   }

//   res.sendStatus(200);
// });




// router.post('/stripe/charge', postCharge)
// router.all('*', (_, res) =>
//   res.json({ message: 'please make a POST request to /stripe/charge' })
// )

// app.use((_, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'
//   )
//   next()
// })
// app.use(bodyParser.json())
// app.use('/api', router)
// app.use(express.static(path.join(__dirname, '../build')))

// app.get('*', (_, res) => {
//   res.sendFile(path.resolve(__dirname, '../build/index.html'))
// })

app.listen(port, () => console.log(`server running on port ${port}`))