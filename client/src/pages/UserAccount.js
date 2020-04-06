import React, {useContext} from 'react';
import Navbar from '../components/Navbar';
import { Grid } from '@material-ui/core';


export default function UserAccount(){
    return(
       <div>
          <Navbar/>

          <h1 style={{"textAlign": "center"}}>Here are your transactions</h1>


          <Grid container direction="row">
          <Grid item xs={2} />
          <Grid item container direction="row" xs={8}>
          <Grid item xs={2} />
          </Grid>
          </Grid>

        </div>
    )}