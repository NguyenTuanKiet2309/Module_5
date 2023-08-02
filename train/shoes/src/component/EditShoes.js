import { useEffect, useState } from "react";
import { getListProducer, getProducerById } from "../service/producerService";
import { editShoes, findById, getListShoes } from "../service/ShoesService";
import { ErrorMessage, Field, Formik, Form } from "formik";
import * as yup from "yup";
import { useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";

export default function EditShoes() {
  const [producer, setProducer] = useState([]);
  const [shoes, setShoes] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  const findShoesById = async () => {
    const data = await findById(params.id);
    setShoes(data);
  };

  useEffect(() => {
    findShoesById();
  }, [params.id]);

  const getProducer = async () => {
    const data = await getListProducer();
    setProducer(data);
  };

  useEffect(() => {
    getProducer();
  }, []);

  const handleSubmit = async (shoesId, shoes) => {
    const type = await getProducerById(shoes.producer);
    const obj = {
      ...shoes,
      producer: type,
    };
    try {
      await editShoes(shoesId, obj);
      Swal.fire({
        title: "Edited",
        text: "Product was Edited!!",
        icon: "success",
        confirmButtonText: "OK",
        timer: 1500,
      });
      navigate("/");
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <div className="container" id="customer-creation">
      <h1>Edit</h1>
      <div className="row gutters">
        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12"></div>
        {shoes.id && (
          <Formik
            initialValues={{
              name: shoes.name,
              price: shoes.price,
              producer: shoes.producer.id,
            }}
            validationSchema={yup.object().shape({
              name: yup.string().required(),
              price: yup.number().min(0, "Min 0").max(200000, "Max 200000"),
            })}
            onSubmit={(values) => {
              handleSubmit(shoes.id, values);
            }}
          >
            <Form className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
              <div className="card h-100">
                <div className="card-body">
                  <div className="row gutters">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label htmlFor="name">
                          Name: <span className="spanRed">*</span>
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
                        <label htmlFor="price">
                          Price <span className="spanRed">*</span>
                        </label>
                        <Field
                          type="price"
                          className="form-control"
                          id="price"
                          name="price"
                          placeholder="Enter price "
                        />
                        <ErrorMessage
                          name="price"
                          component="div"
                          className="text-red"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row gutters">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label htmlFor="producer">
                          Name: <span className="spanRed">*</span>
                        </label>
                        <Field
                          as="select"
                          className="form-control"
                          name="producer"
                        >
                          {producer.map((p) => {
                            return (
                              <option key={p.id} value={p.id}>
                                {p.name}
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
        )}
      </div>
    </div>
  );
}
