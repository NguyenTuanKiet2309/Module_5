import axios from "axios";

export async function getListBook() {
  const res = await axios.get("http://localhost:8080/book");
  return res.data;
}

export async function createBook(book) {
  await axios.post("http://localhost:8080/book", book);
}

export async function deleteBook(id) {
  const res = await axios.delete("http://localhost:8080/book/" + id);
  return res.data;
}

export async function editBook(id, book) {
  const res = await axios.patch("http://localhost:8080/book/" + id, book);
  return res.data;
}
