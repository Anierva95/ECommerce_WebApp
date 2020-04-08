import React from 'react';
import ManageProductRows from '../components/ManageProductsRows';
import { Grid } from '@material-ui/core';


export default function ManageItemsPage() {
    return(
            <Grid item container direction="row" xs={12}>
            <ManageProductRows/>
            </Grid>
    )
}