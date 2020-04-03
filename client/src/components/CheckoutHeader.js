import React, { useRef } from "react";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { useStoreContext } from "../utils/GlobalState";

function CheckoutHeader(props) {
    // console.log(props);

    const [state, dispatch] = useStoreContext();
    // console.log(state.shoppingCart)

    function editQuantity (id, itemQuantity) {
        const itemObj = state.shoppingCart.find(({_id}) => _id === id)
        console.log("item found: " , itemObj)
    }

    const quantityRef = useRef();

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
        <tr>
            <td>{props.item}</td>
            <td>${props.price.toFixed(2)}</td>
            <td>
                <TextField
                    id={props.id}
                    select
                    label={"Quantity"}
                    value={props.quantity}
                    variant="filled"
                    inputRef={quantityRef}
                    placeholder={props.quantity}
                    onChange={() => editQuantity(props.id, quantityRef)}
                    style={{ "width": "200px" }}
                >
                    {quantity.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                {/* {props.quantity} */}
                </td>
            <td>${props.total}</td>
        </tr>
    )
}

export default CheckoutHeader;