import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function AddCustomerModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <a
        onClick={handleShow}
        className="btn btn-success"
      >
        <i className="material-icons"></i> <span>Add New Customer</span>
      </a>

      <Modal
        aria-labelledby="example-modal-sizes-title-lg"
        size="lg"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header>
          <Modal.Title id="example-modal-sizes-title-lg">
            Add Customer
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div>
              <form>
                <div className="modal-body">
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>Address</label>
                    <textarea
                      className="form-control"
                      required
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input type="text" className="form-control" required />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.addCustomer}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function EditCustomerModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <a
        onClick={handleShow}
        // href="#editCustomerModal"
        className="edit"
        // data-toggle="modal"
        // data-target="#editCustomerModal"
      >
        <i className="material-icons" data-toggle="tooltip" title="Edit">
          
        </i>
      </a>

      <Modal
        aria-labelledby="example-modal-sizes-title-lg"
        size="lg"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header>
          <Modal.Title>Edit Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div>
              <div>
                <form>
                  <div className="modal-body">
                    <div className="form-group">
                      <label>Name</label>
                      <input type="text" className="form-control" required />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" className="form-control" required />
                    </div>
                    <div className="form-group">
                      <label>Address</label>
                      <textarea
                        className="form-control"
                        required
                        defaultValue={""}
                      />
                    </div>
                    <div className="form-group">
                      <label>Phone</label>
                      <input type="text" className="form-control" required />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.editCustomer}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function DeleteCustomerModal(props) {
  const [show, setShow] = useState(false);
  const [deletedId, setDeletedId] = useState(null);

  const handleClose = () => setShow(false);

  const showModal = (id) => {
    setShow(true);
    setDeletedId(id);
  };

  return (
    <>
      <a
        onClick={() => {
          showModal();
        }}
        // href="#deleteCustomerModal"
        className="delete"
        // data-toggle="modal"
        // data-target="#deleteCustomerModal"
      >
        <i className="material-icons" data-toggle="tooltip" title="Delete">
          
        </i>
      </a>

      <Modal show={show} onHide={handleClose} deleteId={deletedId}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div>
              <form>
                <div className="modal-body">
                  <p>Are you sure you want to delete these Records?</p>
                  <p className="text-warning">
                    <small>This action cannot be undone.</small>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.editCustomer}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export { AddCustomerModal, EditCustomerModal, DeleteCustomerModal };
