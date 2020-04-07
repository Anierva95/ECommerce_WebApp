import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TransactionModal from '../components/TransactionModal';
import ListItemText from '@material-ui/core/ListItemText';


export default function TransactionPage(props) {
    console.log(props);
    return (
        <Grid >
            {/* className={classes.paper} */}

            {props.user.id ? <h1>List of Transactions</h1>
                : <h1>Please login to see your transactions.</h1>}

            {props.user.transactions ? props.user.transactions.map(el => (
                <List>
                    <ListItem><TransactionModal elements={el} />
                        <ListItemText secondary={el.date}></ListItemText>
                    </ListItem>
                </List>
            )
            ) : <h2>You have not made any purchases.</h2>}
        </Grid>
    )
}
