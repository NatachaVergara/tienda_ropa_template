import React from 'react'
import ItemsMd from './ItemsMd'
import ItemsSm from './ItemsSm'


const CartItems = ({ cartItems, cartItemDelete, addFavoritos }) => {
  // const {addItem} = useStoreContext()

  


  return (
    <div>
      <div className='d-none d-lg-flex flex-lg-column'>
        {cartItems && cartItems.map(item => (
          <ItemsMd
            key={item.id}
            item={item}
            cartItemDelete={cartItemDelete}
            addFavoritos={addFavoritos}
          />
        ))}

      </div>
      <div className='d-flex d-lg-none flex-column justify-content-center align-items-center' >
        {cartItems && cartItems.map(item => (
          <ItemsSm
            key={item.id}
            item={item}
            cartItemDelete={cartItemDelete}
            addFavoritos={addFavoritos}
          />
        ))}
      </div>

    </div>
  )
}

export default CartItems