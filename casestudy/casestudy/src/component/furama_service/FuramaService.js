import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";

export const getListCustomer = async () => {
  const res = await axios.get("/customers");
  return res.data;
};

export const getListService = async () => {
  const res = await axios.get("/services");
  return res.data;
};
