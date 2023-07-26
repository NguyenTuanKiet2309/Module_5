import { useEffect, useState } from "react";
import axios from "axios";
import {
  AddCustomerModal,
  EditCustomerModal,
  DeleteCustomerModal,
} from "./ModalCustomer";
import { getListCustomer } from "../furama_service/FuramaService";
export default function ListCustomer() {
  const [customers, setCustomers] = useState([]);

  function getList() {
    const getCustomer = async () => {
      const data = await getListCustomer();
      setCustomers(data);
    };
    getCustomer();
  }

  useEffect(() => {
    getList();
  });
  return (
    <>
      <div className="container-xl container-fluid">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-6">
                  <h2>
                    Customer <b>Service</b>
                  </h2>
                </div>
                <div className="col-sm-6">
                  <AddCustomerModal />
                </div>
              </div>
            </div>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Name</th>
                  <th>DayOfBirth</th>
                  <th>Gender</th>
                  <th>Citizen</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Type Customer</th>
                  <th>Address</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => {
                  return(
                  <tr key={customer.id}>
                    <td>{customer.id}</td>
                    <td>{customer.name}</td>
                    <td>{customer.date_of_birth}</td>
                    <td>{customer.gender}</td>
                    <td>{customer.id_customerard}</td>
                    <td>{customer.phone_number}</td>
                    <td>{customer.email}</td>
                    <td>{customer.customer_type}</td>
                    <td>{customer.address}</td>
                    <td>
                      <EditCustomerModal />
                      <DeleteCustomerModal />
                    </td>
                  </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="clearfix">
              <div className="hint-text">
                Showing <b>5</b> out of <b>25</b> entries
              </div>
              <ul className="pagination">
                <li className="page-item">
                  <a href="/#">Previous</a>
                </li>
                <li className="page-item">
                  <a href="/#" className="page-link">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a href="/#" className="page-link">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a href="/#" className="page-link">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a href="/#" className="page-link">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a href="/#" className="page-link">
                    5
                  </a>
                </li>
                <li className="page-item">
                  <a href="/#" className="page-link">
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
