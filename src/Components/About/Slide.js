import React from "react";

const Slide = ({ img }) => {
  return (
    
      <div className="col-3 p-md-5">
        <img className="img-fluid brand-img" src={img} alt="Brand Logo" />
      </div>
    
  );
};

export default Slide;
