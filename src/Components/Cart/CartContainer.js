import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../Context/Store";
import CartEmpty from "./CartEmpty";
import CartItems from "./CartItems";
import CartToltal from "./CartToltal";

const CartContainer = () => {
  const {
    cartItems,
    cartTotalPrice,
    cartItemDelete,
    addFavoritos,
    setItem,
    itemQuantity,
    provincias,
  } = useStoreContext();

  const [constoEnvio, setCostoEnvio] = useState(0);
  const [precioFinal, setPrecioFinal] = useState(0);

  const setShippingFee = (value) => {
    switch (value) {
      case "Ciudad Autónoma de Buenos Aires":
        setCostoEnvio(0);
        break;
      case "Buenos Aires":
        setCostoEnvio(350);
        break;
      case "Tierra del Fuego, Antártida e Islas del Atlántico Sur":
      case "Santa Cruz":
        setCostoEnvio(500);
        break;
      default:
        setCostoEnvio(450);
        break;
    }
  };

  useEffect(() => {
    setPrecioFinal(constoEnvio + cartTotalPrice());
  }, [constoEnvio, cartTotalPrice]);

  console.log(provincias);
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
              <box-icon
                type="solid"
                name="shopping-bags"
                animation="tada"
              ></box-icon>
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
            <CartToltal
            itemQuantity={itemQuantity} 
            setShippingFee={setShippingFee}
            provincias={provincias}
            constoEnvio={constoEnvio}
            precioFinal={precioFinal}

            
            />
            </section>
          </div>
        </>
      )}
    </main>
  );
};

export default CartContainer;
