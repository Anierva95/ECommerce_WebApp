import React from 'react'
import Navbar from '../components/Navbar';
import BlogHeader from '../components/BlogHeader'
import { Grid } from '@material-ui/core';

export default function Blog() {
    return(
        <div>
            <Navbar/>
            <BlogHeader/>
        <Grid container direction="row">
          <Grid item xs={2} />
          <Grid item container direction="row" xs={8}>
          
          <Grid item xs={2} />
          </Grid>
          </Grid>

        </div>
    )
}