import React from 'react'
import Paper from '@material-ui/core/Paper';
import { Link } from '@material-ui/core';
import TransactionModal from '../components/TransactionModal';


export default function TransactionPage(props) {
    console.log(props);
    return (
        <Paper >
            {/* className={classes.paper} */}
            <h1>Transaction Page</h1>
            {props.transactions.map(el => (
                <>
                    <p>Date: {el.date}</p>
                    <TransactionModal elements={el}/>
                </>
            )
            )}
        </Paper>
    )
}
