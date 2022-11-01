import React, { useState } from "react";
import { data_card_img } from "./data";
import ShopCard from "./ShopCard";
import ShopPagination from "./ShopPagination";

const ShopNav = () => {
  const [products, setProducts] = useState(data_card_img);

  const shortListByPrice = (value) => {
    if (value === "menor") {
      let lower = [...products].sort((a, b) => a.price - b.price);
      setProducts(lower);
      console.log(products);
    } else if (value === "mayor") {
      let higher = [...products].sort((a, b) => b.price - a.price);
      setProducts(higher);
      console.log(products);
    } else {
      setProducts(data_card_img);
    }
  };

  const sortByGender = (value) => {
    if (value === "Mujeres") {
      let woman = [...data_card_img].filter((m) => m.product_gender === "Mujeres");
      setProducts(woman);
    } else if (value === "Hombres") {
      let man = [...data_card_img].filter((m) => m.product_gender === "Hombres");
      setProducts(man);
    } else {
      let unisex = [...data_card_img].filter((m) => m.product_gender === "Unisex");
      setProducts(unisex);
    }
  };

  return (
    <div className="row">
      <section className="col-lg-3 navCatergorias">
        <h1 className="h2 pb-4">Categorías</h1>
        <div className="dropdown d-flex flex-lg-column">
          <button
            className="btn btn-secondary d-flex justify-content-between mb-5 w-50 m-1"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Genero
          </button>
          <ul className="dropdown-menu ">
            <li onClick={() => sortByGender("Hombres")}>
              <span className="dropdown-item">Hombres</span>
            </li>
            <li onClick={() => sortByGender("Mujeres")}>
              <span className="dropdown-item">Mujeres</span>
            </li>
            <li onClick={() => sortByGender("Unisex")}>
              <span className="dropdown-item">Unisex</span>
            </li>
          </ul>
          <button
            className="btn btn-secondary d-flex justify-content-between mb-5 w-50 m-1"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Descuentos
          </button>
          <ul className="dropdown-menu">
            <li>
              <span className="dropdown-item">Deportivos</span>
            </li>
            <li>
              <span className="dropdown-item">Luxury</span>
            </li>
          </ul>
          <button
            className="btn btn-secondary d-flex justify-content-between mb-5 w-50 m-1"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Productos
          </button>
          <ul className="dropdown-menu">
            <li>
              <span className="dropdown-item">Zapatillas</span>
            </li>
            <li>
              <span className="dropdown-item">Relojes</span>
            </li>
            <li>
              <span className="dropdown-item">Lentes</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="col-lg-9">
        <div className="row">
          <div className="col-7 col-md-2 pb-4">
            <div className="d-flex">
              <select
                className="form-control"
                onChange={(e) => shortListByPrice(e.target.value)}
              >
                <option value={"todo"}>Todo</option>
                <option value={"menor"}>Menor Precio</option>
                <option value={"mayor"}>Mayor Precio</option>
              </select>
            </div>
          </div>
        </div>
        <div className="card-section row">
          {products.map((card) => (
            <ShopCard
              key={card.id}
              img={card.img}
              img_alt={card.img_alt}
              price={card.price}
            />
          ))}
        </div>
         <ShopPagination  array={data_card_img} />   
      </section>
    </div>
  );
};

export default ShopNav;
