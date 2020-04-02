import React from 'react';
import Item from './CartItem';
import CheckoutHeader from './CheckoutHeader'
import { useStoreContext } from "../utils/GlobalState";

const Cart = () => {

    const [state, dispatch] = useStoreContext();

    console.log(state.shoppingCart);
    const shoppingCart = state.shoppingCart;
    let subTotal = 0;
    let taxRate = 0.07;
    let taxTotal;
    let total;

    function taxAmount() {
        taxTotal = subTotal * taxRate
    }

    function totalAmount() {
        total = subTotal + taxTotal
    }

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
                        subTotal = subTotal + element.Quantity * element.Price.toFixed(2),
                        <CheckoutHeader
                            id={element._id}
                            item={element.Item}
                            type={element.Type}
                            quantity={element.Quantity}
                            price={element.Price}
                            total={element.Quantity * element.Price}
                        />
                    ))}
                    {taxAmount()}
                    {totalAmount()}
                    <hr></hr>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>Subtotal: </th>
                        <th>${subTotal.toFixed(2)}</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>Subtotal with Tax: </th>
                        <th>${taxTotal.toFixed(2)}</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>Total with Tax: </th>
                        <th>${total.toFixed(2)}</th>
                    </tr>
                </tbody>

            </table>
            <div className="checkout">
                <button>checkout</button>
            </div>
        </div>
    )
}

export default Cart