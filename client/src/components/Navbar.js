import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, useLocation } from "react-router-dom";
import { useAuth0 } from '../utils/auth0context';



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
            <Button style={{ "textDecoration": "inherit" }} color="secondary">Home</Button>
          </Link>
          <Link to="/blog" style={{ "textDecoration": "inherit" }}>
            <Button style={{ "textDecoration": "inherit" }} color="secondary" >Blog</Button>
          </Link>
          {/* <Link to="/cart" style={{ "textDecoration": "inherit" }}>
            Cart<span>{props.cart.length}</span>
          </Link> */}
          <Link to="/cart" style={{ "textDecoration": "inherit" }}>
          <Button style={{"textDecoration": "inherit"}} color="secondary" >Cart</Button>
          </Link>

          <Link to="/storeManager" style={{"textDecoration": "inherit"}}>
          <Button style={{"textDecoration": "inherit"}} color="secondary" >Store Manger</Button>
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
            <Typography color="textprimary">
            <p>Hello, {user.name}!     </p>
            </Typography>
              <Button variant="contained" color="primary" onClick={logout}>
                  Logout
          </Button>
              
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
