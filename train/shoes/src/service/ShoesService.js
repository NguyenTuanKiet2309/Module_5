import axios from "axios";


export const getListShoes = async (page) => {
  const res = await axios.get(`http://localhost:8080/shoes?_page=${page}&_limit=2`);
  return res.data;
};

export const findById = async (id) => {
  const res = await axios.get(`http://localhost:8080/shoes/` + id);
  return res.data;
};

export const deleteShoes = async (id) => {
  const res = await axios.delete("http://localhost:8080/shoes/" + id);
  return res.data;
};

export const createShoes = async (shoes) => {
  await axios.post("http://localhost:8080/shoes/", shoes);
};

export const editShoes = async (id, shoes) => {
  const res = await axios.patch("http://localhost:8080/shoes/" + id, shoes);
  return res.data;
};

export const searchShoes = async (name) => {
  const res = await axios.get("http://localhost:8080/shoes?name_like=" + name);
  return res.data;
};
