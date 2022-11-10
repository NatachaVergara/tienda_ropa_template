import React from 'react'
import { Link } from 'react-router-dom'
const ItemsMd = ({ cartItems, cartItemDelete, addFavoritos, setItem }) => {
    return (
        <>
            {cartItems && cartItems.map(i => (
                <table key={i.id} className='table table-hover container '>
                    <thead>
                        <tr>
                            <th scope='col'>ID</th>
                            <th scope='col'>Producto</th>
                            <th scope='col'>Cantidad</th>
                            <th scope='col'>Precio</th>
                            <th scope='col'>Subtotal</th>
                            <th scope='col'>

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='table-active'>
                            <th className=''>{i.id} </th>
                            <Link to='/item' scope='row' className='text-decoration-none text-dark d-flex justify-content-center align-items-center' onClick={() => setItem(i)}>
                                <img src={i.img} alt={i.img_alt} style={{ maxWidth: 100, maxHeight: 100 }} />
                                <div className='text-start  ms-3 d-flex flex-column'>
                                    <span className='fs-6'> {i.product_title} </span>
                                    <span className='fs-6'>Color: Marron </span>
                                </div>
                            </Link>
                            <th>{i.quantity}  </th>
                            <th>$ {i.price}  </th>
                            <th>$ {i.price * i.quantity}</th>
                            <th className='col'>
                                <button className='btn btn-danger m-1' onClick={() => cartItemDelete(i.id)}>
                                    <box-icon type='solid' name='trash' size='sm' animation='burst-hover'></box-icon>
                                </button>
                                <button className='btn btn-success' onClick={() => addFavoritos(i)}>
                                    <box-icon name='heart' size='sm' animation='tada-hover'></box-icon>
                                </button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            ))}
        </>
    )
}

export default ItemsMd