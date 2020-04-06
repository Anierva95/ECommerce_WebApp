import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Grid, Link } from '@material-ui/core';
import UserAccountHeader from '../components/UserAccountHeader';
import { useStoreContext } from "../utils/GlobalState";
import API from '../utils/API';
import { useAuth0 } from '../utils/auth0context';


export default function UserAccount() {

  const [state, dispatch] = useStoreContext();

  const currentUserInfo = state.currentUser
  const userTrans = state.currentUser.transactions.items
  console.log(userTrans);

  return (

    <div>
      <Navbar />
      <UserAccountHeader />
      <h1>{currentUserInfo.id}</h1><br />
      <h1>{currentUserInfo.email}</h1>
      {currentUserInfo.transactions.map(el => (
        <>
          <p>Transaction: <Link>{el.transactionID.slice(4, el.transactionID.length)}</Link></p>
        </>
      )
      )}
      <Grid container direction="row">
        <Grid item xs={2} />
        <Grid item container direction="row" xs={8}>
          <Grid item xs={2} />
        </Grid>
      </Grid>
    </div>
  )
}