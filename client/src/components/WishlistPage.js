import React, { useEffect } from 'react';
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
import CardMedia from '@material-ui/core/CardMedia';
import API from '../utils/API';

const useStyles = makeStyles({
    media: {
        height: 140,
    },
});

export default function WishlistPage(props) {
    const [state, dispatch] = useStoreContext();
    const classes = useStyles();
    // console.log("props in wishlist", props)
    // console.log("state in wishlist", state);

    function setWishDb() {
        API.saveWish(state.currentUser.id, state.wishList).then(res => console.log("saved to wishList", res.data)).then(dispatch({
            type: "SET_USER",
            user: {
                ...state.currentUser,
                wishList: state.wishList
            }
        }))
    }

    function removeItem(id) {
        const wishList = state.wishList;
        const updatedList = wishList.filter(element => element._id !== id)
        console.log("updatedList: ", updatedList);
        dispatch({ type: "UPDATE_WISH", updatedList: updatedList });
        setWishDb();
    };

    useEffect(() => {
        setWishDb();
    }, [state.wishList])

    return (

        <Grid container direction="row">
            <Grid item xs={12}>
                {/* state.wishList !== undefined ||  */}
                {state.wishList.length !== 0 ?
                    <TableContainer>
                        <Table>
                            <TableBody>
                                <TableCell></TableCell>
                                <TableCell><h2>Wishlist</h2></TableCell>
                            </TableBody>
                            <TableBody>
                                {state.wishList.map(element => (
                                    <TableRow>
                                        <TableCell> <img alt={element.Item} src={element.Image} height='100px'></img></TableCell>
                                        <TableCell>                                           
                                            <List>
                                                <ListItem>
                                                    {/* <AccountCircleIcon /> */}
                                                    <strong>{element.Item} (Item#: {element._id})</strong>
                                                </ListItem>                                             
                                                <ListItem>
                                                    Description: {element.Description}
                                                </ListItem>
                                            </List>
                                        </TableCell>
                                        <TableCell align='right'>
                                            <Link onClick={event => removeItem(element._id)}><DeleteIcon /></Link>
                                        </TableCell>
                                    </TableRow>
                                ))}                                
                            </TableBody>
                        </Table>
                    </TableContainer>
                    : <><h1>Your wishlist is empty!</h1> </>}
            </Grid>
        </Grid>
    )
}