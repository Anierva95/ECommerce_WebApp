import React, {useRef} from 'react';
import Navbar from '../components/Navbar';
import StoreManagerHeader from '../components/StoreManagerHeader';
import API from '../utils/API';
import AddProductForm from '../components/addProductForm';
import AddBlogForm from '../components/addBlogForm'
import { Grid } from '@material-ui/core';

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

        </>
    );
}