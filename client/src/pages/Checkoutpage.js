import React, {useState} from "react";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import Navbar from '../components/Navbar';
import CardSection from '../components/CardSection';
import StripeCheckout from "react-stripe-checkout"

import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';

export default function CheckOutPage() {
  const stripe = useStripe();
  const elements = useElements();

  const [product, setProduct] = useState({
      name: "React from FB",
      price: 100000,
      productBy: "bingobango",
  })

  const makePayment = token => {
      const body = {
          token,
          product
      }
      const headers = {
          "Content-Type" : "application/json"
      }
      
      console.log(token);
      console.log(product)
      
      return fetch('http://localhost:7000/payment', {
          method: "POST",
          headers,
          body: JSON.stringify(body)
      }).then(response => {
        console.log("Response", response)
        const {status} = response;
        console.log("status", status)
      }).catch(error => console.log(error))
  }


  return (
      <>
    <Navbar/>
    {/* <form onSubmit={handleSubmit}>
        <CardSection/>
      
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form> */}
    <StripeCheckout
    stripeKey="pk_test_EyOvaQsKqUFV933zd4l0nmOK00ViQzudXV"
    token={makePayment}
    name="Buy product"
    amount={product.price}
    />
    </>
  );
};
