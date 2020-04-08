import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TransactionModal from '../components/TransactionModal';
import ListItemText from '@material-ui/core/ListItemText';

export default function AccountDetails(props) {
    console.log(props)
    return (
        <Grid>
            {props.user.id ?
                <>
                    <h2>Account Details Page</h2>
                    <List>
                        <ListItemText>Account Email: {props.user.email}</ListItemText>
                    </List>
                </>
                : <h1>Please login to see your account details.</h1>}
        </Grid>
    )
}