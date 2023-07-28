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

export default function ContractCreate() {
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
      <h1>Creation Contract</h1>
      <div className="row gutters">
        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12"></div>
        <Formik
          initialValues={{
            contract_id: "",
            check_in: "",
            check_out: "",
            deposit: "",
            total: "",
          }}
          validationSchema={yup.object().shape({
            deposit: yup
              .number()
              .min(0, "Minimum 0")
              .required("Deposit must be Required"),
          })}
          onSubmit={handleSubmit}
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
                      <label htmlFor="check_in" className="form-label">
                        Check-in<span className="spanRed">(*)</span>
                      </label>
                      <Field
                        style={{ width: "100%", padding: "5px" }}
                        type="date"
                        id="check_in"
                        name="check_in"
                        className="form-control form-control-lg"
                      />
                      <ErrorMessage
                        name="check_in"
                        component="div"
                        className="text-red"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="check_out" className="form-label">
                        Check-out<span className="spanRed">(*)</span>
                      </label>
                      <Field
                        style={{ width: "100%", padding: "5px" }}
                        type="date"
                        id="check_out"
                        name="check_out"
                        className="form-control form-control-lg"
                      />
                      <ErrorMessage
                        name="check_out"
                        component="div"
                        className="text-red"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label className="form-label" htmlFor="fullName">
                        Deposit
                        <span className="spanRed">(*)</span>
                      </label>

                      <Field
                        className="form-control form-control-lg"
                        id="deposit"
                        type="text"
                        name="deposit"
                      />

                      <ErrorMessage
                        name="deposit"
                        component="div"
                        className="text-red"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label className="form-label" htmlFor="total">
                        Total
                        <span className="spanRed">(*)</span>
                      </label>

                      <Field
                        id="total"
                        type="text"
                        name="total"
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
          </Form>
        </Formik>
      </div>
    </div>
  );
}
