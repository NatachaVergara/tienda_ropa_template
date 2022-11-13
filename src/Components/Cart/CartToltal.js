import React from "react";
import { Link } from "react-router-dom";

const CartToltal = ({
  itemQuantity,
  setShippingFee,
  provincias,
  constoEnvio,
  precioFinal,
}) => {
  return (
    <>
      {" "}
      <box-icon type="solid" name="shopping-bags" animation="tada"></box-icon>
      <div>
        <p> Cantidad de productos: {itemQuantity()} </p>
        <select
          className="form-select my-3"
          aria-label="Default select example"
          onChange={(e) => setShippingFee(e.target.value)}
        >
          <option defaultValue className="w-50">
            Elegir provincia
          </option>
          {provincias.length > 0 &&
            provincias.map((p) => (
              <option value={p.nombre} key={p.id}>
                {" "}
                {p.nombre}{" "}
              </option>
            ))}
        </select>
        <p>Costo de envío: ${constoEnvio} </p>
        <p>Orden total ${precioFinal}</p>
        <Link to="/startpayment/checkout" className="btn btn-outline-dark">
          Dirección y pago
        </Link>
      </div>
    </>
  );
};

export default CartToltal;
