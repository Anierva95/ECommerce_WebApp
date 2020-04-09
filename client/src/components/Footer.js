import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import CssBaseline from "@material-ui/core/CssBaseline";
const useStyles1 = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
  },
}));
function ScrollTop(props) {
  const { children } = props;
  const classes = useStyles1();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    // target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });
  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };
  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}
ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
const themeee = createMuiTheme({
  palette: {
    primary: {
      main: "#f3e5f5"
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});
const useStyles = makeStyles((theme) => ({
  link: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
  root: {
    width: 12000,
    height: 300,
    backgroundColor: "#f3e5f5"
  },
  button: {
    position: 'absolute',
    zIndex: 1,
    top: -40,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));
export default function LabelBottomNavigation(props) {
  const classes = useStyles();
  // const [value, setValue] = React.useState('recents');
  // const handleChange = (event, newValue) => {
  //     setValue(newValue);
  // };
  const preventDefault = (event) => event.preventDefault();
  return (
    <BottomNavigation theme={themeee} bgcolor="primary" className={classes.root}>
      <CssBaseline />
      <Grid sm={12} xl={3}>
        <List>
          <ListItem>
            <Typography variant="h5" gutterBottom>
              Get To Know Us
        </Typography>
          </ListItem>
          {/* <Typography className={classes.link}> */}
            <ListItem>
              <Link href="#" onClick={preventDefault}>
                Anierva95@gmail.com
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#" onClick={preventDefault}>
                maxken512@gmail.com
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#" onClick={preventDefault}>
                ni.henry914@gmail.com
        </Link>
            </ListItem>
            <ListItem>
              <Link href="#" onClick={preventDefault}>
                zx70@scarletmail.rutgers.edu
              </Link>
            </ListItem>
          {/* </Typography> */}
        </List>
      </Grid>
      <Grid sm={12} xl={3}>
        <List>
          <ListItem>
            <Typography variant="h5" gutterBottom>
              Source Code
        </Typography>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/Anierva95/ECommerce_WebApp">
              https://github.com/Anierva95/ECommerce_WebApp
           </Link>
          </ListItem>
        </List>
      </Grid>
      <Grid sm={12} xl={3}>
        <List>
          <ListItem>
            <Typography variant="h5" gutterBottom>
              Let Us Help You
        </Typography>
          </ListItem>
          <ListItem>
          <Link href="/UserAccount" style={{ "textDecoration": "inherit" }}>
          Your Account
          </Link>
          </ListItem>
          <ListItem>
          <Link href="/storeManager" style={{"textDecoration": "inherit"}}>
           Manage Your Items
          </Link>
          </ListItem>
        </List>
      </Grid>
      <ScrollTop {...props}>
        <Fab color="secondary" size="large" aria-label="scroll back to top" className={classes.button}>
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </BottomNavigation>
  );
}