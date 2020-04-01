import React from 'react';

import Item from './CartItem';

const Cart = props => {
    const totalAmount = () => {
        return props.cart.reduce((tot, val)=>{
            return tot + val.price;
        },0)
    }
    return(
        <div className="shoppingCart">
            {props.cart.map(item => (
                <Item key={item.id} {...item}/>
            ))}
            <div className="checkout">
            <p>Total:${totalAmount}</p>
            <button>checkout</button>
            </div>
        </div>



    )




}

export default Cart