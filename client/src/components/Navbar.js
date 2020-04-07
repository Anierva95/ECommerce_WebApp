import React, { useEffect } from 'react';
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
              transactions: res.data.Transactions
            }
          }))
        } else {
          dispatch({
            type: "SET_USER",
            user: {
              id: isUser._id,
              email: isUser.Email,
              transactions: isUser.Transactions
            }
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
          <Link to="/" style={{ "textDecoration": "inherit" }}>
            <Button style={{ "textDecoration": "inherit" }} >Home</Button>
          </Link>
          <Link to="/UserAccount" style={{ "textDecoration": "inherit" }}>
          <Button style={{ "textDecoration": "inherit" }} >Account</Button>
          </Link>
          <Link to="/blog" style={{ "textDecoration": "inherit" }}>
            <Button style={{ "textDecoration": "inherit" }} >Blog</Button>
          </Link>
          {/* <Link to="/cart" style={{ "textDecoration": "inherit" }}>
            Cart<span>{props.cart.length}</span>
          </Link> */}
          <Badge badgeContent={state.shoppingCart.length} color="secondary">
          <Link to="/cart" style={{ "textDecoration": "inherit" }}>
          <ShoppingCartIcon style={{"textDecoration": "inherit"}} />
          </Link>
          </Badge>

          <Badge badgeContent={state.wishList.length} color="secondary">
          <FavoriteIcon style={{"marginLeft": "20px"}}/>
          </Badge>

          <Link to="/storeManager" style={{"textDecoration": "inherit"}}>
          <Button style={{"textDecoration": "inherit"}}  >Store Manager</Button>
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
