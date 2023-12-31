import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Content from "./component/navigation/Content";
import ListContract from "./component/contract/ListContract";
import Header from "./component/navigation/Header";
import Footer from "./component/navigation/Footer";
import ListCustomer from "./component/customer/ListCustomer";
import ListService from "./component/service/ListService";
import CustomerEdit from "./component/customer/EditCustomer";
import CustomerCreate from "./component/customer/CreateCustomer";
import ContractCreate from "./component/contract/CreateContract";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/contract" element={<ListContract />} />
        <Route path="/contract/create" element={<ContractCreate />} />
        <Route path="/customer" element={<ListCustomer />} />
        <Route path="/customer/create" element={<CustomerCreate />} />
        <Route path="/customer/edit/:id" element={<CustomerEdit />} />
        <Route path="/service" element={<ListService />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
