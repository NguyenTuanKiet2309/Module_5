import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { createBook, editBook, getListBook } from "../service/BookService";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
function EditBook() {
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const params = useParams();

  function findBookById() {
    const getList = async () => {
      const data = await getListBook();
      const bk = data.filter((s) => s.id === +params.id)[0];
      setBook(bk);
    };
    getList();
  }

  useEffect(() => {
    findBookById();
  }, [params.id]);

  return (
    <>
      <h1>Edit Books</h1>
      <Formik
        initialValues={{
          title: book.title || "",
          quantity: book.quantity || 0,
        }}
        validationSchema={yup.object({
          title: yup.string().required(),
          quantity: yup.number().required(),
        })}
        onSubmit={(values) => {
          editBook(book.id, values)
            .then(() => {
              alert("Edit Successful");
              navigate("/");
            })
            .catch(() => {
              navigate(`/edit/${book.id}`);
            });
        }}
      >
        <Form>
          <div>
            <label htmlFor="title">Title:</label>
            <Field
              id="title"
              type="text"
              placeholder={book.title}
              name="title"
            />
            <ErrorMessage name="title" component="div" />
          </div>
          <div>
            <label htmlFor="quantity">Quantity</label>
            <Field
              id="quantity"
              placeholder={book.quantity}
              type="number"
              name="quantity"
            />
            <ErrorMessage name="quantity" component="div" />
          </div>
          <div>
            <button type="submit">Edit</button>
          </div>
        </Form>
      </Formik>
    </>
  );
}
export default EditBook;
