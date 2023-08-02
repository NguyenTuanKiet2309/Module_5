import axios from "axios";


export const getListProducer = async () => {
  const res = await axios.get("http://localhost:8080/producer");
  return res.data;
};

export const getProducerById = async (id) => {
    const res = await axios.get("http://localhost:8080/producer/" + id);
    return res.data;
  };