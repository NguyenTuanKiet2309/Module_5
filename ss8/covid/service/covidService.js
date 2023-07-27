import axios from "axios";

 export const getListCovid = async () =>{
    const response = await axios.get('http://localhost:8080/covids');
    return response.data;
}