import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import * as yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { DeleteService } from "../furama_service/FuramaService";

function AddServiceModal(props) {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    idCard: "",
    address: "",  
    email: "",
    phone: "",
    gender: "",
    dateOfBirth: "",
  });

  const genders = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
  ];

  const REGEX = yup.object().shape({
    fullName: yup.string().required(),
    idCard: yup.string().required(),
    address: yup.string().required(),
    email: yup
      .string()
      .required()
      .matches(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
        "Email incorrect. Ex:example@gmail.com"
      )
      .required(),
    phone: yup.string().required(),
    gender: yup.string().required(),
    dateOfBirth: yup.string().required(),
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
            Create Service
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
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="fullName">
                          Full Name
                          <span className="spanRed">(*)</span>
                        </label>

                        <Field
                          className="form-control form-control-lg"
                          id="fullName"
                          type="text"
                          name="fullName"
                          value={form.fullName}
                          onChange={handleChange}
                        />

                        <ErrorMessage
                          name="fullName"
                          component="div"
                          className="text-red"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="idCard">
                          Identity Card
                          <span className="spanRed">(*)</span>
                        </label>

                        <Field
                          id="idCard"
                          type="text"
                          name="idCard"
                          value={form.idCard}
                          onChange={handleChange}
                          className="form-control form-control-lg"
                        />

                        <ErrorMessage
                          name="idCard"
                          component="div"
                          className="text-red"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4 d-flex align-items-center">
                      <div className="form-outline datepicker w-100">
                        <label htmlFor="date_of_birth" className="form-label">
                          Birthday<span className="spanRed">(*)</span>
                        </label>
                        <Field
                          style={{ width: "100%", padding: "5px" }}
                          type="date"
                          id="myDate"
                          name="dateOfBirth"
                          value={form.dateOfBirth}
                          onChange={handleChange}
                          className="form-control form-control-lg"
                        />
                        <ErrorMessage
                          name="dateOfBirth"
                          component="div"
                          className="text-red"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-check form-check-inline">
                        <label className="mb-2 pb-1">
                          Gender<span className="spanRed">(*)</span>{" "}
                        </label>
                        {genders.map((gender, index) => {
                          return (
                            <>
                              <label
                                className="form-check-label"
                                htmlFor={gender.value}
                                key={index}
                              >
                                {gender.label}
                              </label>

                              <Field
                                id={gender.value}
                                name="gender"
                                type="radio"
                                value={gender.value}
                                checked={form.gender === gender.value}
                                onChange={handleChange}
                                className="form-check-input"
                              />
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="phoneNumber">
                          Phone Number <span className="spanRed">(*)</span>
                        </label>
                        <Field
                          id="phoneNumber"
                          type="text"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          className="form-control form-control-lg"
                        />
                        <ErrorMessage
                          name="phone"
                          component="div"
                          className="text-red"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <label className="mb-2 pb-1">
                          Type Customer <span className="spanRed">(*)</span>
                        </label>
                        <select
                          className="form-check form-check-inline"
                          name="typeCustomer"
                          value={form.typeCustomer}
                        >
                        
                        </select>
                        <ErrorMessage
                          name="typeCustomer"
                          component="div"
                          className="text-red"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="form-outline">
                      <label className="form-label" htmlFor="email">
                        Email <span className="spanRed">(*)</span>
                      </label>
                      <Field
                        value={form.email}
                        onChange={handleChange}
                        type="text"
                        id="email"
                        className="form-control form-control-lg"
                        style={{ width: "100%" }}
                      />

                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-outline">
                      <label className="form-label" htmlFor="phoneNumber">
                        Address
                      </label>
                      <Field
                        id="addressCustomer"
                        type="text"
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        className="form-control form-control-lg"
                        style={{ width: "100%" }}
                      />
                      <ErrorMessage
                        name="address"
                        component="div"
                        className="text-red"
                      />
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

function EditServiceModal(props) {
  const [show, setShow] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    idCard: "",
    address: "",
    email: "",
    phone: "",
    gender: "",
    dateOfBirth: "",
  });

  const genders = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
  ];

  const typeCustomers = [
    { label: "Member", value: "Member" },
    { label: "Silver", value: "Silver" },
    { label: "Gold", value: "Gold" },
    { label: "Diamond", value: "Diamond" },
    { label: "Platium", value: "Platium" },
  ];

  const REGEX = yup.object().shape({
    fullName: yup.string().required(),
    idCard: yup.string().required(),
    address: yup.string().required(),
    email: yup
      .string()
      .required()
      .matches(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
        "Email incorrect. Ex:example@gmail.com"
      )
      .required(),
    phone: yup.string().required(),
    gender: yup.string().required(),
    dateOfBirth: yup.string().required(),
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
    alert("Edit Success!");
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
          <Formik
            intialForm={form}
            validate={handleValidate}
            onSubmit={handleSubmit}
          >
            <section className="vh-100 gradient-custom">
              <div className="card-body p-4 p-md-5">
                <Form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="fullName">
                          Full Name
                          <span className="spanRed">(*)</span>
                        </label>

                        <Field
                          className="form-control form-control-lg"
                          id="fullName"
                          type="text"
                          name="fullName"
                          value={form.fullName}
                          onChange={handleChange}
                        />

                        <ErrorMessage
                          name="fullName"
                          component="div"
                          className="text-red"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="idCard">
                          Identity Card
                          <span className="spanRed">(*)</span>
                        </label>

                        <Field
                          id="idCard"
                          type="text"
                          name="idCard"
                          value={form.idCard}
                          onChange={handleChange}
                          className="form-control form-control-lg"
                        />

                        <ErrorMessage
                          name="idCard"
                          component="div"
                          className="text-red"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4 d-flex align-items-center">
                      <div className="form-outline datepicker w-100">
                        <label htmlFor="date_of_birth" className="form-label">
                          Birthday<span className="spanRed">(*)</span>
                        </label>
                        <Field
                          style={{ width: "100%", padding: "5px" }}
                          type="date"
                          id="myDate"
                          name="dateOfBirth"
                          value={form.dateOfBirth}
                          onChange={handleChange}
                          className="form-control form-control-lg"
                        />
                        <ErrorMessage
                          name="dateOfBirth"
                          component="div"
                          className="text-red"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-check form-check-inline">
                        <label className="mb-2 pb-1">
                          Gender<span className="spanRed">(*)</span>{" "}
                        </label>
                        {genders.map((gender, index) => {
                          return (
                            <>
                              <label
                                className="form-check-label"
                                htmlFor={gender.value}
                                key={index}
                              >
                                {gender.label}
                              </label>

                              <Field
                                id={gender.value}
                                name="gender"
                                type="radio"
                                value={gender.value}
                                checked={form.gender === gender.value}
                                onChange={handleChange}
                                className="form-check-input"
                              />
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="phoneNumber">
                          Phone Number <span className="spanRed">(*)</span>
                        </label>
                        <Field
                          id="phoneNumber"
                          type="text"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          className="form-control form-control-lg"
                        />
                        <ErrorMessage
                          name="phone"
                          component="div"
                          className="text-red"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <label className="mb-2 pb-1">
                          Type Customer <span className="spanRed">(*)</span>
                        </label>
                        <select
                          className="form-check form-check-inline"
                          name="typeCustomer"
                          value={form.typeCustomer}
                        >
                          {typeCustomers.map((customer, index1) => {
                            return (
                              <>
                                <option
                                  key={`st1_${index1}`}
                                  value={customer.value}
                                  checked={form.customer === customer.value}
                                  onClick={handleChange}
                                  className="form-check-input"
                                >
                                  {customer.label}
                                </option>
                              </>
                            );
                          })}
                        </select>
                        <ErrorMessage
                          name="typeCustomer"
                          component="div"
                          className="text-red"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="form-outline">
                      <label className="form-label" htmlFor="email">
                        Email <span className="spanRed">(*)</span>
                      </label>
                      <Field
                        value={form.email}
                        onChange={handleChange}
                        type="text"
                        id="email"
                        className="form-control form-control-lg"
                        style={{ width: "100%" }}
                      />

                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-outline">
                      <label className="form-label" htmlFor="phoneNumber">
                        Address
                      </label>
                      <Field
                        id="addressCustomer"
                        type="text"
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        className="form-control form-control-lg"
                        style={{ width: "100%" }}
                      />
                      <ErrorMessage
                        name="address"
                        component="div"
                        className="text-red"
                      />
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
          <Button variant="primary" onClick={props.editCustomer}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function DeleteServiceModal(props) {
  function hanldeDelete(serviceId) {
    const deleteService = async () => {
      try {
        await DeleteService(serviceId);
      } catch (error) {
        console.log("error");
      }
    };
    deleteService();
  };

  return (
    <>
      <Modal show={props.isOpen} onHide={props.closeMoDal}>
        <Modal.Header>
          <Modal.Title>Delete Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div>
              <form>
                <div className="modal-body">
                  <p>Are you sure you want to delete {props.deleteId}?</p>
                  <p className="text-warning">
                    <small>This action cannot be undone.</small>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.closeMoDal}>
            Close
          </Button>
          <Button variant="danger" onClick={hanldeDelete(props.deleteId)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export { AddServiceModal, EditServiceModal, DeleteServiceModal };
