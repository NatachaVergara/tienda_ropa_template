import React from 'react'
import product_single10 from '../../assets/img/product_single_10.jpg'
import product_single_01 from '../../assets/img/product_single_01.jpg'
import product_single_02 from '../../assets/img/product_single_02.jpg'
import product_single_03 from '../../assets/img/product_single_03.jpg'
import product_single_04 from '../../assets/img/product_single_04.jpg'
import product_single_05 from '../../assets/img/product_single_05.jpg'
import product_single_06 from '../../assets/img/product_single_06.jpg'
import product_single_07 from '../../assets/img/product_single_07.jpg'
import product_single_08 from '../../assets/img/product_single_08.jpg'
import product_single_09 from '../../assets/img/product_single_09.jpg'

const ItemImages = () => {
    return (
        <div className='col-lg-5 mt-5'>
            <div className="card mb-3">
                <img className="card-img img-fluid" src={product_single10} alt="product_single10" id="product-detail" />
            </div>
            <div className="row">
                {/* <!--Start Controls--> */}
                <div className="col-1 align-self-center">
                    <a href="#multi-item-example" role="button" data-bs-slide="prev">
                        <i className="text-dark fas fa-chevron-left"></i>
                        <span className="sr-only">Previous</span>
                    </a>
                </div>
                {/* <!--End Controls-->
                        <!--Start Carousel Wrapper--> */}
                <div id="multi-item-example" className="col-10 carousel slide carousel-multi-item" data-bs-ride="carousel">
                    {/* <!--Start Slides--> */}
                    <div className="carousel-inner product-links-wap" role="listbox">

                        {/* <!--First slide--> */}
                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col-4">
                                    <a href="#">
                                        <img className="card-img img-fluid" src={product_single_01} alt="Product Image 1" />
                                    </a>
                                </div>
                                <div className="col-4">
                                    <a href="#">
                                        <img className="card-img img-fluid" src={product_single_02} alt="Product Image 2" />
                                    </a>
                                </div>
                                <div className="col-4">
                                    <a href="#">
                                        <img className="card-img img-fluid" src={product_single_03} alt="Product Image 3" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* <!--/.First slide-->

                                <!--Second slide--> */}
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-4">
                                    <a href="#">
                                        <img className="card-img img-fluid" src={product_single_04} alt="Product Image 4" />
                                    </a>
                                </div>
                                <div className="col-4">
                                    <a href="#">
                                        <img className="card-img img-fluid" src={product_single_05} alt="Product Image 5" />
                                    </a>
                                </div>
                                <div className="col-4">
                                    <a href="#">
                                        <img className="card-img img-fluid" src={product_single_06} alt="Product Image 6" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* <!--/.Second slide-->

                                <!--Third slide--> */}
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-4">
                                    <a href="#">
                                        <img className="card-img img-fluid" src={product_single_07} alt="Product Image 7" />
                                    </a>
                                </div>
                                <div className="col-4">
                                    <a href="#">
                                        <img className="card-img img-fluid" src={product_single_08} alt="Product Image 8" />
                                    </a>
                                </div>
                                <div className="col-4">
                                    <a href="#">
                                        <img className="card-img img-fluid" src={product_single_09} alt="Product Image 9" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* <!--/.Third slide--> */}
                    </div>
                    {/* <!--End Slides--> */}
                </div>
                {/* <!--End Carousel Wrapper-->
                        <!--Start Controls--> */}
                <div className="col-1 align-self-center">
                    <a href="#multi-item-example" role="button" data-bs-slide="next">
                        <i className="text-dark fas fa-chevron-right"></i>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                {/* <!--End Controls--> */}
            </div>


        </div>
    )
}

export default ItemImages