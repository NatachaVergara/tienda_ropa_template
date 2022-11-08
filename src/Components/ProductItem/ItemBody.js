import React from 'react'
import { Link } from 'react-router-dom'

import ItemCount from '../ItemCount.js/ItemCount'

const ItemBody = ({ item, addItem }) => {

    const onAdd = (quantity) => {
        addItem(item, quantity)
    }


    return (
        <div className="col-lg-7 mt-5">
            <div className="card ">
                <div className="card-body ">
                    <h1 className="h2 ">{item.product_title} </h1>
                    <p className="h3 py-2">${item.price}</p>
                    <p className="py-2 ">
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star text-secondary"></i>
                        <span className="list-inline-item text-dark">Rating 4.8 | 36 comentarios</span>
                    </p>
                    <ul className="list-inline">
                        <h3 className="list-inline-item fs-6">Marca:</h3>
                        <li className="list-inline-item">
                            <p className="text-muted"><strong>{item.brand}</strong></p>
                        </li>
                    </ul>

                    <h6>Descripción:</h6>
                    <p>{item.description} </p>
                    <ul className="list-inline">
                        <h3 className="list-inline-item fs-6">Color disponible:</h3>
                        {item.available_color.map((c, i) =>
                        (<li key={i} className="list-inline-item">
                            <p className="text-ligth btn btn-outline-success"><strong>{c}  </strong></p>
                        </li>)
                        )}
                    </ul>

                    <h6>Especificaciones:</h6>
                    <ul className="list-unstyled pb-3 ">
                        {item.specification.map((s, i) => (
                            <li key={i}>{s} </li>
                        ))}
                    </ul>



                    <div className="row ">
                        {item.size.length > 0 && <div className="col-auto size">
                            <ul className="list-inline pb-3">
                                <h3 className="list-inline-item fs-6">Talle:</h3>
                                {item.size.length >= 1 && item.size.map((s, i) => (
                                    <li key={i} className="list-inline-item"><span className="btn btn-outline-success btn-size">{s} </span></li>
                                ))}
                            </ul>
                        </div>}
                        <ItemCount
                            stock={item.stock}
                            initial={1}
                            onAdd={onAdd}
                            to='/shop'
                        />
                        <Link to='/cart' className='btn btn-outline-danger col-4 mx-auto my-2'  >Ver carrito</Link>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default ItemBody