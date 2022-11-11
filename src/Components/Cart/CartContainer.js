import React from "react";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../Context/Store";
import CartEmpty from "./CartEmpty";
import CartItems from "./CartItems";

const CartContainer = () => {
  const {
    cartItems,
    cartTotalPrice,
    cartItemDelete,
    addFavoritos,
    setItem,
    itemQuantity,
  } = useStoreContext();

  const cartListEmpty = <CartEmpty />;

  return (
    <main id="cart" className="container my-2">
      {cartItems.length === 0 ? (
        cartListEmpty
      ) : (
        <>
          <div className="my-5 fs-3 d-flex flex-column-reverse flex-md-row justify-content-around">
            <Link to="/shop" className="btn btn-outline-success">
              Seguir comprando
            </Link>
            <h1 className="fs-3">Mi carrito</h1>
          </div>

          <div className="row">
            <section id="total" className="col-12 d-md-none">
              <box-icon type='solid' name="shopping-bags"  animation="tada"></box-icon>
              TOTAL ${cartTotalPrice()}
            </section>
            <section id="item" className="col-12 col-md-6 col-lg-9">
              <CartItems
                cartItems={cartItems}
                cartItemDelete={cartItemDelete}
                addFavoritos={addFavoritos}
                setItem={setItem}
              />
            </section>
            <section id="total" className="col-12 col-md-6 col-lg-3">
              <box-icon type='solid' name="shopping-bags" animation="tada"></box-icon>
              <div>
                <p> Cantidad de productos: {itemQuantity()} </p>
                <p>Costo de envío: $ 350</p>
                <p> Orden total ${360 + cartTotalPrice()}</p>
                <Link to='/startpayment/checkout' className="btn btn-outline-dark">Dirección y pago</Link>
              </div>
            </section>
          </div>
        </>
      )}
    </main>
  );
};

export default CartContainer;
