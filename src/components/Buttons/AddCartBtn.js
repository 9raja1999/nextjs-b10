'use client'

function AddCartBtn() {
    function addCart() {
        console.log("CART ADDED");
    }
    return (
        <button onClick={() => addCart()}>ADD TO CART</button>
    )
}

export default AddCartBtn