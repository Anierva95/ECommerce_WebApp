import React from 'react';
import MediaCard from '../components/Card';
import { Grid } from '@material-ui/core';


export default function ProductRow() {
    return(
    <div>
<Grid container direction="row">
<Grid item xs={2}></Grid>
  <Grid item={true} xs={2}>
    <MediaCard/>
    </Grid>
    <Grid item xs={2}>
    <MediaCard/>
    </Grid>
    <Grid item xs={2}>
    <MediaCard/>
    </Grid>
    <Grid item xs={2}>
    <MediaCard/>
    </Grid>
  </Grid>      
<Grid item xs={2}></Grid>
    </div>
    )
}