import React from 'react'
import { Link } from 'react-router-dom'
import { useStoreContext } from '../../Context/Store'
import { data_links } from './headerData'
import HeaderList from './HeaderList'

const HeaderNav = ({ onHandleModal }) => {
    const { itemQuantity, favoritos, isLogged } = useStoreContext()

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light shadow">
                <div className="container d-flex   justify-content-between align-items-center">
                    <Link
                        className="navbar-brand text-success logo h1 align-self-center"
                        to="/home"
                    >
                        Zay
                    </Link>



                    <div
                        className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
                        id="templatemo_main_nav"
                    >
                        <div className="flex-fill">
                            <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                                {data_links.map(li => (
                                    <HeaderList
                                        key={li.id}
                                        li_className={li.li_className}
                                        link_className={li.link_className}
                                        link_to={li.link_to}
                                        link_text={li.link_text}

                                    />
                                ))}
                            </ul>
                        </div>
                        <div className="navbar align-self-center d-flex">
                            <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputMobileSearch"
                                        placeholder="Search ..."
                                    />
                                    <div className="input-group-text">
                                        <i className="fa fa-fw fa-search"></i>
                                    </div>
                                </div>
                            </div>
                            <p
                                className="nav-icon d-none d-lg-inline"

                                onClick={onHandleModal}
                            >
                                <i className="fa fa-fw fa-search text-dark mr-2"></i>
                            </p>
                            <Link
                                className="nav-icon position-relative text-decoration-none"
                                to="/home"
                            >
                                <i className={itemQuantity() === 0 ? "fa fa-fw fa-cart-arrow-down text-dark mr-1" : "fa fa-fw fa-cart-arrow-down text-success mr-1"}></i>
                                <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
                                    {itemQuantity() !== 0 && itemQuantity()}
                                </span>
                            </Link>
                            <Link
                                className="nav-icon position-relative text-decoration-none"
                                to="/favoritos"
                            >
                                {favoritos.length === 0 ? <i className="far fa-heart "></i> : <i className="fas fa-heart text-danger"></i>}
                                <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
                                    {favoritos.length !== 0 && favoritos.length}
                                </span>
                            </Link>
                            {isLogged ? <Link
                                className="nav-icon position-relative text-decoration-none"
                                to="/favoritos"
                            >
                                <i className="fa fa-fw fa-user text-dark mr-3"></i>
                                <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
                                </span>
                            </Link> :
                             <Link
                                className="nav-icon position-relative text-decoration-none"
                                to="/home"
                            >
                                <i className="fas fa-sign-in-alt"></i>
                                <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
                                </span>
                            </Link>}
                        </div>
                    </div>
                    <button
                        className="navbar-toggler border-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#templatemo_main_nav"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        </header>

    )
}

export default HeaderNav