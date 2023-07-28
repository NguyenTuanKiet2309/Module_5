import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import * as yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import axios from "axios";
import {
  CreateCustomer,
  DeleteCustomer,
} from "../furama_service/FuramaService";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

function AddCustomerModal(props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    id_card: "",
    address: "",
    email: "",
    phone_number: "",
    gender: "",
    date_of_birth: "",
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
    fullName: yup
      .string()
      .matches(/^[a-zA-Z\s]*$/, "Customer name cannot contain numbers.")
      .test(
        "uppercase",
        "The first letter of each word must be capitalized.",
        (value) => {
          if (value) {
            const words = value.split(" ");
            return words.every(
              (word) => word.charAt(0) === word.charAt(0).toUpperCase()
            );
          }
          return true;
        }
      )
      .required("Customer name must be required."),
    idCard: yup
      .string()
      .matches(/^[0-9]{12}$/, "ID card must be 12 number.")
      .required("ID card must be required."),
    address: yup.string().required("Address must be required."),
    email: yup
      .string()

      .matches(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
        "Email incorrect. Ex:example@gmail.com"
      )
      .required("Email must be required."),
    phone: yup
      .string()
      .matches(
        /(84|\+84)?(90|91)\d{7}$/,
        "Invalid phone number. Must be in the format 090xxxxxxx or (84)+90xxxxxxx"
      )
      .required("Phone must be required."),
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
  const handleSubmit = async (values) => {
    values.preventDefault();
    const {gender, typeCustomer } = values || {};
    console.log(values);
    setIsSubmitting(true);
    try {
      console.log("abc");
      await CreateCustomer(values); // Gọi API để thêm mới khách hàng
      alert("Add customer successfully!");
      props.closeModal(); // Đóng modal khi thêm mới khách hàng thành công
    } catch (error) {
      console.log(error);
    }
    setIsSubmitting(false);
  };

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

  return (
    <>
      <Modal
        aria-labelledby="example-modal-sizes-title-lg"
        size="lg"
        show={props.isOpen}
        onHide={props.closeModal}
      >
        <Modal.Header>
          <Modal.Title id="example-modal-sizes-title-lg">
            Add Customer
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            intialForm={form}
            validate={handleValidate}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
          >
            <section className="vh-100 gradient-custom">
              <div className="card-body p-4 p-md-5">
                <Form>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="name">
                          Full Name <span className="spanRed">*</span>
                        </label>

                        <Field
                          className="form-control form-control-lg"
                          id="name"
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                        />

                        <ErrorMessage
                          name="name"
                          component="div"
                          className="text-red"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="id_card">
                          Identity Card <span className="spanRed">*</span>
                        </label>

                        <Field
                          id="id_card"
                          type="text"
                          name="id_card"
                          value={form.id_card}
                          onChange={handleChange}
                          className="form-control form-control-lg"
                        />

                        <ErrorMessage
                          name="id_card"
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
                          Birthday <span className="spanRed">*</span>
                        </label>
                        <Field
                          style={{ width: "100%", padding: "5px" }}
                          type="date"
                          id="date_of_birth"
                          name="date_of_birth"
                          value={form.date_of_birth}
                          onChange={handleChange}
                          className="form-control form-control-lg"
                        />
                        <ErrorMessage
                          name="date_of_birth"
                          component="div"
                          className="text-red"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-check form-check-inline form-outline">
                        <label className="mb-2 pb-1">
                          Gender <span className="spanRed">*</span>{" "}
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
                        <label className="form-label" htmlFor="phone_number">
                          Phone Number <span className="spanRed">*</span>
                        </label>
                        <Field
                          id="phone_number"
                          type="text"
                          name="phone_number"
                          value={form.phone_number}
                          onChange={handleChange}
                          className="form-control form-control-lg"
                        />
                        <ErrorMessage
                          name="phone_number"
                          component="div"
                          className="text-red"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <label className="mb-2 pb-1">
                          Type Customer <span className="spanRed">*</span>
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
                                  id={customer.value}
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
                        Email<span className="spanRed">*</span>
                      </label>
                      <Field
                        id="email"
                        type="text"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
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
                      <label className="form-label" htmlFor="address">
                        Address<span className="spanRed">*</span>
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
                  <Modal.Footer>
                    <Button variant="secondary" onClick={props.closeModal}>
                      Close
                    </Button>
                    <Button variant="primary" type="submit">
                      Add
                    </Button>
                  </Modal.Footer>
                </Form>
              </div>
            </section>
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
}

function EditCustomerModal(props) {
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

  return (
    <>
      <Modal
        aria-labelledby="example-modal-sizes-title-lg"
        size="lg"
        show={props.isOpen}
        onHide={props.closeModal}
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
                                  id="typeCustomer"
                                  name="typeCustomer"
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
                        Email <span className="spanRed">*</span>
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
                        Address <span className="spanRed">*</span>
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
          <Button variant="secondary" onClick={props.closeModal}>
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
  function hanldeDelete(customerId) {
    const deleteCustomers = async () => {
      try {
        await DeleteCustomer(customerId);
        props.closeModal();
        Swal.fire({
          title: " Deleted!",
          text: "Customer has been deleted.",
          icon: "success",
          confirmButtonText: "OK",
          timer: 1500,
        }).then(() => {
          props.getAllCustomer();
        });
      } catch (error) {
        console.log("error");
      }
    };
    deleteCustomers();
  }

  return (
    <>
      <Modal show={props.isOpen} onHide={props.closeModal}>
        <Modal.Header>
          <Modal.Title>Delete Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div>
              <form>
                <div className="modal-body">
                  <p>
                    Are you sure want to delete customer{" "}
                    <span className="spanRed">{props.customerName}</span> and
                    has{" "}
                    <span className="spanRed">
                      {" "}
                      Id Card : {props.idCardCustomer}{" "}
                    </span>{" "}
                    ?
                  </p>
                  <p className="text-warning">
                    <small>This action cannot be undone.</small>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.closeModal}>
            Close
          </Button>
          <Button variant="danger" onClick={() => hanldeDelete(props.deleteId)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export { AddCustomerModal, EditCustomerModal, DeleteCustomerModal };
