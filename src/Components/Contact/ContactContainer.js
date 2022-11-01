import React from "react";

const ContactContainer = () => {
  return (
    <main>
      <header className="container-fluid bg-light py-5">
        <div className="col-md-6 m-auto text-center">
          <h1 className="h1">Contáctese con nosotros</h1>
          <p>
            Proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum. Lorem ipsum dolor sit amet.
          </p>
        </div>
      </header>
      <section>
        <div className="container py-5">
          <div className="row py-5">
            <form className="col-md-9 m-auto">
              <div className="row">
                <div className="form-group col-md-6 mb-3">
                  <label htmlFor="inputname">Nombre</label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    id="name"
                    name="name"
                    placeholder="Juan Pérez"
                  />
                </div>
                <div className="form-group col-md-6 mb-3">
                  <label htmlFor="inputemail">Email</label>
                  <input
                    type="email"
                    className="form-control mt-1"
                    id="email"
                    name="email"
                    placeholder="mail@mail.com"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="inputsubject">Razón del mensaje</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  id="subject"
                  name="subject"
                  placeholder="¿Cómo sigo el pedido?"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="inputmessage">Mensaje</label>
                <textarea
                  className="form-control mt-1"
                  id="message"
                  name="message"
                  placeholder="Hice una compra con número xxxx y no me llego el mail de confirmación"
                  rows="8"
                ></textarea>
              </div>
              <div className="row">
                <div className="col text-end mt-2">
                  <button type="submit" className="btn btn-success btn-lg px-3">
                    Enviar consulta
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactContainer;
