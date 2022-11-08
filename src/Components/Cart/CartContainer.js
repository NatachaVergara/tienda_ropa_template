import React from "react";
import { useStoreContext } from "../../Context/Store";
import CartEmpty from "./CartEmpty";
import CartItems from "./CartItems";


const CartContainer = () => {
  const { cartItems, cartTotalPrice, cartItemDelete, addFavoritos, setItem } = useStoreContext();
  
  const cartListEmpty = <CartEmpty />
  return (
    <main id="cart" className="container my-2">
      {cartItems.length === 0 ? cartListEmpty :
        <>
          <h1 className="my-5 fs-3 d-flex justify-content-center">Mi carrito</h1>
          <div className="row">
            <section id="item" className="col-12 col-md-9">
              <CartItems cartItems={cartItems} cartItemDelete={cartItemDelete} addFavoritos={addFavoritos} setItem={setItem} />
            </section>
            <section id="total" className="col-12 col-md-3">
            <box-icon name='bell' animation='tada'></box-icon>
              TOTAL ${cartTotalPrice()}
            </section>
          </div></>

      }

    </main>
  );
};

export default CartContainer;
