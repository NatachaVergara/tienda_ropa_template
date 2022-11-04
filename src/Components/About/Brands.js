import React from "react";
import { data_slides } from "./aboutData";
import Slide from "./Slide";

const Brands = () => {
  return (
    // <!-- Start Brands -->
    <section className="bg-light py-5">
      <div className="container my-4">
        <div className="row text-center py-3">
          <div className="col-lg-6 m-auto">
            <h1 className="h1">Nuestras marcas</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="col-lg-9 m-auto tempaltemo-carousel">
            <div className="row d-flex flex-row">
              {/* <!--Controls--> */}
              <div className="col-1 align-self-center">
                <a
                  className="h1"
                  href="#templatemo-slide-brand"
                  role="button"
                  data-bs-slide="prev"
                >
                  <i className="text-dark fas fa-chevron-left"></i>
                </a>
              </div>
              {/* <!--End Controls--> */}

              {/* <!--Carousel Wrapper--> */}
              <div className="col">
                <div
                  className="carousel slide carousel-multi-item pt-2 pt-md-0"
                  id="templatemo-slide-brand"
                  data-bs-ride="carousel"
                >
                  {/* <!--Slides--> */}
                  <div
                    className="carousel-inner product-links-wap"
                    role="listbox"
                  >
                    <div className="carousel-item active">
                      <div className="row">
                        {data_slides.map((e) => (
                          <Slide key={e.id} img={e.img} />
                        ))}
                      </div>
                    </div>
                    <div className="carousel-item active">
                      <div className="row">
                        {data_slides.map((e) => (
                          <Slide key={e.id} img={e.img} />
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* <!--End Slides--> */}
                </div>
              </div>
              {/* <!--End Carousel Wrapper--> */}

              {/* <!--Controls--> */}
              <div className="col-1 align-self-center">
                <a
                  className="h1"
                  href="#templatemo-slide-brand"
                  role="button"
                  data-bs-slide="next"
                >
                  <i className="text-dark fas fa-chevron-right"></i>
                </a>
              </div>
              {/* <!--End Controls--> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
