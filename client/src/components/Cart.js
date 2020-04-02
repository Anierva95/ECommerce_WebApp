import React from 'react';
import Item from './CartItem';
import CheckoutHeader from './CheckoutHeader'
import { useStoreContext } from "../utils/GlobalState";

const Cart = props => {

    const [state, dispatch] = useStoreContext();
    // console.log(state);

    const totalAmount = () => {
        return props.cart.reduce((tot, val) => {
            return tot + val.price;
        }, 0)
    }

    console.log(state.shoppingCart);
    const shoppingCart = state.shoppingCart;
    const subTotal = 0;

    return (
        <div className="shoppingCart">
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Item Total</th>
                    </tr>
                </thead>
                <tbody>
                    {shoppingCart.map(element => (
                        <CheckoutHeader
                            id={element._id}
                            item={element.Item}
                            type={element.Type}
                            quantity={element.Quantity}
                            price={element.Price}
                            total={element.Quantity * element.Price}
                        />
                    ))}
                </tbody>
                <hr></hr>
                <tr>
                    <th></th>
                    <th></th>
                    {/* {shoppingCart.forEach(element => {
                        {subTotal = subTotal + (element.Price * element.Quantity)}
                    })} */}
                    <th>Subtotal: </th>
                </tr>
            </table>
            {/* {props.cart.map(item => (
                <Item key={item.id} {...item}/>
            ))} */}
            <div className="checkout">
                <p>Total:$</p>
                <button>checkout</button>
            </div>
        </div>



    )




}

export default Cart