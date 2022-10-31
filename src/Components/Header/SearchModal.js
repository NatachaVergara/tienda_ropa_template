import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';

const SearchModal = ({ onHandleModal, show }) => {
  return (
    <Modal show={show} onHide={onHandleModal}>
      <Modal.Header closeButton>
        <Modal.Title>Busque en el sitio</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form
          action=""
          method="get"
          className="modal-content modal-body border-0 p-0"
        >
          <div className="input-group mb-2">
            <input
              type="text"
              className="form-control"
              id="inputModalSearch"
              name="q"
              placeholder="Zapatillas ..."
            />
            <button
              type="submit"
              className="input-group-text bg-success text-light"
            >
              <i className="fa fa-fw fa-search text-white"></i>
            </button>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="warning" onClick={onHandleModal}>
          Cerrar
        </Button>
        
      </Modal.Footer>
    </Modal>
  );
};

export default SearchModal;
