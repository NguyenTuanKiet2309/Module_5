import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import {
  CreateCustomer,
  getTypeCustomer,
  getTypeCustomerById,
} from "../furama_service/FuramaService";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

export default function CustomerCreate() {
  const navigate = useNavigate();
  const [typeCustomer, setTypeCustomer] = useState([]);
  const typeCustomers = async () => {
    const data = await getTypeCustomer();
    setTypeCustomer(data);
  };
  useEffect(() => {
    typeCustomers();
  }, []);

  const handleSubmit = async (values) => {
    const type = await getTypeCustomerById(values.customer_type);
    const obj = {
      ...values,
      customer_type: type,
    };
    try {
      await CreateCustomer(obj); // Gọi API để thêm mới khách hàng
      Swal.fire({
        title: " Created!",
        text: "Customer has been create.",
        icon: "success",
        confirmButtonText: "OK",
        timer: 1500,
      });
      navigate("/customer");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container" id="customer-creation">
      <h1>Creation Customer</h1>
      <div className="row gutters">
        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12"></div>
        <Formik
          initialValues={{
            name: "",
            email: "",
            phone_number: "",
            date_of_birth: "",
            address: "",
            gender: "",
            id_card: "",
            customer_type: "",
          }}
          validationSchema={yup.object().shape({
            name: yup
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
            email: yup
              .string()
              .matches(
                /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                "Email incorrect. Ex:example@gmail.com"
              )
              .required("Email must be required."),
            date_of_birth: yup
              .date("Invalid date")
              .nullable()
              .transform((curr, orig) => {
                if (orig === "") return null;
                return curr;
              })
              .required("Date of birth is required")
              .test(
                "valid-date",
                "Invalid date format",
                (value) =>
                  value == null || moment(value, "DD/MM/YYYY", true).isValid()
              ),
            phone_number: yup
              .string()
              .matches(
                /(84|\+84)?(90|91)\d{7}$/,
                "Invalid phone number. Must be in the format 090xxxxxxx or (84)+90xxxxxxx"
              )
              .required("Phone must be required."),
            id_card: yup
              .string()
              .matches(/^[0-9]{12}$/, "ID card must be 12 number.")
              .required("ID card must be required."),
            address: yup.string().required("Address must be required."),
          })}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          <Form className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
            <div className="card h-100">
              <div className="card-body">
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 className="mb-2 text-primary">Customer Details</h6>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="name">
                        Full Name: <span className="spanRed">*</span>
                      </label>
                      <Field
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Enter full name"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-red"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="email">
                        Email: <span className="spanRed">*</span>
                      </label>
                      <Field
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Enter email ID"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="phone_number">
                        Phone: <span className="spanRed">*</span>
                      </label>
                      <Field
                        type="text"
                        className="form-control"
                        id="phone_number"
                        name="phone_number"
                        placeholder="Enter phone number"
                      />
                      <ErrorMessage
                        name="phone_number"
                        component="div"
                        className="text-red"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="date_of_birth">
                        Birthday <span className="spanRed">*</span>
                      </label>
                      <div className="data-picker">
                        <Field
                          type="date"
                          id="date_of_birth"
                          name="date_of_birth"
                          className="form-control"
                        />
                        <ErrorMessage
                          name="date_of_birth"
                          component="div"
                          className="text-red"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row gutters">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="address">
                        Address <span className="spanRed">*</span>
                      </label>
                      <Field
                        type="text"
                        className="form-control"
                        id="address"
                        name="address"
                        placeholder="Enter Address"
                      />
                      <ErrorMessage
                        name="address"
                        component="div"
                        className="text-red"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group gender">
                      <label style={{ fontSize: "15px" }}>
                        Gender: <span className="spanRed">*</span>{" "}
                      </label>
                      <label htmlFor="male" style={{ marginLeft: "20px" }}>
                        Male{" "}
                      </label>
                      <Field
                        style={{ marginLeft: "10px" }}
                        type="radio"
                        id="male"
                        name="gender"
                        value="Male"
                      />
                      <label htmlFor="female" style={{ marginLeft: "20px" }}>
                        Female{" "}
                      </label>
                      <Field
                        style={{ marginLeft: "10px" }}
                        type="radio"
                        id="female"
                        name="gender"
                        value="Female"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="id_card">
                        Identity Card: <span className="spanRed">*</span>
                      </label>
                      <Field
                        type="text"
                        className="form-control"
                        id="id_card"
                        name="id_card"
                        placeholder="Enter Identity Card"
                      />
                      <ErrorMessage
                        name="id_card"
                        component="div"
                        className="text-red"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="customer_type">
                        Type Customer: <span className="spanRed">*</span>
                      </label>
                      <Field
                        as="select"
                        className="form-control"
                        name="customer_type"
                      >
                        {typeCustomer.map((type) => {
                          return (
                            <option key={type.id} value={type.id}>
                              {type.type}
                            </option>
                          );
                        })}
                      </Field>
                    </div>
                  </div>
                </div>
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="text-right">
                      <button type="reset" className="btn btn-secondary">
                        Reset
                      </button>
                      <button
                        type="submit"
                        id="submit"
                        name="submit"
                        className="btn btn-primary"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
