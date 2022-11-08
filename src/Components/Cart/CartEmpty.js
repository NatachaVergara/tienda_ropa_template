import React from 'react'
import { Link } from 'react-router-dom'
import imgCarrito from '../../assets/img/carrito1.jpg'


const CartEmpty = () => {
    return (
        <div className='cartImg row'>
            <div className='col-12 col-lg-4 mt-5 pt-5 me-5'>
                <h2 className='mb-5'>Carrito vacío</h2>
                <Link to='/shop' className='btn btn-outline-success '>Comprar</Link>
            </div>
            <img alt='carrito' src={imgCarrito} className='col-8 col-lg-8 ms-5' />
        </div>
    )
}

export default CartEmpty