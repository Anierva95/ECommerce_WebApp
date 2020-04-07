import React from 'react';
import { useStoreContext } from "../utils/GlobalState";

export default function WishlistPage(props) {
    const [state, dispatch] = useStoreContext();

    console.log("state in wishlist", state);
    return(
        <>
        <h1>My Wishlist Page</h1>
        {state.wishList.map(wishListItem => {
            return(
            <>
            <p>{wishListItem.id}</p>
            <p>{wishListItem.Item}</p>
            <p>{wishListItem.Description}</p>
            <p>{wishListItem.Price}</p>
            </>
        )})}
        </>

    )
}