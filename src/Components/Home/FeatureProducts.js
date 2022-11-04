import React from "react";
import { data_features } from "./homeData";
import FeatureCard from "./FeatureCard";

const FeatureProducts = () => {
  return (
    // <!-- Start Featured Product -->
    <section className="bg-light">
      <div className="container py-5">
        <div className="row text-center py-3">
          <div className="col-lg-6 m-auto">
            <h1 className="h1">Featured Product</h1>
            <p>
              Reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
          </div>
        </div>
        <div className="row">
          {data_features.map((div) => (
            <FeatureCard
              key={div.id}
              link_to={div.link_to}
              img={div.img}
              img_alt={div.img_alt}
              li_price={div.li_price}
              p_title={div.p_title}
              p_text={div.p_text}
              p_review={div.p_review}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureProducts;
