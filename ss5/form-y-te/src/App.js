import { Formik, ErrorMessage, Field, Form } from "formik";
import * as yup from "yup";
import "./App.css";

function App() {
  return (
    <>
      <h1>Medical Declaration</h1>
      <Formik
        initialValues={{
          Name: "",
          IdCard: "",
          Year: "",
          Gender: "",
          Nationality: "",
          Company: "",
          Position: "",
          City: "",
          District: "",
          Wards: "",
          Address: "",
          Phone: "",
          Email: "",
        }}
        validationSchema={yup.object({
          Name: yup.string().required("Name must be Required"),
          IdCard: yup.string().required(),
          Year: yup
            .number()
            .min(1900, "Minimum 1900")
            .max(2023, "Minimax 2023")
            .required("Year must be Required"),
          Nationality: yup.string().required("Nationality must be Required"),
          City: yup.string().required("City must be Required"),
          District: yup.string().required("District must be Required"),
          Wards: yup.string().required("Wards must be Required"),
          Address: yup.string().required("Address must be Required"),
          Email: yup
            .string()
            .required("Email must be Required")
            .matches(
              /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              "Invalid email address"
            ),
          Phone: yup.string().required("Phne must be Required").length(10, "Must 10 num"),
        })}
        onSubmit={() => {
          alert("Successful");
        }}
      >
        <Form>
          <div>
            <label htmlFor="Name">Name</label>
            <Field type="text" id="Name" name="Name" />
            <ErrorMessage
              name="Name"
              component="div"
              className="text-red"
            ></ErrorMessage>
          </div>
          <div>
            <label htmlFor="IdCard">IdCard</label>
            <Field type="text" id="IdCard" name="IdCard" />
            <ErrorMessage
              name="IdCard"
              component="div"
              className="text-red"
            ></ErrorMessage>
          </div>
          <div>
            <label htmlFor="Year">Year Of Birth</label>
            <Field type="number" id="Year" name="Year" />
            <ErrorMessage
              name="Year"
              component="div"
              className="text-red"
            ></ErrorMessage>
          </div>
          <div>
            <label>Gender</label>
            <Field type="radio" id="male" name="gender" value="Male" /> Male
            <Field type="radio" id="female" name="gender" value="Female" />{" "}
            Female
          </div>
          <div>
            <label htmlFor="Nationality">Nationality</label>
            <Field type="text" id="Nationality" name="Nationality" />
            <ErrorMessage
              name="Nationality"
              component="div"
              className="text-red"
            ></ErrorMessage>
          </div>
          <div>
            <label htmlFor="Company">Company</label>
            <Field type="text" id="Company" name="Company" />
          </div>
          <div>
            <label htmlFor="Position">Position</label>
            <Field type="text" id="Position" name="Position" />
          </div>
          <div>
            <label htmlFor="healthInsurance">Health Insurance</label>
            <Field
              type="checkbox"
              id="healthInsurance"
              name="healthInsurance"
            />
          </div>
          <h3>Contact-address at Vietnam</h3>
          <div>
            <label htmlFor="City">City</label>
            <Field type="text" id="City" name="City" />
            <ErrorMessage
              name="City"
              component="div"
              className="text-red"
            ></ErrorMessage>
          </div>
          <div>
            <label htmlFor="District">District</label>
            <Field type="text" id="District" name="District" />
            <ErrorMessage
              name="District"
              component="div"
              className="text-red"
            ></ErrorMessage>
          </div>
          <div>
            <label htmlFor="Wards">Wards</label>
            <Field type="text" id="Wards" name="Wards" />
            <ErrorMessage
              name="Wards"
              component="div"
              className="text-red"
            ></ErrorMessage>
          </div>
          <div>
            <label htmlFor="Address"> Address</label>
            <Field type="text" id="Address" name="Address" />
            <ErrorMessage
              name="Address"
              component="div"
              className="text-red"
            ></ErrorMessage>
          </div>
          <div>
            <label htmlFor="Phone">Phone Number</label>
            <Field type="text" id="Phone" name="Phone" />
            <ErrorMessage
              name="Phone"
              component="div"
              className="text-red"
            ></ErrorMessage>
          </div>
          <div>
            <label htmlFor="Email">Email</label>
            <Field type="text" id="Email" name="Email" />
            <ErrorMessage
              name="Email"
              component="div"
              className="text-red"
            ></ErrorMessage>
          </div>
          <div>
            <p>
              In the past 14 days, have you visited any country or territory
              (Can go through many countries)
            </p>
            <Field type="text" id="q1" name="q1" />
          </div>
          <div>
            <p>
              During the past 14 days, have you experienced any of the following
              symptoms?
            </p>
            <div>
              <Field type="checkbox" name="q2" value="Fever" />
              <span>Fever</span>
            </div>
            <div>
              <Field type="checkbox" name="q2" value="Cough" />
              <span>Cough</span>
            </div>
            <div>
              <Field type="checkbox" name="q2" value="Difficulty breathing" />
              <span>Difficulty breathing</span>
            </div>
            <div>
              <Field type="checkbox" name="q2" value="Pneumonia" />
              <span>Pneumonia</span>
            </div>
            <div>
              <Field type="checkbox" name="q2" value="Sore throat" />
              <span>Sore throat</span>
            </div>
            <div>
              <Field type="checkbox" name="q2" value="Tired" />
              <span>Tired</span>
            </div>
          </div>
          <div>
            <p htmlFor="q3">
              During the past 14 days, have you been in contact with?
            </p>
            <div>
              <Field
                type="checkbox"
                name="q3"
                value="Patients who are sick or suspected of having
                        COVID-19"
              />
              <span>Patients who are sick or suspected of having COVID-19</span>
            </div>
            <div>
              <Field
                type="checkbox"
                name="q3"
                value="People from countries with COVID-19 disease"
              />
              <span>People from countries with COVID-19 disease</span>
            </div>
            <div>
              <Field
                type="checkbox"
                name="q3"
                value=" People with symptoms (Fever, cough, shortness of
                        breath, pneumonia)"
              />
              <span>
                People with symptoms (Fever, cough, shortness of breath,
                pneumonia)
              </span>
            </div>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
    </>
  );
}

export default App;
