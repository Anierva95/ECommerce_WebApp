import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


export default function AccountDetails(props) {
    console.log(props)
    return (
        <Grid>
            { props.user.id ? <h1>Account Details Page</h1> 
            : <h1>Please login to see your account details.</h1>}
        </Grid>
    )
}