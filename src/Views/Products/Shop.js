import React from 'react'
import ShopContainer from '../../Components/Shop/ShopContainer';

const Shop = () => {
  const pageTitle = "Tienda Ropa - Productos";
  document.title = pageTitle;
  return (
    <ShopContainer/>
  )
}

export default Shop