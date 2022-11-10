import React from 'react'

const ItemsSm = ({ cartItems, cartItemDelete, addFavoritos, setItem }) => {
    return (
        <>
            {cartItems && cartItems.map(i => (
                <div className="card my-2 w-100" >
                    <p className="card-text">ID: {i.id} </p>

                    <img src={i.img} className="card-img-top mx-auto my-2 border border-opacity-50" alt={i.img_alt} style={{ width: "9rem" }} />
                    <div className="card-body">
                        <h5 className="card-title">{i.product_title} </h5>
                        <p className="card-text">{i.description} </p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Cantidad: {i.quantity}</li>
                        <li className="list-group-item">Precio: $ {i.price}</li>
                        <li className="list-group-item">Subtotal: A $ {i.price * i.quantity}</li>
                    </ul>
                    <div className="card-body">
                        <button className='btn btn-success' onClick={() => addFavoritos(i)}>
                            <box-icon name='heart' size='sm' animation='tada-hover'></box-icon>
                        </button>
                        <button className='btn btn-danger m-1' onClick={() => cartItemDelete(i.id)}>
                            <box-icon type='solid' name='trash' size='sm' animation='burst-hover'></box-icon>
                        </button>

                    </div>
                </div>

            ))}

        </>
    )
}

export default ItemsSm