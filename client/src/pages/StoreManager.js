import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import StoreManagerHeader from '../components/StoreManagerHeader';
import { Grid } from '@material-ui/core';
import ManageProductRows from '../components/ManageProductsRows'
import { useStoreContext } from "../utils/GlobalState";
import Paper from '@material-ui/core/Paper';
import StoreManagerList from '../components/StoreManagerList';
import AddItemPage from '../components/AddItemPage'
import AddBlogPage from '../components/AddBlogPage'
import ManageItemsPage from '../components/ManageItemsPage'
import ManageBlogPostsPage from '../components/ManageBlogPostsPage'



export default function StoreManager() {


    const [state, dispatch] = useStoreContext();
    const [page, setPage] = useState("AddItem")

    const handlePageChange = page => {
      setPage(page)
    };

    const renderPage = page => {
        console.log(page);
        switch(page) {
          case "AddItem": {
          return <AddItemPage user={state.currentUser}/>
          }
          case "AddBlog": {
            return <AddBlogPage user={state.currentUser}/>
          }
          case "ManageItems": {
            return <ManageItemsPage/>
          }
          case "ManageBlogs": {
            return <ManageBlogPostsPage/>
          }
        }
      }

    return (


        <div>
        <Navbar />
        <Paper>
        <StoreManagerHeader />
        <Grid container direction="row" spacing={3}>
        <Grid item xs={3}>
            <StoreManagerList
            page={page}
            handlePageChange={handlePageChange}
            />
        </Grid>
        <Grid item xs={8}>
            
            <>
            {renderPage(page)}
            </>

        </Grid>
        <Grid item xs={1}></Grid>
        </Grid>
        </Paper>
        </div>
    );
}