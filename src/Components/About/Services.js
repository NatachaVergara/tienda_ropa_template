import React from "react";
import { data_services } from "./aboutData";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    // <!-- Start Section -->
    <section className="container py-5">
      <div className="row text-center pt-5 pb-3">
        <div className="col-lg-6 m-auto">
          <h1 className="h1">Nuestros servicios</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
      <div className="row">
        {data_services.map((div) => (
          <ServiceCard key={div.id} i={div.i} h2_text={div.h2_text} />
        ))}
      </div>
    </section>
    // <!-- End Section -->
  );
};

export default Services;
