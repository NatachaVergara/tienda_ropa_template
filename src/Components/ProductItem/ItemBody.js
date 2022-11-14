import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'


const ItemBody = ({ item, addItem, cartItems }) => {
    const [selected, setSelected] = useState(false)
    // console.log(selected)

    useEffect(() => {
        //Permite desactivar el boton agregar al carrito si ya existe en la lista
        const inCart = (item) => {
            // console.log(cartItems)
            let inCartList = cartItems.find(i => i.id === item.id);
            inCartList ? setSelected(true) : setSelected(false)
        }

        inCart(item)

    }, [cartItems, item])




    const onAdd = (quantity) => {
        addItem(item, quantity)
        Swal.fire('Producto agregado')
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
                    {item.available_color.length > 0 &&
                        <select name='color' aria-label="Default select example" onChange={(e) => { }} className='m-3 border'>
                            <option defaultValue className="w-50">Elegir Color</option>
                            {item.available_color.map(i => (
                                <option key={i} value={i}>{i} </option>
                            ))}
                        </select>
                    }
                       {item.size.length > 0 &&
                            <div className="col-12 size">
                                <select name='talle' aria-label="Default select example" onChange={(e) => { }} className='m-3 border'>
                                    <option defaultValue className="w-50">Elegir Talle</option>
                                    {item.size.map(i => (
                                        <option key={i} value={i}>{i}</option>
                                    ))}
                                </select>                           
                            </div>
                        }


                    <h6>Especificaciones:</h6>
                    <ul className="list-unstyled pb-3 ">
                        {item.specification.map((s, i) => (
                            <li key={i}>{s} </li>
                        ))}
                    </ul>



                    <div className="row ">                     
                        <div className='col-12 d-flex flex-column flex-md-row justify-content-center align-items-center'>
                            {selected ?
                                <button disabled={selected} className='btn btn-success w-50 w-md-25 m-3'>Ya se encuentra en carrito </button>
                                :
                                <button disabled={selected} onClick={() => onAdd(1)} className='btn btn-success w-100 m-3 w-md-25'>Agregar a carrito </button>
                            }
                            <Link to='/shop' className='btn btn-outline-dark m-3 w-50' title='Seguir comprando'>Tienda</Link>
                            <Link to='/cart' className='btn btn-outline-danger m-3 w-50' title='Ir al carrito'>Carrito</Link>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default ItemBody