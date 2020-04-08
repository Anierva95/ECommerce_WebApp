import React from 'react';
import { useStoreContext } from "../utils/GlobalState";
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
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from "react-router-dom";

export default function WishlistPage(props) {
    const [state, dispatch] = useStoreContext();

    console.log("state in wishlist", state);
    return (

        <Grid container direction="row">
            <Grid item xs={12}>
                {/* {state.shoppingCart !== undefined || state.shoppingCart.length !== 0 ? */}
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableCell align='center'>Wishlist</TableCell>
                            <TableCell></TableCell>
                        </TableHead>
                        <TableBody>
                            {/* {state.shoppingCart.map(element => (
                                    subTotal = subTotal + (element.Quantity * element.Price), */}
                            <TableRow>
                                <TableCell>
                                    <List>
                                        <ListItem>
                                            <AccountCircleIcon />
                                            {/* {element.Item} */}
                                            {/* <Link ><DeleteIcon /></Link> */}
                                            {/* onClick={event => removeItem(element._id)} */}
                                        </ListItem>
                                        <ListItem>
                                            
                                        </ListItem>
                                        <ListItemText>
                                            Description:
                                            adslkjfasdadslkjfasdadslkjfasdadslkjfasdadslkjfasdadslkjfasdadslkjfasdadslkjfasdadslkjfasd
                                                    {/* {element.Description} */}
                                        </ListItemText>
                                    </List>
                                </TableCell>
                                <TableCell align='right'>
                                    <Link ><DeleteIcon /></Link>
                                </TableCell>
                            </TableRow>
                            {/* <TableCell align='center'>
                                            <TextField
                                                label="Size"
                                                // id={element._id}
                                                // value={element.Quantity}
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
                                        </TableCell> */}
                            {/* <TableCell align='center'>$ {element.Price}</TableCell>
                                        <TableCell align='center'>$ {element.Price * element.Quantity}</TableCell> */}
                            {/* ))} */}
                            {/* {taxAmount()}
                                {totalAmount()} */}
                        </TableBody>
                    </Table>
                </TableContainer>
                {/* : <><h1>your cart is empty</h1> </>} */}
            </Grid>
        </Grid>
        // <>
        // <h1>My Wishlist Page</h1>
        // {state.wishList.map(wishListItem => {
        //     return(
        //     <>
        //     <p>{wishListItem.id}</p>
        //     <p>{wishListItem.Item}</p>
        //     <p>{wishListItem.Description}</p>
        //     <p>{wishListItem.Price}</p>
        //     </>
        // )})}
        // </>

    )
}