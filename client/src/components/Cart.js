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
import Button from '@material-ui/core/Button';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from "react-router-dom";
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
                        API.updateProduct(item._id, { Quantity: newQuantity }).then(res => console.log("product quantity updated!"), window.location.replace("/UserAccount"))
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

        return fetch('https://ecommerce-bootcamp.herokuapp.com/payment', {
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
        setTotalCharge({ ...totalCharge, price: total });
        saveCart();
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
    };

    function saveCart() {
        API.saveCart(state.currentUser.id, state.shoppingCart).then(res => console.log("saved to cart", res.data)).then(dispatch({
            type: "SET_USER",
            user: {
                ...state.currentUser,
                shoppingCart: state.shoppingCart
            }
        }))
    };

    function removeItem(id) {
        const shoppingCart = state.shoppingCart;
        const updatedCart = shoppingCart.filter(element => element._id !== id)
        console.log("updatedCart: ", updatedCart);
        dispatch({ type: "UPDATE_CART", updatedCart: updatedCart });
        saveCart();
    };

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
            <Grid item xs={8}>
                {/* || state.shoppingCart.length !== 0 */}
                {state.shoppingCart.length !== 0 ?
                    <TableContainer>
                        <Table>
                            <TableBody>
                                <TableCell align='left'> Item</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell align='center'>Quantity</TableCell>
                                <TableCell align='center'>Price</TableCell>
                                <TableCell align='center'>Item Subtotal</TableCell>
                            </TableBody>
                            <TableBody>
                                {state.shoppingCart.map(element => (
                                    subTotal = subTotal + (element.Quantity * element.Price),
                                    <TableRow>
                                        <TableCell>
                                            <img alt={element.Item} src={element.Image} height='100px'></img>
                                        </TableCell>
                                        <TableCell>
                                            <List>
                                                <ListItem>
                                                    {/* <AccountCircleIcon /> */}
                                                    <strong>{element.Item}</strong>
                                                    <Link onClick={event => removeItem(element._id)}><DeleteIcon /></Link>
                                                </ListItem>
                                                <ListItem>
                                                    Description: {element.Description}
                                                </ListItem>
                                            </List>
                                        </TableCell>
                                        <TableCell align='center'>
                                            <TextField
                                                label="Size"
                                                id={element._id}
                                                value={element.Quantity}
                                                variant="outlined"
                                                size="small"
                                                placeholder={element.Quantity}
                                                select
                                                label={"Qty."}
                                                onChange={event => editQuantity(event, element._id)}
                                            >
                                                {quantity.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </TableCell>
                                        <TableCell align='center'>${element.Price}</TableCell>
                                        <TableCell align='center'>${element.Price * element.Quantity}</TableCell>
                                    </TableRow>
                                ))}
                                {taxAmount()}
                                {totalAmount()}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    : <><h1>Your cart is empty</h1></>}
            </Grid>
            {state.shoppingCart.length !== 0 ?
                <Grid item xs={2}>
                    <Grid container direction="row">
                        <Grid item xs={10}></Grid>
                        <Grid item xs={2} align='center'><h3>Checkout</h3></Grid>
                    </Grid>
                    <Grid container direction="row">
                        <Grid item xs={2}></Grid>
                        <Grid item xs={10}><h3>Subtotal: $ {subTotal.toFixed(2)}</h3></Grid>
                    </Grid>
                    <Grid container direction="row">
                        <Grid item xs={2}></Grid>
                        <Grid item xs={10}><h3>Tax: $ {taxTotal.toFixed(2)}</h3></Grid>
                    </Grid>
                    <Grid container direction="row">
                        <Grid item xs={2}></Grid>
                        <Grid item xs={10}><h3>Total: $ {total.toFixed(2)}</h3></Grid>
                    </Grid>
                    <Grid container direction="row" >
                        <Grid item xs={2}></Grid>
                        <Grid item xs={10}>
                            <div className="checkout">
                                <StripeCheckout
                                    stripeKey="pk_test_EyOvaQsKqUFV933zd4l0nmOK00ViQzudXV"
                                    token={makePayment}
                                    name="Buy product"
                                    amount={totalCharge.price * 100}
                                />
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                : <></>}
        </Grid>
    )
}

export default Cart