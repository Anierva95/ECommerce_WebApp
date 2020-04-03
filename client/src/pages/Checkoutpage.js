import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import {CardElement} from '@stripe/react-stripe-js';
import Navbar from '../components/Navbar';


export default function CheckOutPage() {
  return (
<>
<Navbar/>

<CardElement
  options={{
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#9e2146',
      },
    },
  }}
/>
</>
  )
}
