import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import * as yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";

export default function AddContractModal(props) {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({
    contract_id: "",
    check_in: "",
    check_out: "",
    deposit: "",
    total: "",
  });

  const REGEX = yup.object().shape({
    deposit:  yup
    .number()
    .min(0, "Minimum 0")
    .max(2023, "Minimax 2023")
    .required("Year must be Required"),
  });
  function handleChange(event) {
    setForm({
      ...form,
      gender: event.target.value,
      typeCustomer: event.target.value,
      [event.target.name]: event.target.value,
    });
  }
  function handleSubmit(event) {
    event.preventDefault(); // non reload
    alert("Create Success!");
    console.log(form);
  }
  function handleValidate() {
    try {
      REGEX.validateSync(form, { abortEarly: false });
      return {};
    } catch (errors) {
      const validationErrors = {};
      errors.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });
      return validationErrors;
    }
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <a onClick={handleShow} className="btn btn-success">
        <i className="material-icons"></i> <span>Add New Contract</span>
      </a>

      <Modal
        aria-labelledby="example-modal-sizes-title-lg"
        size="lg"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header>
          <Modal.Title id="example-modal-sizes-title-lg">
            Create Contract
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            intialForm={form}
            validate={handleValidate}
            onSubmit={handleSubmit}
          >
            <section className="vh-100 gradient-custom">
              <div className="card-body p-4 p-md-5">
                <Form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-4 d-flex align-items-center">
                      <div className="form-outline datepicker w-100">
                        <label htmlFor="check_in" className="form-label">
                          Check-in<span className="spanRed">(*)</span>
                        </label>
                        <Field
                          style={{ width: "100%", padding: "5px" }}
                          type="date"
                          id="check_in"
                          name="check_in"
                          value={form.check_in}
                          onChange={handleChange}
                          className="form-control form-control-lg"
                        />
                        <ErrorMessage
                          name="check_in"
                          component="div"
                          className="text-red"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4 d-flex align-items-center">
                      <div className="form-outline datepicker w-100">
                        <label htmlFor="check_out" className="form-label">
                          Check-out<span className="spanRed">(*)</span>
                        </label>
                        <Field
                          style={{ width: "100%", padding: "5px" }}
                          type="date"
                          id="check_out"
                          name="check_out"
                          value={form.check_out}
                          onChange={handleChange}
                          className="form-control form-control-lg"
                        />
                        <ErrorMessage
                          name="check_out"
                          component="div"
                          className="text-red"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="fullName">
                          Deposit
                          <span className="spanRed">(*)</span>
                        </label>

                        <Field
                          className="form-control form-control-lg"
                          id="deposit"
                          type="text"
                          name="deposit"
                          value={form.deposit}
                          onChange={handleChange}
                        />

                        <ErrorMessage
                          name="deposit"
                          component="div"
                          className="text-red"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="total">
                          Total
                          <span className="spanRed">(*)</span>
                        </label>

                        <Field
                          id="total"
                          type="text"
                          name="total"
                          value={form.idCard}
                          onChange={handleChange}
                          className="form-control form-control-lg"
                        />

                        <ErrorMessage
                          name="total"
                          component="div"
                          className="text-red"
                        />
                      </div>
                    </div>
                  </div>
                </Form>
              </div>
            </section>
          </Formik>
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
