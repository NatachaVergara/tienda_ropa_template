import React from 'react'
import { useStoreContext } from '../../Context/Store'
import ItemsMd from './ItemsMd'
import ItemsSm from './ItemsSm'


const CartItems = ({ cartItems, cartItemDelete, addFavoritos, setItem}) => {
 const {setCartItems} = useStoreContext()

  


  return (
    <div>
      <div className='d-none d-lg-flex flex-lg-column'>
        {cartItems && cartItems.map(item => (
          <ItemsMd
            key={item.id}
            item={item}
            cartItemDelete={cartItemDelete}
            addFavoritos={addFavoritos}
            setItem={setItem}
            cartItems={cartItems}
            setCartItems={setCartItems}
          
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
            setItem={setItem}
          />
        ))}
      </div>

    </div>
  )
}

export default CartItems