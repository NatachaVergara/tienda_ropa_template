import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    const increase = () => {
        count < stock && setCount(count + 1)
    }

    const decrease = () => {
        count >= initial && setCount(count - 1)
    }


    return (

        <div className="container text-center ">
            <div className="mb-3 d-flex flex-row justify-content-center align-items-center">
                <button
                    type="button"
                    className="btn btn-success btn-sm"
                    onClick={increase} disabled={count === stock} >+</button>
                <h3 className="mx-2">{stock === 0 ? '0' : count}</h3>
                <button
                    type="button"
                    className="btn btn-success btn-sm"
                    onClick={decrease}
                    disabled={count === 0} >-</button>

            </div>
            <p>
                {stock === 0 ? 'No hay stock' : `stock: ${stock - count}`} </p>
            <div className='row'>
                <button
                    type="button"
                    className="btn btn-success col-12 col-md-5 m-auto"
                    onClick={() => onAdd(count)}
                    disabled={count === 0 || stock === 0}>Agregar al carrito </button>
                <Link to='/'
                    type="button"
                    className="btn btn-warning col-12 col-md-5 m-auto">Volver al catálogo
                </Link>
            </div>


        </div>


    )
}

export default ItemCount