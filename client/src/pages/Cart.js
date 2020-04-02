import React from 'react';
import Navbar from '../components/Navbar';
import Cart from '../components/Cart'
// import Cart from '../components/Cart';
// import CartItem from '../components/CartItem'
// import React, { useState, data } from 'react';

export default function shoppingCart() {
    // const [products] = useState(data);
    // const [cart, setCart] = useState([]);

    // const addItem = item => {
    // 	// add the given item to the cart
    // };
    return (
        <div>
            <Navbar />
            <Cart />
        </div>
    )
}