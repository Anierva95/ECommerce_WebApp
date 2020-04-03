import React, { useEffect, useRef, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { useStoreContext } from "../utils/GlobalState";

const Cart = () => {

    const [state, dispatch] = useStoreContext();

    // console.log(state.shoppingCart);

    let total;
    let subTotal = 0;
    let taxTotal;
    
    let taxRate = 0.07;

    function taxAmount() {
        taxTotal = subTotal * taxRate
    }

    function totalAmount() {
        total = subTotal + taxTotal
    }

    function editQuantity(event, id) { 
        const shoppingCart = state.shoppingCart;
        const updatedCart = shoppingCart.map(element => {
            if(element._id === id) {
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
                        subTotal = subTotal + (element.Quantity * element.Price.toFixed(2)),
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
                            <td>${(element.Quantity * element.Price).toFixed(2)}</td>
                        </tr>
                    ))}
                    {taxAmount()}
                    {totalAmount()}
                    <hr></hr>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>Subtotal: </th>
                        <th>${subTotal.toFixed(2)}</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>Subtotal with Tax: </th>
                        <th>${taxTotal.toFixed(2)}</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>Total with Tax: </th>
                        <th>${total.toFixed(2)}</th>
                    </tr>
                </tbody>

            </table>
            <div className="checkout">
                <button>checkout</button>
            </div>
        </div>
    )
}

export default Cart