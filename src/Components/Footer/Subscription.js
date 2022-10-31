import React from "react";

const Subscription = () => {
  return (
    <div className="col-auto">
      <label className="sr-only" htmlFor="subscribeEmail">
       Dirección de email
      </label>
      <div className="input-group mb-2">
        <input
          type="text"
          className="form-control bg-dark border-light"
          id="subscribeEmail"
          placeholder="mail@mail.com"
        />
        <div className="input-group-text btn-success text-light">Suscribite</div>
      </div>
    </div>
  );
};

export default Subscription;
