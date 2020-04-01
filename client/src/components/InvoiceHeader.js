import React from 'react';
import { Grid } from '@material-ui/core';

export default function InvoiceHeader() {
    return(
        <Grid item xs={12}><h1 style={{"textAlign" : "center"}}>Invoice</h1></Grid>
    )
}