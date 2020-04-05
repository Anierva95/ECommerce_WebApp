import React, { useEffect, useRef, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { useStoreContext } from "../utils/GlobalState";
import StripeCheckout from "react-stripe-checkout"

const Cart = () => {

    const [state, dispatch] = useStoreContext();

    const [totalCharge, setTotalCharge] = useState({
        name: "Ecommerce App items",
        price: 0,
    })

    // const [total, setTotal] = useState()

    // const [subTotal, setSubTotal] = useState(0)

    // const [taxTotal, setTax] = useState()

    const makePayment = token => {
        const body = {
            token,
            totalCharge
        }
        const headers = {
            "Content-Type": "application/json"
        }

        console.log(token);
        console.log(totalCharge)

        return fetch('http://localhost:7000/payment', {
            method: "POST",
            headers,
            body: JSON.stringify(body)
        }).then(response => {
            console.log("Response", response)
            const { status } = response;
            console.log("status", status)
        }).catch(error => console.log(error))
    }

    let subTotal = 0;
    let taxTotal = 0;
    let total = 0;

    let taxRate = 0.07;

    function taxAmount() {
        taxTotal = taxTotal + (subTotal * taxRate)
    }

    function totalAmount() {
        total = total + subTotal + taxTotal
    }

    useEffect(() => {
        setTotalCharge({ ...totalCharge, price: total })
    }, [state.shoppingCart])


    function editQuantity(event, id) {
        const shoppingCart = state.shoppingCart;
        const updatedCart = shoppingCart.map(element => {
            if (element._id === id) {
                element.Quantity = event.target.value;
            }
            return element;
        })
        dispatch({ type: "UPDATE_CART", updatedCart: updatedCart });
    }

    const quantity = [
        {
            value: 1,
            label: 1
        },
        {
            value: 2,
            label: 2
        },
        {
            value: 3,
            label: 3
        },
        {
            value: 4,
            label: 4
        },
        {
            value: 5,
            label: 5
        }
    ]

    return (
        <div className="shoppingCart">
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Item Total</th>
                    </tr>
                </thead>
                <tbody>
                    {state.shoppingCart.map(element => (
                        // console.log(subTotal, "before"),
                        subTotal = subTotal + (element.Quantity * element.Price),
                        // console.log(subTotal, "after"),
                        <tr key={element._id}>
                            <td>{element.Item}</td>
                            <td>${element.Price}</td>
                            <td>
                                <TextField
                                    id={element._id}
                                    select
                                    label={"Quantity"}
                                    value={element.Quantity}
                                    variant="filled"
                                    placeholder={element.Quantity}
                                    onChange={event => editQuantity(event, element._id)}
                                    style={{ "width": "200px" }}
                                >
                                    {quantity.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </td>
                            <td>$ {(element.Quantity * element.Price).toFixed(2)}</td>
                        </tr>
                    ))}
                    {taxAmount()}
                    {totalAmount()}

                    <hr></hr>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>Subtotal: </th>
                        <th>$ {subTotal.toFixed(2)}</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>Tax: </th>
                        <th>$ {taxTotal.toFixed(2)}</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>Total with Tax: </th>
                        <th>$ {total.toFixed(2)}</th>
                    </tr>
                </tbody>

            </table>
            <div className="checkout">
                <StripeCheckout
                    stripeKey="pk_test_4acFvUccLP5A71yVS4W7sJp700euorF5ej"
                    token={makePayment}
                    name="Buy product"
                    amount={totalCharge.price * 100}
                />
            </div>
        </div>
    )
}

export default Cart