import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Grid, Link } from '@material-ui/core';
import UserAccountHeader from '../components/UserAccountHeader';
import { useStoreContext } from "../utils/GlobalState";
import API from '../utils/API';
import { useAuth0 } from '../utils/auth0context';
import NestedList from '../components/List';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AccountDetails from '../components/AccountDetails';
import TransactionPage from '../components/TransactionPage';

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

export default function UserAccount() {
  // const classes = useStyles();
  const [state, dispatch] = useStoreContext();
  const [page, setPage] = useState("Account")
  console.log("currentPage is: ",page);
  const handlePageChange = page => {
    setPage(page)
  };

  const renderPage = page => {
    if (page === "Account") {
      return <AccountDetails />
    } else if (page === "Transactions") {
      return <TransactionPage />
    }
  }

  // const currentUserInfo = state.currentUser
  const userTrans = state.currentUser.transactions.items
  // console.log(userTrans);

  return (
    
    <div>
      <Navbar />
      <UserAccountHeader />
      <Grid container direction="row" spacing={3}>
        <Grid item xs={3}>
          <NestedList
            handlePageChange={handlePageChange}
          />
        </Grid>
        <Grid item xs={9}>
          <Paper>
            {page === "Account"
              ? <AccountDetails />
              : <TransactionPage transactions={state.currentUser.transactions}/>}
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

{/* <h1>{currentUserInfo.id}</h1><br />
            <h1>{currentUserInfo.email}</h1>
            {currentUserInfo.transactions.map(el => (
                <>
                    <p>Transaction: <Link>{el.transactionID.slice(4, el.transactionID.length)}</Link></p>
                </>
            )
            )} */}

{/* <Grid container direction="column">
        <NestedList />
      </Grid>
      <Grid container direction="column"></Grid> */}
{/* <Grid container direction="row">
        <Grid item xs={2} />
        <Grid item container direction="row" xs={8}>
          <Grid item xs={2} />
        </Grid>
      </Grid> */}


