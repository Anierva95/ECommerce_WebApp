import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  injectStripe
} from 'react-stripe-elements'
import axios from 'axios'
import './CheckoutForm.scss'

const CheckoutForm = ({ selectedProduct, stripe, history }) => {
  if (selectedProduct === null) {
    history.push('/')
    return null
  }

  const [receiptUrl, setReceiptUrl] = useState('')

  const handleSubmit = async event => {
    event.preventDefault()

    const { token } = await stripe.createToken({
      name: 'customer name'
    })

    const order = await axios.post('http://localhost:7000/api/stripe/charge', {
      amount: selectedProduct.price.toString().replace('.', ''),
      source: token.id,
      receipt_email: 'customer@example.com'
    })

    setReceiptUrl(order.data.charge.receipt_url)
  }

  if (receiptUrl) {
    return (
      <div className="success">
        <h2>Payment Successful!</h2>
        <a href={receiptUrl}>View Receipt</a>
        <Link to="/">Home</Link>
      </div>
    )
  }

  return (
    <div className="checkout-form">
      <p>Amount: ${selectedProduct.price}</p>
      <form onSubmit={handleSubmit}>
        <label>
          Card details
          <CardNumberElement />
        </label>
        <label>
          Expiration date
          <CardExpiryElement />
        </label>
        <label>
          CVC
          <CardCVCElement />
        </label>
        <button type="submit" className="order-button">
          Pay
        </button>
      </form>
    </div>
  )
}

export default injectStripe(CheckoutForm)
