import React from 'react';
import Navbar from '../components/Navbar';
import StoreManagerHeader from '../components/StoreManagerHeader';
import AddProductForm from '../components/addProductForm';
import AddBlogForm from '../components/addBlogForm'
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';


export default function StoreManager() {

 
var myWidget = window.cloudinary.createUploadWidget({
  cloudName: 'diadpow6d', 
  uploadPreset: 'h6i1uchv'}, (error, result) => { 
    if (!error && result && result.event === "success") { 
      console.log('Done! Here is the image info: ', result.info); 
    }
  }
)

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
            <Button id="upload_widget" class="cloudinary-button" onClick={() => myWidget.open()}>Upload files</Button>

        </>
    );
}