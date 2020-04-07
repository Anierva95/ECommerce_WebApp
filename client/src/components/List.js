import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BuildIcon from '@material-ui/icons/Build';
import ReceiptIcon from '@material-ui/icons/Receipt';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        flexGrow: 1,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function NestedList(props) {
    console.log(props);
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    // const handleClick = () => {
    //     setOpen(!open);
    // };

    return (

        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Account Information
        </ListSubheader>
            }
            className={classes.root}
        >
            <ListItem button selected={props.page === "Account"} onClick={() => props.handlePageChange("Account")}>
                <ListItemIcon>
                    <BuildIcon />
                </ListItemIcon>
                <ListItemText primary="Account Details" />
            </ListItem>
            <ListItem button selected={props.page === "Transactions"} onClick={() => props.handlePageChange("Transactions")}>
                <ListItemIcon>
                    <ReceiptIcon />
                </ListItemIcon>
                <ListItemText primary="Transactions" />
            </ListItem>
            <ListItem button selected={props.page === "Wishlist"}onClick={() => props.handlePageChange("Wishlist")}>
                <ListItemIcon>
                    <FavoriteIcon/>
                </ListItemIcon>
                <ListItemText primary="Wish List" />
            </ListItem>
        </List>
    )
}