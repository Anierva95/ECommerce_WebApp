import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TransactionModal from '../components/TransactionModal';
import ListItemText from '@material-ui/core/ListItemText';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';

export default function AccountDetails(props) {
    console.log(props)
    return (
        <Grid>
            {props.user.id ?
                <>
                    <TableContainer>
                        <Table>
                            <TableBody>
                                <TableCell><h2>Account Details Page</h2></TableCell>
                            </TableBody>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <ListItemText>First Name: Henry</ListItemText>
                                        <ListItemText>Last Name: Ni</ListItemText>
                                        <ListItemText>Account Email: {props.user.email}</ListItemText>
                                        <ListItemText>Shipping Address: 123 Main St</ListItemText>
                                        <ListItemText>City: Edison</ListItemText>
                                        <ListItemText>State: NJ</ListItemText>
                                        <ListItemText>Zip Code: 08820</ListItemText>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </>
                : <h1>Please login to see your account details.</h1>}
        </Grid>
    )
}