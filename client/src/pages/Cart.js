import React from 'react';
import Navbar from '../components/Navbar';
import Cart from '../components/Cart';
import CartHeader from '../components/CartHeader';
import Paper from '@material-ui/core/Paper';
// import { CardHeader } from '@material-ui/core';

export default function shoppingCart() {

    return (
        <Paper>
            <Navbar />
            <CartHeader />
            <Cart />
        </Paper>
    )
}