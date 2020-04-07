import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Grid } from '@material-ui/core';
import UserAccountHeader from '../components/UserAccountHeader';
import { useStoreContext } from "../utils/GlobalState";
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
  // console.log("currentPage is: ",page);
  const handlePageChange = page => {
    setPage(page)
  };

  const renderPage = page => {
    if (page === "Account") {
      return <AccountDetails user={state.currentUser}/>
    } else if (page === "Transactions") {
      return <TransactionPage user={state.currentUser}/>
    }
  }

  return (
    
    <div>
      <Navbar />
      <UserAccountHeader />
      <Grid container direction="row" spacing={3}>
        <Grid item xs={3}>
          <NestedList
            page={page}
            handlePageChange={handlePageChange}
          />
        </Grid>
        <Grid item xs={8}>
          <>
            {renderPage(page)}
            {/* {page === "Account"
              ? <AccountDetails />
              : <TransactionPage transactions={state.currentUser.transactions}/>} */}
          </>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </div>
  )
}


