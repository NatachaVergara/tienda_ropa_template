import React from 'react'

const ItemBody = () => {
    return (
        <div className="col-lg-7 mt-5">
            <div className="card ">
                <div className="card-body ">
                    <h1 className="h2 ">Active Wear</h1>
                    <p className="h3 py-2">$25.00</p>
                    <p className="py-2 ">
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star text-secondary"></i>
                        <span className="list-inline-item text-dark">Rating 4.8 | 36 comentarios</span>
                    </p>
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <h6>Marca:</h6>
                        </li>
                        <li className="list-inline-item">
                            <p className="text-muted"><strong>Easy Wear</strong></p>
                        </li>
                    </ul>

                    <h6>Descripción:</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse. Donec condimentum elementum convallis. Nunc sed orci a diam ultrices aliquet interdum quis nulla.</p>
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <h6>Avaliable Color :</h6>
                        </li>
                        <li className="list-inline-item">
                            <p className="text-muted"><strong>Blanco / Negro</strong></p>
                        </li>
                    </ul>

                    <h6>Especificaciones:</h6>
                    <ul className="list-unstyled pb-3 ">
                        <li>Lorem ipsum dolor sit</li>
                        <li>Amet, consectetur</li>
                        <li>Adipiscing elit,set</li>
                        <li>Duis aute irure</li>
                        <li>Ut enim ad minim</li>
                        <li>Dolore magna aliqua</li>
                        <li>Excepteur sint</li>
                    </ul>



                    <div className="row ">
                        <div className="col-auto size">
                            <ul className="list-inline pb-3">
                                <li className="list-inline-item">Tamaño :
                                    <input type="hidden" name="product-size" id="product-size" value="S" />
                                </li>
                                <li className="list-inline-item"><span className="btn btn-success btn-size">S</span></li>
                                <li className="list-inline-item"><span className="btn btn-success btn-size">M</span></li>
                                <li className="list-inline-item"><span className="btn btn-success btn-size">L</span></li>
                                <li className="list-inline-item"><span className="btn btn-success btn-size">XL</span></li>
                            </ul>
                        </div>
                        <div className="col-auto quantity" >
                            <ul className="list-inline pb-3">
                                <li className="list-inline-item text-right">
                                    Cantidad
                                    <input type="hidden" name="product-quanity" id="product-quanity" value="1" />
                                </li>
                                <li className="list-inline-item"><span className="btn btn-success" id="btn-minus">-</span></li>
                                <li className="list-inline-item"><span className="badge bg-secondary" id="var-value">1</span></li>
                                <li className="list-inline-item"><span className="btn btn-success" id="btn-plus">+</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row pb-3 buttons">                       
                        <div className="col-12 col-md-4 m-auto d-grid">
                            <button type="submit" className="btn btn-success btn-lg" name="submit" value="addtocard">Agregar a carrito</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ItemBody