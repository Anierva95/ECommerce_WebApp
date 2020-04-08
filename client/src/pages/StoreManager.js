import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import StoreManagerHeader from '../components/StoreManagerHeader';
import AddProductForm from '../components/addProductForm';
import AddBlogForm from '../components/addBlogForm'
import { Grid } from '@material-ui/core';
import ManageProductRows from '../components/ManageProductsRows'
import UserAccountHeader from '../components/UserAccountHeader';
import { useStoreContext } from "../utils/GlobalState";
import NestedList from '../components/List';
import Paper from '@material-ui/core/Paper';
import AccountDetails from '../components/AccountDetails';
import TransactionPage from '../components/TransactionPage';
import WishlistPage from '../components/WishlistPage';



export default function StoreManager() {


    const [state, dispatch] = useStoreContext();
    const [page, setPage] = useState("Account")

    const handlePageChange = page => {
      setPage(page)
    };

    const renderPage = page => {
        switch(page) {
          case "Account": {
          return <AccountDetails user={state.currentUser}/>
          }
          case "Transactions": {
            return <TransactionPage user={state.currentUser}/>
          }
          case "Wishlist": {
            return <WishlistPage/>
          }
        }
      }

 


    return (
        // <>
        //     <Navbar />


        //     <Grid container direction="row">
        //     <Grid item xs={2}></Grid>
        //     <AddProductForm />
        //     <Grid item xs={2}></Grid>
        //     <AddBlogForm/>
        //     </Grid>

        //     <Grid container direction="row">
        //     <Grid item xs={2} />
        //     <Grid item container direction="row" xs={8}>
        //     <ManageProductRows/>
        //     </Grid>
        //     <Grid item xs={2} />
        //     </Grid>
            


        // </>

        <div>
        <Navbar />
        <StoreManagerHeader />
        <Grid container direction="row" spacing={3}>
        <Grid item xs={3}>
            <NestedList
            page={page}
            handlePageChange={handlePageChange}
            />
        </Grid>
        <Grid item xs={8}>
            <Paper>
            <>
            {renderPage(page)}
            </>
            </Paper>
        </Grid>
        <Grid item xs={1}></Grid>
        </Grid>
        </div>
    );
}