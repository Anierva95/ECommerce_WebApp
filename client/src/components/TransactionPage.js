import React from 'react'
import Paper from '@material-ui/core/Paper';
import { Link } from '@material-ui/core';


export default function TransactionPage(props) {
    console.log(props);
    return (
        <Paper >
            {/* className={classes.paper} */}
            <h1>Transaction Page</h1>
            {/* <h1>{currentUserInfo.id}</h1><br />
            <h1>{currentUserInfo.email}</h1> */}
            {props.transactions.map(el => (
                <>
                    <p>Transaction: <Link>{el.transactionID.slice(4, el.transactionID.length)}</Link></p>
                </>
            )
            )}
        </Paper>
    )
}
