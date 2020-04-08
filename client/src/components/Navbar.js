import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, useLocation } from "react-router-dom";
import { useAuth0 } from '../utils/auth0context';
import API from '../utils/API';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import { useStoreContext } from "../utils/GlobalState";
import FavoriteIcon from '@material-ui/icons/Favorite';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "center"
  },
}));

export default function Navbar() {

  const { isLoading, user, loginWithRedirect, logout } = useAuth0();
  const classes = useStyles();
  const location = useLocation();
  const [state, dispatch] = useStoreContext()
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  useEffect(() => {

    if (!user) {
      return;
    } else {
      checkUser(user.email)
    }

    function checkUser(email) {
      API.getUsers().then(res => {
        const isUser = res.data.find(({ Email }) => Email === email)
        //   if (isUser.Transactions) {
        //   for (let transaction of isUser.Transactions) {
        //     console.log(JSON.stringify(transaction).split(":")[0].slice(2, 28));
        //   }
        // }
        if (!isUser) {
          API.saveUsers({ Email: email })
            .then(res =>
              dispatch({
                type: "SET_USER",
                user: {
                  id: res.data._id,
                  email: res.data.Email,
                  transactions: res.data.Transactions,
                  shoppingCart: res.data.ShoppingCart
                }
              }))
          dispatch({
            type: "GET_CART",
            dbCart: res.data.ShoppingCart
          })
        } else {
          dispatch({
            type: "SET_USER",
            user: {
              id: isUser._id,
              email: isUser.Email,
              transactions: isUser.Transactions,
              shoppingCart: isUser.ShoppingCart
            }
          })
          dispatch({
            type: "GET_CART",
            dbCart: isUser.ShoppingCart
          })
        }
      });
    };

    console.log("state: ", state);
  }, [user])

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Welcome to my Store!
          </Typography>
          <Link to="/shop" style={{ "textDecoration": "inherit" }}>
            <Button style={{ "textDecoration": "inherit" }} >Home</Button>
          </Link>
          <Link to="/UserAccount" style={{ "textDecoration": "inherit" }}>
            <Button style={{ "textDecoration": "inherit" }} >Account</Button>
          </Link>
          <Link to="/blog" style={{ "textDecoration": "inherit" }}>
            <Button style={{ "textDecoration": "inherit" }} >Blog</Button>
          </Link>
          <Badge badgeContent={state.shoppingCart ? state.shoppingCart.length : 0} color="secondary">
            <Link to="/cart" disabled='true' style={{ "textDecoration": "inherit" }}>
              <ShoppingCartIcon style={{ "textDecoration": "inherit" }} onClick={handleClickOpen}/>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Let Google help apps determine location. This means sending anonymous location data to
                    Google, even when no apps are running.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Disagree
                  </Button>
                  <Button onClick={handleClose} color="primary" autoFocus>
                    Agree
                  </Button>
                </DialogActions>
              </Dialog>
            </Link>
          </Badge>
          <Link to="/UserAccount" style={{ "textDecoration": "inherit" }}>
            <Badge badgeContent={state.wishList.length} color="secondary">
              <FavoriteIcon style={{ "marginLeft": "20px" }} />
            </Badge>
          </Link>
          <Link to="/storeManager" style={{ "textDecoration": "inherit" }}>
            <Button style={{ "textDecoration": "inherit" }}  >Store Manager</Button>
          </Link>
          {!isLoading && !user && (
            <>
              <Button variant="contained" color="primary" onClick={loginWithRedirect}>
                Login
          </Button>
            </>

          )}
          {!isLoading && user && (

            <>
              {/* {checkUser(user.email)} */}
              <Typography color="textprimary">
                Hello, {user.name}!
              </Typography>
              <Button variant="contained" color="primary" onClick={logout}>
                Logout
          </Button>
              {/* {checkUser(user.email)} */}
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
