import { useState } from "react";
import { createBook, getListBook } from "../service/BookService";
import { useNavigate } from "react-router-dom";
export default function Create() {
  const [book, setBook] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const data = await getListBook();
    const title = document.getElementById("title").value;
    const quantity = document.getElementById("quantity").value;

    const obj = {
      title: title,
      quantity: quantity,
    };

    await createBook(obj);
    alert("Add Successful");
    navigate("/");
  };
  
  return (
    <>
      <h1>Add New Book</h1>
      <form>
        <label>Title:</label>
        <input name="title" id="title" placeholder="Title"></input>
        <br />
        <label>Quantity:</label>
        <input name="quantity" id="quantity" placeholder="Quantity"></input>
        <button type="button" onClick={handleSubmit}>
          Add
        </button>
      </form>
    </>
  );
}
