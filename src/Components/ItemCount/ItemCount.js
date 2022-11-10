import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Itemquantity = ({ stock, initial, onAdd, to }) => {
    const [quantity, setquantity] = useState(initial);

    const increase = () => {
        quantity < stock && setquantity(quantity + 1)
       
    }

    const decrease = () => {
        quantity >= initial && setquantity(quantity - 1)
      
    }


    return (

        <div className="container text-center ">
            <div className="mb-3 d-flex flex-row justify-content-center align-items-center">
                <button
                    type="button"
                    className="btn btn-success btn-sm"
                    onClick={increase} disabled={quantity === stock} >+</button>
                <h3 className="mx-2">{stock === 0 ? '0' : quantity}</h3>
                <button
                    type="button"
                    className="btn btn-success btn-sm"
                    onClick={decrease}
                    disabled={quantity === 0} >-</button>

            </div>
            <p>
                {stock === 0 ? 'No hay stock' : `stock: ${stock - quantity}`} </p>
            <div className={`row `}>
                <button
                    type="button"
                    className="btn btn-outline-success col-12 col-md-5 my-1 m-md-auto"
                    onClick={() => onAdd(quantity)}
                    disabled={quantity === 0 || stock === 0}>Agregar al carrito </button>
                <Link to={to}
                    type="button"
                    className="btn btn-outline-warning col-12 col-md-5 my-1 m-md-auto">Volver al catálogo
                </Link>               
            </div>
        </div>


    )
}

export default Itemquantity