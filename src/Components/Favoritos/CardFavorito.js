import React from 'react'
import { Link } from 'react-router-dom'
import { useStoreContext } from '../../Context/Store'

const CardFavorito = ({ favoritos }) => {
    const { setItem, deleteFavorito } = useStoreContext()
    return (
        favoritos.map(f => (
            <div className="card mb-3 container" key={f.id} >
                <div className="row g-0">
                    <Link to={'/item'} onClick={() => setItem(f)} className="col-md-4 m-auto " >
                        <img src={f.img} className="img-fluid rounded-start position-relative top-0 start-0 mt-3 mt-md-0" width={100} alt="..." />
                    </Link>
                    <div className="col-md-8">
                        <Link to={'/item'} onClick={() => setItem(f)} className="card-body text-decoration-none text-dark">
                            <h5 className="card-title text-start">{f.product_title}  </h5>
                            <p className="card-text text-start">{f.description} </p>
                            <p className="card-text text-start">${f.price} </p>
                        </Link>
                        <p className="card-text text-start" onClick={() => deleteFavorito(f.id)}><small className="text-muted">Eliminar</small></p>
                    </div>
                </div>
            </div>
        ))
    )
}

export default CardFavorito