import React from "react";

const ServiceCard = ({i, h2_text}) => {
  return (
    <div className="col-md-6 col-lg-3 pb-5">
      <div className="h-100 py-5 services-icon-wap shadow">
        <div className="h1 text-success text-center">
          <i className={i}></i>
        </div>
        <h2 className="h5 mt-4 text-center">{h2_text} </h2>
      </div>
    </div>
  );
};

export default ServiceCard;
