import React, {useRef} from 'react';
import Navbar from '../components/Navbar';
import InvoiceHeader from '../components/InvoiceHeader';
import API from '../utils/API';

export default function Invoice() {

    const itemRef = useRef();
    const priceRef = useRef();
    const typeRef = useRef();
    const descriptionRef = useRef();
    const quantityRef = useRef();
    const genderRef = useRef();



    function AddItem() {
        API.saveProduct({
            Item: itemRef.current.value,
            Type: typeRef.current.value,
            Description: descriptionRef.current.value,
            Price: priceRef.current.value,
            Quanitity: quantityRef.current.value,
            Gender: genderRef.current.value
        }).then(res => console.log("passed through!!! burkeep"))
    }
    

    return (
        <>
            <Navbar />
            <InvoiceHeader />
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