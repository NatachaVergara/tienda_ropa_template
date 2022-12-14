import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
const ItemsMd = ({ item, cartItemDelete, addFavoritos, setItem, cartItems, setCartItems }) => {

  return (
    <table key={item.id} className="table table-hover container ">
      <thead>
        <tr>
          {/* <th scope="col">ID</th> */}
          <th scope="col">Producto</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Precio</th>
          <th scope="col">Subtotal</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr className="table-active">
          {/* <th className="">{item.id} </th> */}
          <th className="w-50">
            <Link
              title='Ver producto'
              to="/item"
              scope="row"
              className="text-decoration-none text-dark d-flex justify-content-start align-items-center"
              onClick={() => setItem(item)}
            >
              <img
                src={item.img}
                alt={item.img_alt}
                style={{ maxWidth: 100, maxHeight: 100 }}
              />
              <div className="text-start  ms-3 d-flex flex-column">
                <span className="fs-6"> {item.product_title}</span>
                <span className="fs-6">Color: Marron </span>
                <span className="fs-6">Talle: xl </span>
              </div>
            </Link>
          </th>
          <th className="w-25 ">
            <ItemCount initial={item.quantity} stock={item.stock} item={item} cartItems={cartItems} setCartItems={setCartItems} />
          </th>
          <th>$ {item.price} </th>
          <th>$ {item.price * item.quantity}</th>
          <th className="col">
            <button
              className="btn btn-outline-success"
              onClick={() => addFavoritos(item)}
            >
              <box-icon
                name="heart"
                size="sm"
                animation="tada-hover"
              ></box-icon>
            </button>
            <button
              className="btn btn-danger m-1"
              onClick={() => cartItemDelete(item.id)}
            >
              <box-icon
                type="solid"
                name="trash"
                size="sm"
                animation="burst-hover"
              ></box-icon>
            </button>

          </th>
        </tr>
      </tbody>
    </table>
  );
};

export default ItemsMd;
