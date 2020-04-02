import React from "react";

function CheckoutHeader(props) {
    console.log(props);
    return (
        <tr>
            <td>{props.item}</td>
            <td>${props.price.toFixed(2)}</td>
            <td>{props.quantity}</td>
            <td>${props.total}</td>
        </tr>
    )
}

export default CheckoutHeader;