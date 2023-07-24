import { useEffect, useState } from "react";
import { deleteBook, getListBook } from "../service/BookService";
import { Link } from "react-router-dom";

export default function Library() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      const data = await getListBook();
      setBook(data);
    };
    getBook();
  });

  return (
    <>
      <h1>Library</h1>
      <Link to={"/create"}>
        <button type="button" className="btn btn-outline-success">
          Add Book
        </button>
      </Link>
      <table className="table table-striped ">
        <thead>
          <th>Title</th>
          <th>Quantity</th>
          <th>Delete</th>
          <th>Edit</th>
        </thead>
        <tbody>
          {book.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.quantity}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  type="button"
                  onClick={() => {
                    deleteBook(book.id)
                      .then(() => {
                        getListBook().then((data) => {
                          setBook(data);
                          alert("Delete Successful");
                        });
                      })
                      .catch(() => {
                        console.log("loi");
                      });
                  }}
                >
                  Delete
                </button>
              </td>
              <td>
                <Link to={`/edit/${book.id}`}>
                  <button className="btn btn-outline-secondary" type="submit">
                    Edit
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
