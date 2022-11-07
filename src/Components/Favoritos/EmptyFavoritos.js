import React from 'react'
import './favoritos.css'
import IMG from '../../assets/img/favEmpty2.jpg'
import { Link } from 'react-router-dom'
const EmptyFavoritos = () => {
    return (
        <div className='bgEmpty'>
            <h1 className='text-center mb-5'>En este momento no hay favoritos seleccionados</h1>
            <img src={IMG} />
            <div className=''>
                <Link to='/shop' className='text-decoration-none btn btn-outline-success mt-5'>Tienda</Link>
            </div>
        </div>
    )
}

export default EmptyFavoritos