import "./App.css";
import { Formik, ErrorMessage, Field, Form } from "formik";
import * as yup from "yup";

function App() {

  return (
    <>
      <h1>Form Liên Hệ</h1>
      <Formik
        initialValues={{ Name: "", Email: "", Phone: "", Message: "" }}
        validationSchema={yup.object({
          Name: yup.string().required("Required"),
          Email: yup
            .string()
            .required("Required")
            .matches(
              /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              "Phải theo định dạng"
            ),
          Phone: yup.string().required("Required").length(10,"Phải 10 số"),
          Message: yup.string().required("Required"),
        })}
        onSubmit={() =>{
          alert("Thành công");
        }}
      >
        <Form>
          <div>
            <label htmlFor="Name">Name:</label>
            <Field id="Name" name="Name" type="text" />
            <ErrorMessage name="Name" component="div" className="text-red" />
          </div>
          <div>
            <label htmlFor="Email">Email:</label>
            <Field id="Email" name="Email" type="text" />
            <ErrorMessage name="Email" component="div"className="text-red" />
          </div>
          <div>
            <label htmlFor="Phone">Phone:</label>
            <Field id="Phone" name="Phone" type="text" />
            <ErrorMessage name="Phone" component="div"className="text-red" />
          </div>
          <div>
            <label htmlFor="Message">Message:</label>
            <Field id="Message" name="Message" type="text" />
            <ErrorMessage name="Message" component="div"className="text-red" />
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
