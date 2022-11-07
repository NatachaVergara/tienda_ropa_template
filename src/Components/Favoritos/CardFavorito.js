import React from 'react'
import { Link } from 'react-router-dom'
import { useStoreContext } from '../../Context/Store'

const CardFavorito = ({ favoritos }) => {
    const { setItem, deleteFavorito } = useStoreContext()
  
    const enCuotas = (e)=>{
        let division = e / 6;
        return division.toFixed(2)
    }


    return (
        favoritos.map(f => (
            <div className="card mb-3 container cardFavorito" key={f.id} >
                <div className="row g-0">
                    <Link to={'/item'} onClick={() => setItem(f)} className="col-md-4 m-auto " >
                        <img src={f.img} className="img-fluid rounded position-relative top-0 start-0 mt-3 mt-md-0" width={100} alt="..." />
                    </Link>
                    <div className="col-md-8 row">
                        <Link to={'/item'} onClick={() => setItem(f)} className="card-body text-decoration-none text-dark col-12">
                            <h5 className="card-title text-start">{f.product_title}  </h5>
                            <p className="card-text text-start">{f.description} </p>
                            <p className="card-text text-start">${f.price}</p>
                            <p className="card-text text-start">6 cuotas sin interés de: ${enCuotas(f.price)} </p>
                        </Link>
                        <p className="card-text text-start col-12 m-2 btn-delete-fav" onClick={() => deleteFavorito(f.id)}><small className="text-dark ">Eliminar</small></p>
                    </div>
                    
                </div>
            </div>
        ))
    )
}

export default CardFavorito