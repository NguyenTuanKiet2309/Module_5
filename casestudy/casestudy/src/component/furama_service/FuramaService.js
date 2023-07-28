import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";

export const getListCustomer = async () => {
  const res = await axios.get("/customers");
  return res.data;
};
export const DeleteCustomer = async (id) => {
  const res = await axios.delete("/customers/" + id);
  return res.data;
};

export const CreateCustomer = async (customer) => {
  await axios.post("/customers", customer);

};

export const getListService = async () => {
  const res = await axios.get("/services");
  return res.data;
};
export const DeleteService = async (id) => {
  const res = await axios.delete("/services/" + id);
  return res.data;
};

export const getListContract = async () => {
  const res = await axios.get("/contracts");
  return res.data;
};
