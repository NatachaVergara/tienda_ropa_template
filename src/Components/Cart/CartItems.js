import React from 'react'

import ItemsMd from './ItemsMd'
import ItemsSm from './ItemsSm'


const CartItems = ({ cartItems, cartItemDelete, addFavoritos, setItem }) => {

  return (
    <div>
      <div className='d-none d-lg-flex flex-lg-column'>
        <ItemsMd
          cartItems={cartItems}
          cartItemDelete={cartItemDelete}
          addFavoritos={addFavoritos}
          setItem={setItem}
        />
      </div>
      <div className='d-flex d-lg-none flex-column justify-content-center align-items-center' >
        <ItemsSm
          cartItems={cartItems}
          cartItemDelete={cartItemDelete}
          addFavoritos={addFavoritos}
          setItem={setItem}
        />
      </div>

    </div>
  )
}

export default CartItems