import React from "react";
import { Link } from "react-router-dom";

const ShopContainer = () => {
    return (
        <main className="container py-5">
            <div className="row">
                <section className="col-lg-3 navCatergorias">
                    <h1 className="h2 pb-4">Categorías</h1>
                    <div className="dropdown d-flex flex-lg-column">
                        <button className="btn btn-secondary d-flex justify-content-between mb-5 w-50 m-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Genero
                        </button>
                        <ul className="dropdown-menu ">
                            <li><span className="dropdown-item">Hombres</span></li>
                            <li><span className="dropdown-item">Mujeres</span></li>
                            <li><span className="dropdown-item">Unisex</span></li>
                        </ul>
                        <button className="btn btn-secondary d-flex justify-content-between mb-5 w-50 m-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Descuentos
                        </button>
                        <ul className="dropdown-menu">
                            <li><span className="dropdown-item" >Deportivos</span></li>
                            <li><span className="dropdown-item" >Luxury</span></li>
                        </ul>
                        <button className="btn btn-secondary d-flex justify-content-between mb-5 w-50 m-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Productos
                        </button>
                        <ul className="dropdown-menu">
                            <li><span className="dropdown-item" >Zapatillas</span></li>
                            <li><span className="dropdown-item">Relojes</span></li>
                            <li><span className="dropdown-item" >Lentes</span></li>
                        </ul>
                    </div>
                </section>
                <section className="col-lg-9">
                    <div className="row">
                       <div className="col-7 col-md-2 pb-4">
                            <div className="d-flex">
                                <select className="form-control">
                                    <option defaultValue={"todo"}>Todo</option>
                                    <option value={"menor"}>Menor Precio</option>
                                    <option value={"mayor"}>Mayor Precio</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
        </main>
    );
};

export default ShopContainer;
