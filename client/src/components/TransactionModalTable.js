import React, { useState }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default function TransactionModalTable(props) {
    console.log(props)
    const useStyles = makeStyles({
        table: {
            minWidth: 700,
        },
    });
    const classes = useStyles();
    let subtotal = 0;
    let taxrate = 0.07;
    let tax = 0;
    let total = 0;

    function calculateTax () {
        tax = tax + (subtotal * taxrate)
    }
    
    function calculateTotal () {
        total = (total + (subtotal + tax))
    }
    

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="spanning table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" colSpan={3}>
                            Details of order#: {props.id.slice(4, props.id.length)}
            </TableCell>
                        <TableCell align="right">Price</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Desc</TableCell>
                        <TableCell align="right">Qty.</TableCell>
                        <TableCell align="right">Unit</TableCell>
                        <TableCell align="right">Sum</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.items.map(el => (
                        subtotal = subtotal + (el.Quantity * el.Price),
                        console.log(subtotal),
                        <TableRow key={el._id}>
                            <TableCell>{el.Item} (Item#: {el._id})</TableCell>
                            <TableCell align="right">{el.Quantity}</TableCell>
                            <TableCell align="right">$ {(el.Price).toFixed(2)}</TableCell>
                            <TableCell align="right">$ {(el.Quantity * el.Price).toFixed(2)}</TableCell>
                        </TableRow>
                    ))}
                    {calculateTax()}
                    {calculateTotal()}
                    <TableRow>
                        <TableCell rowSpan={3} />
                        <TableCell colSpan={2}>Subtotal</TableCell>
                        <TableCell align="right">$ {subtotal.toFixed(2)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Tax</TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right">$ {tax.toFixed(2)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2}>Total</TableCell>
                        <TableCell align="right">$ {total.toFixed(2)}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}