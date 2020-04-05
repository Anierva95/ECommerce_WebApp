const express = require('express')
require('dotenv').config()
const mongoose = require("mongoose");
const routes = require("./routes");

const env = require("dotenv").config({ path: "./.env" });
const stripe = require("stripe")("sk_test_5E3bOXork8qZUBtLQ5KjBgu000BSHwwbfO"); // anthony's key : sk_test_ZJ27OYNBBKyx1APxHOc7HCYy00z7lu2Sdn
const cors = require("cors");
const uuid = require("uuid/v4");

const port = process.env.PORT || 7000

const app = express()
app.use(cors())

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/ecommerceShop");

app.post("/payment", (req, res) => {
  console.log(req.body)

  const { totalCharge , token } = req.body;
  console.log("PRODUCT", totalCharge);
  console.log("PRICE", totalCharge.price);
  const idempotencyKey = uuid();

  return stripe.customers.create({
    email: token.email,
    source: token.id
  }).then(customer => {
    stripe.charges.create({
      amount: totalCharge.price * 100,
      currency: 'usd',
      customer: customer.id,
      receipt_email: token.email,
      description: totalCharge.name
    }, {idempotencyKey})
  }).then(charge => {
    stripe.paymentIntents.create({
      amount: totalCharge.price * 100,
      currency: 'usd'
    })
  }).then(result => res.status(200).json(result)).catch(err => console.log(err))
})


app.use(routes);


app.listen(port, () => console.log(`server running on port ${port}`))