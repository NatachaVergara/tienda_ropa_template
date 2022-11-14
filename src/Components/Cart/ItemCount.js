import React, { useState } from 'react'


const ItemCount = ({ initial, stock, item, cartItems, setCartItems }) => {
    const [quantity, setquantity] = useState(initial);

    let inCartList = cartItems.find(i => i.id === item.id);

    const increase = () => {
        quantity < stock && setquantity(quantity + 1)
        if (inCartList) {
            inCartList.quantity = quantity + 1
            setCartItems([...cartItems])
        }
    }

    const decrease = () => {
        quantity >= initial && setquantity(quantity - 1)
        if (inCartList) {
            inCartList.quantity = quantity - 1
            setCartItems([...cartItems])
        }
    }



    return (
        <div className='d-flex flex-column'>
            <div className="mb-3 d-flex flex-row justify-content-start align-items-center">
                <button
                    type="button"
                    className="btn btn-success btn-sm"
                    onClick={increase} disabled={quantity === stock} >+</button>
                <h3 className="mx-2 fs-6">{stock === 0 ? '0' : quantity}</h3>
                <button
                    type="button"
                    className="btn btn-success btn-sm"
                    onClick={decrease}
                    disabled={quantity === 1} >-</button>
            </div>
            <p className='d-flex justify-content-start mt-1 fs-6'>Stock {stock - quantity} </p>
        </div>
    )
}

export default ItemCount