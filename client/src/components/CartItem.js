import React from 'react';

const Item = props => {
    return (
        <div>
            <h1>{props.Item}</h1>
            <p>{props.Description}</p>
            <p>{props.Price}</p>
            <button>Remove</button>
        </div>





    )
}
export default Item;