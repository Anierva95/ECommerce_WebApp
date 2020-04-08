import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { useStoreContext } from "../utils/GlobalState";
import StripeCheckout from "react-stripe-checkout";
import API from '../utils/API';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
const moment = require('moment');



const Cart = () => {

    const [state, dispatch] = useStoreContext();

    const [totalCharge, setTotalCharge] = useState({
        name: "Ecommerce App items",
        price: 0,
    })

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        table: {
            minWidth: 700,
        },
    }));

    const classes = useStyles();

    function setTransaction(id, cart) {
        API.addTransaction(id, cart).then(res => console.log("successfully added to cart: ", res))
    };

    function updateInventory() {
        const updateCart = state.shoppingCart
        const currentProducts = state.products
        for (let item of updateCart) {
            for (let product of currentProducts) {
                if (item._id === product._id) {
                    let newQuantity = parseInt(product.Quantity) - parseInt(item.Quantity)
                    if (newQuantity < 0) {
                        return alert("We are all sold out!")
                    } else {
                        API.updateProduct(item._id, { Quantity: newQuantity }).then(res => console.log("product quantity updated!"), window.location.replace("/shop"))
                    }
                }
            }
        }
    }

    const makePayment = token => {
        const body = {
            token,
            totalCharge
        }
        const headers = {
            "Content-Type": "application/json"
        }

        return fetch('http://localhost:7000/payment', {
            method: "POST",
            headers,
            body: JSON.stringify(body)
        }).then(response => {
            // console.log("Response", response)
            // const { status } = response;
            console.log("state: ", state)
            // console.log("status", status)
            // console.log(token, token.id)
            const { id } = token
            //token.id is stripe transaction id (splice the first 4 char, when rendering to show user)
            // console.log("statecurrentuserid: ",state.currentUser.id)
            updateInventory()
            // setTransaction(state.currentUser.id, { [id]: state.shoppingCart })
            setTransaction(state.currentUser.id, {
                transactionID: id, items: state.shoppingCart, date: moment().format('MMMM Do YYYY, h:mm:ss a')
            })
            API.saveCart(state.currentUser.id, [])
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
        <Grid container direction="row">
            {/* <Grid item xs={2}></Grid> */}
            <Grid item xs={8}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableCell>
                                {/* <List>
                                    <ListItem>
                                        <AccountCircleIcon />
                                        TEST ITEM (Item# 5e8d3fe0105415112c0bddaa)
                                    </ListItem>
                                    <ListItemText>
                                        Description: Hello asdflkajdflaskdjfalsdkfjasdfasdfaskldfjaskdfasd
                                    </ListItemText>
                                </List> */}
                            </TableCell>
                            <TableCell align='center'>Quantity</TableCell>
                            <TableCell align='center'>Price</TableCell>
                            <TableCell align='center'>Item Subtotal</TableCell>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <List>
                                        <ListItem>
                                            <AccountCircleIcon />
                                            TEST ITEM (Item# 5e8d3fe0105415112c0bddaa)
                                        </ListItem>
                                        <ListItemText>
                                            Description: Hello asdflkajdflaskdjfalsdkfjasdfasdfaskldfjaskdfasd
                                        </ListItemText>
                                    </List>
                                </TableCell>
                                <TableCell align='center'>
                                    <TextField

                                        label="Size"
                                        id="outlined-size-small" // id={element._id}
                                        defaultValue="1" // value={element.Quantity}
                                        variant="outlined"
                                        size="small"
                                        placeholder="" // placeholder={element.Quantity}
                                        select
                                        label={"Qty."}
                                    // onChange={event => editQuantity(event, element._id)}
                                    >
                                        {quantity.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}

                                    </TextField>
                                </TableCell>
                                <TableCell align='center'>$ 10.00</TableCell>
                                <TableCell align='center'>$ 100</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <AccountCircleIcon></AccountCircleIcon>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <List>
                                        <ListItem>
                                            <AccountCircleIcon />
                                            TEST ITEM (Item# 5e8d3fe0105415112c0bddaa)
                                        </ListItem>
                                        <ListItemText>
                                            Description: Hello asdflkajdflaskdjfalsdkfjasdfasdfaskldfjaskdfasd
                                        </ListItemText>
                                    </List>
                                </TableCell>
                                <TableCell>
                                    <TextField

                                        label="Size"
                                        id="outlined-size-small" // id={element._id}
                                        defaultValue="1" // value={element.Quantity}
                                        variant="outlined"
                                        size="small"
                                        placeholder="" // placeholder={element.Quantity}
                                        select
                                        label={"Qty."}
                                    // onChange={event => editQuantity(event, element._id)}
                                    >
                                        {quantity.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}

                                    </TextField>
                                </TableCell>
                                <TableCell>$ 10.00</TableCell>
                                <TableCell>$ 100</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>


            </Grid>
            <Grid item xs={2}>
                <Table>
                    <TableHead>
                        <TableCell>
                            Hello
                        </TableCell>
                    </TableHead>
                    <TableBody>
                        <TableCell>
                            <div className="checkout">
                                <StripeCheckout
                                    stripeKey="pk_test_4acFvUccLP5A71yVS4W7sJp700euorF5ej"
                                    token={makePayment}
                                    name="Buy product"
                                    amount={totalCharge.price * 100}
                                />

                            </div>
                        </TableCell>
                    </TableBody>
                </Table>
            </Grid>
        </Grid>
    )
}

{/* <TableContainer>
                    <Table className={classes.table} aria-label="spanning table">
                        {state.shoppingCart.length !== 0 ?
                            <table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell></TableCell>
                                        <TableCell>Item</TableCell>
                                        <TableCell>Price</TableCell>
                                        <TableCell>Quantity</TableCell>
                                        <TableCell>Item Total</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {state.shoppingCart.map(element => (
                                        subTotal = subTotal + (element.Quantity * element.Price),
                                        <TableRow key={element._id}>
                                            <TableCell><AccountCircleIcon></AccountCircleIcon></TableCell>
                                            <TableCell>{element.Item}</TableCell>
                                            <TableCell>${element.Price}</TableCell>
                                            <TableCell>
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
                                            </TableCell>
                                            <TableCell>$ {(element.Quantity * element.Price).toFixed(2)}</TableCell>
                                        </TableRow>
                                    ))}

                                    {taxAmount()}
                                    {totalAmount()}

                                    <TableRow>
                                        <th></th>
                                        <th></th>
                                        <TableCell>Subtotal: </TableCell>
                                        <TableCell>$ {subTotal.toFixed(2)}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <th></th>
                                        <th></th>
                                        <TableCell>Tax: </TableCell>
                                        <TableCell>$ {taxTotal.toFixed(2)}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <th></th>
                                        <th></th>
                                        <TableCell>Total with Tax: </TableCell>
                                        <TableCell>$ {total.toFixed(2)}</TableCell>
                                    </TableRow>

                                </TableBody>

                            </table>
                            : <h1>your cart is empty</h1>}

                        {state.shoppingCart.length !== 0 ?
                            <div className="checkout">
                                <StripeCheckout
                                    stripeKey="pk_test_4acFvUccLP5A71yVS4W7sJp700euorF5ej"
                                    token={makePayment}
                                    name="Buy product"
                                    amount={totalCharge.price * 100}
                                />

                            </div>
                            : ""}
                    </Table>
                </TableContainer> */}



{/* 
            </Grid>
            <Grid item xs={2}>
                <Table>
                    <div className="checkout">
                        <StripeCheckout
                            stripeKey="pk_test_4acFvUccLP5A71yVS4W7sJp700euorF5ej"
                            token={makePayment}
                            name="Buy product"
                            amount={totalCharge.price * 100}
                        />

                    </div>
                </Table>
            </Grid>
        </Grid> */}




//     )
// }

export default Cart