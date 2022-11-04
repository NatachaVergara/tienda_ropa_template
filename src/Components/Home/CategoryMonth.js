import React from "react";
import CategoryCard from "./CategoryCard";
import { data_cards } from "./homeData";

const CategoryMonth = () => {
  return (
    // <!-- Start Categories of The Month -->
    <section className="container py-5">
      <div className="row text-center pt-3">
        <div className="col-lg-6 m-auto">
          <h1 className="h1">Categorías del mes</h1>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="row">
        {data_cards.map((div) => (
          <CategoryCard
            key={div.id}
            img={div.img}
            img_alt={div.img_alt}
            h5_text={div.h5_text}
            link_to={div.link_to}
          />
        ))}
      </div>
    </section>
  );
};

export default CategoryMonth;
