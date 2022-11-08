import React from 'react'

const VerticalNav = ({sortByGender}) => {
    return (
        <>
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
                        <span className="dropdown-item">2x1</span>
                    </li>
                    <li>
                        <span className="dropdown-item">10 %</span>
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
        </>
    )
}

export default VerticalNav