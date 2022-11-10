import React from 'react'


const ItemsSm = ({ item, cartItemDelete, addFavoritos, }) => {
    
   


    return (
                
                <div className="card my-2 w-100" key={item.id}>
                    <p className="card-text">ID: {item.id} </p>

                    <img src={item.img} className="card-img-top mx-auto my-2 border border-opacity-50" alt={item.img_alt} style={{ width: "9rem" }} />
                    <div className="card-body">
                        <h5 className="card-title">{item.product_title} </h5>
                        <p className="card-text">{item.description} </p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Color: Marron</li>
                        <li className="list-group-item">Talle: xl</li>
                        <li className="list-group-item"> Precio: $ {item.price}
                        </li>
                        {/* <li className="list-group-item"></li> */}
                        <li className="list-group-item"> Cantidad:  
                         {item.quantity} - Subtotal: $ {item.price * item.quantity}</li>
                    </ul>
                    <div className="card-body">
                        <button className='btn btn-success' onClick={() => addFavoritos(item)}>
                            <box-icon name='heart' size='sm' animation='tada-hover'></box-icon>
                        </button>
                        <button className='btn btn-danger m-1' onClick={() => cartItemDelete(item.id)}>
                            <box-icon type='solid' name='trash' size='sm' animation='burst-hover'></box-icon>
                        </button>

                    </div>
                </div>

    )
}

export default ItemsSm