import React from 'react';
import Navbar from '../components/Navbar';
import StoreManagerHeader from '../components/StoreManagerHeader';
import AddProductForm from '../components/addProductForm';
import AddBlogForm from '../components/addBlogForm'
import { Grid } from '@material-ui/core';
import ManageProductRows from '../components/ManageProductsRows'



export default function StoreManager() {

 


    return (
        <>
            <Navbar />
            <StoreManagerHeader />

            <Grid container direction="row">
            <Grid item xs={2}></Grid>
            <AddProductForm />
            <Grid item xs={2}></Grid>
            <AddBlogForm/>
            </Grid>

            <Grid container direction="row">
            <Grid item xs={2} />
            <Grid item container direction="row" xs={8}>
            <ManageProductRows/>
            </Grid>
            <Grid item xs={2} />
            </Grid>
            


        </>
    );
}