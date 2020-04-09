import React from 'react';
import Navbar from '../components/Navbar';
import SalesHeader from '../components/SalesHeader'
import ProductRow from '../components/ProductRow'
import { Grid } from '@material-ui/core';
import LiveChat from 'react-livechat'
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../components/Footer'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: "#eeeeee",
    // border: '2px solid #000',
    // boxShadow: theme.shadows[5],
    // justifyContent: 'center',
    // alignItems: 'center',
    // textAlign: "center",
    // padding: theme.spacing(2, 4, 3),
    // width: "500px"
  },
}));

export default function Home(){

  const classes = useStyles();

    return(
       <div className={classes.paper}>
          <Navbar/>

          <SalesHeader/>


          <Grid container direction="row">
          <Grid item xs={2} />
          <Grid item container direction="row" xs={8}>
          <ProductRow/>
          </Grid>
          <Grid item xs={2} />
          <LiveChat license={11844840}/>
          <Footer/>
          </Grid>

        </div>
    )}