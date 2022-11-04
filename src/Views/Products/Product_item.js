import React from 'react'
import ProductItemContainer from '../../Components/ProductItem/ProductItemContainer';

const Product_item = () => {
  const pageTitle = "Tienda Ropa - Item";
  document.title = pageTitle;
  return (
    <ProductItemContainer />
  )
}

export default Product_item