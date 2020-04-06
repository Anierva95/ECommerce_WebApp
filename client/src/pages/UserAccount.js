import React from 'react';
import Navbar from '../components/Navbar';
import { Grid } from '@material-ui/core';
import UserAccountHeader from '../components/UserAccountHeader'


export default function UserAccount(){
    return(
       <div>
          <Navbar/>
          <UserAccountHeader/>

          <Grid container direction="row">
          <Grid item xs={2} />
          <Grid item container direction="row" xs={8}>
          <Grid item xs={2} />
          </Grid>
          </Grid>

        </div>
    )}