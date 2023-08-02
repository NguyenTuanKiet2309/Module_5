import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { create } from "../services/SongService";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function CreateSong() {
  const navigate = useNavigate();

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-dark container"
        style={{ color: "white" }}
      >
        <div className="container-fluid" style={{ color: "white" }}>
          <a className="navbar-brand" href="#" style={{ color: "white" }}>
            Thi Module 5
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  onClick={() => {
                    navigate("/");
                  }}
                  style={{ color: "white" }}
                >
                  Trang chủ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: "white" }}>
                  Liên hệ
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: "white" }}
                >
                  Tùy chọn
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Phát
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      Thông tin
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <input
                id="nameSearch"
                className="form-control me-2"
                type="search"
                placeholder="Nhập tên bài hát"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="button">
                Tìm
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="table-wrapper" style={{ marginTop: "20px" }}>
        <div className="table-title">
          <div class="row">
            <div className="col-sm-6">
              <h2>
                Quản lý <b>bài hát</b>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Formik
        initialValues={{
          name: "",
          single: "",
          artist: "",
          time: "",
          likes: "",
          songStatus: "",
        }}
        // validationSchema={yup.object({
        //     name: yup.string().required('Không được để trống trường này!!!!'),
        //     single: yup.string().required('Không được để trống trường này!!!!').min(3, 'Tên tối thiểu là 3 kí tự!!!!').max(30, 'Tên tối đa là 30 kí tự!!!!'),
        //     artist: yup.string().required('Không được để trống trường này!!!!').min(3, 'Tên tối thiểu là 3 kí tự!!!!').max(30, 'Tên tối đa là 30 kí tự!!!!'),
        //     time: yup.string().required('Không được để trống trường này!!!!')
        // })}
        onSubmit={(values) => {
          
          create({ ...values, likes: 0, status: false }).then(() => {
            navigate("/");
            Swal.fire({
              icon: "success",
              title: "Thêm mới thành công",
              timer: 1500,
              showConfirmButton: false,
            });
          });
          console.log(values);
        }}
      >
        <Form className="row mb-4">
          <div className="card h-100">
            <div className="card-body">
              <div className="row gutters">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="name">
                      Tên bài hát: <span className="spanRed">*</span>
                    </label>
                    <Field
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
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
                    <label htmlFor="single">
                      Ca sĩ <span className="spanRed">*</span>
                    </label>
                    <Field
                      type="text"
                      className="form-control"
                      id="single"
                      name="single"
                    />
                    <ErrorMessage
                      name="single"
                      component="div"
                      className="text-red"
                    />
                  </div>
                </div>
              </div>
      
              <div className="row gutters">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="artist">
                      Nhạc sĩ: <span className="spanRed">*</span>
                    </label>
                    <Field
                      type="text"
                      className="form-control"
                      id="artist"
                      name="artist"
                    />
                    <ErrorMessage
                      name="artist"
                      component="div"
                      className="text-red"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="time">
                      Thời gian phát <span className="spanRed">*</span>
                    </label>
                    <Field
                      type="text"
                      className="form-control"
                      id="time"
                      name="time"
                    />
                    <ErrorMessage
                      name="time"
                      component="div"
                      className="text-red"
                    />
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
    </>
  );
}
