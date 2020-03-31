const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
// const postCharge = require('./stripe')
require('dotenv').config()
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express()
// const router = express.Router()
const port = process.env.PORT || 7000


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(routes);
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/ecommerceShop");

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
