import React, {useRef} from 'react';
import Navbar from '../components/Navbar';
import StoreManagerHeader from '../components/StoreManagerHeader';
import API from '../utils/API';

export default function StoreManager() {

    const itemRef = useRef();
    const priceRef = useRef();
    const typeRef = useRef();
    const descriptionRef = useRef();
    const quantityRef = useRef();
    const genderRef = useRef();



    function AddItem() {
        console.log(itemRef.current.value);
        console.log(priceRef.current.value);
        console.log(typeRef.current.value);
        console.log(descriptionRef.current.value);
        console.log(quantityRef.current.value);
        console.log(genderRef.current.value);
        API.saveProduct({
            Item: itemRef.current.value,
            Type: typeRef.current.value,
            Description: descriptionRef.current.value,
            Price: parseInt(priceRef.current.value),
            Quantity: parseInt(quantityRef.current.value),
            Gender: genderRef.current.value
        }).then(res => console.log("passed through!!! burkeep"))
    }
    

    return (
        <>
            <Navbar />
            <StoreManagerHeader />
            <form>
                Item
                <input name="Item" ref={itemRef}/>
                Price
                <input name="Price"ref={priceRef}/>
                Type
                <input name="Type" ref={typeRef}/>
                Description
                <input name="Description" ref={descriptionRef}/>
                Quanitity
                <input name="Quantity" ref={quantityRef}/>
                Gender
                <input name="Gender" ref={genderRef}/>
            </form>

            <button onClick={() => AddItem()}>
                Submit
            </button>

        </>
    );
}