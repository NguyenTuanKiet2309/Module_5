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

export const EditCustomer = async (id, customer) => {
  const res = await axios.patch("/customers/" + id, customer);
  return res.data;
};

export const getTypeCustomer = async () => {
  const res = await axios.get("/typeCustomer");
  return res.data;
};
export const getTypeCustomerById = async (id) => {
  const res = await axios.get("/typeCustomer/" + id);
  return res.data;
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
