import React from "react";

function CheckoutHeader(props) {
    console.log(props);
    // const shoppingCart = props.headers.shoppingCart;
    // const total = props.quantity * props.price
    return (
        <tr>
            <td>{props.item}</td>
            <td>${props.price}</td>
            <td>{props.quantity}</td>
            <td>${props.total}</td>
        </tr>
    )
}

export default CheckoutHeader;