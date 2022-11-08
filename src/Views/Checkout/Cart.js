import React from 'react'
import CartContainer from '../../Components/Cart/CartContainer'


const Cart = () => {
  const pageTitle = "Tienda Ropa - Carrito";
  document.title = pageTitle;
  return (
    <CartContainer />
  )
}

export default Cart