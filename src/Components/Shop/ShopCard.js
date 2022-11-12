import React from 'react'
import { Link } from 'react-router-dom'
import { useStoreContext } from '../../Context/Store'

const ShopCard = ({ obj, img, img_alt, price, brand, size }) => {
    const { setItem, addItem, addFavoritos } = useStoreContext()


    return (
        <div className="col-md-4">
            <div className="card mb-4 product-wap rounded-0">
                <div className="card rounded-0">
                    <img className="card-img rounded-0 img-fluid" alt={img_alt} src={img} />
                    <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                        <ul className="list-unstyled">
                            {/* estos son los campos donde uno puede poner acciones, like, add to card o mirar */}
                            <li onClick={() => addFavoritos(obj)} title='AGREGAR FAVORITOS'><span className="btn btn-success text-white" ><i className="far fa-heart"></i></span></li>
                            <li><Link to={'/item'} title='VER PRODUCTO' className="btn btn-success text-white mt-2" onClick={() => setItem(obj)} ><i className="far fa-eye"></i></Link></li>
                            <li><span className="btn btn-success text-white mt-2" title='AGREGAR A CARRITO' onClick={() => addItem(obj, 1)} ><i className="fas fa-cart-plus"></i></span></li>
                        </ul>
                    </div>
                </div>
                <div className="card-body cardShopBody" style={{ height: 160 }}>
                    <a href="shop-single.html" className="h3 text-decoration-none">{brand} </a>
                    <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">

                        <li className='pt-2 d-flex justify-content-between'>
                            {size.map((b, i) => (
                                <span key={i} className='m-1'>{b}</span>
                            ))}
                        </li>
                        <li className="pt-2">
                            <span className="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                            <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                            <span className="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                            <span className="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                            <span className="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                        </li>
                    </ul>
                    <ul className="list-unstyled d-flex justify-content-center mb-1">
                        <li>
                            <i className="text-warning fa fa-star"></i>
                            <i className="text-warning fa fa-star"></i>
                            <i className="text-warning fa fa-star"></i>
                            <i className="text-muted fa fa-star"></i>
                            <i className="text-muted fa fa-star"></i>
                        </li>
                    </ul>
                    <p className="text-center mb-0">${price}</p>
                </div>
                <div className='d-flex flex-md-column flex-xl-row justify-content-around  align-items-center m-md-3'>
                    <Link to='/item' onClick={() => setItem(obj)} className='btn btn-outline-success mb-2'>Ver más...</Link>
                    <Link to='/cart' className='btn btn-outline-warning mb-2'>Ir al carrito</Link></div>

            </div>
        </div>
    )
}

export default ShopCard