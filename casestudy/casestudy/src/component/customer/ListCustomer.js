import { useEffect, useState } from "react";
import {
  AddCustomerModal,
  EditCustomerModal,
  DeleteCustomerModal,
} from "./DeleteCustomerModal";
import { getListCustomer } from "../furama_service/FuramaService";
import { Link } from "react-router-dom";

export default function ListCustomer() {
  const [customers, setCustomers] = useState([]);
  const [deletedId, setDeletedId] = useState(null);
  const [customerName, setCustomerName] = useState("");
  const [idCardCustomer, setIdCardCustomer] = useState("");
  const [isOpenModalDeleteCustomer, setIsOpenDeleteCustomer] = useState(false);

  const openModalDeleteCustomer = (id, customerName, idCard) => {
    setIsOpenDeleteCustomer(true);
    setDeletedId(id);
    setCustomerName(customerName);
    setIdCardCustomer(idCard);
    console.log("delete " + id, customerName, idCard);
  };

  const closeModalDeleteCustomer = () => setIsOpenDeleteCustomer(false);

  function getList() {
    const getCustomer = async () => {
      const data = await getListCustomer();
      setCustomers(data);
    };
    getCustomer();
  }

  useEffect(() => {
    getList();
  }, []);

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
                  <Link
                    to="/customer/create"
                    className="btn btn-success"
                    data-toggle="modal"
                  >
                    <i aria-hidden="true" className="material-icons">
                      
                    </i>{" "}
                    <span>Add New Customer</span>
                  </Link>
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
                  return (
                    <tr key={customer.id}>
                      <td>{customer.id}</td>
                      <td>{customer.name}</td>
                      <td>{customer.date_of_birth}</td>
                      <td>{customer.gender}</td>
                      <td>{customer.id_card}</td>
                      <td>{customer.phone_number}</td>
                      <td>{customer.email}</td>
                      <td>{customer.customer_type.type}</td>
                      <td>{customer.address}</td>
                      <td>
                        <Link
                          to={`/customer/edit/${customer.id}`}
                          className="edit"
                        >
                          <i
                            className="material-icons"
                            data-toggle="tooltip"
                            title="Edit"
                          >
                            
                          </i>
                        </Link>

                        <a
                          onClick={() => {
                            openModalDeleteCustomer(
                              customer.id,
                              customer.name,
                              customer.id_card
                            );
                          }}
                          className="delete"
                        >
                          <i
                            className="material-icons"
                            data-toggle="tooltip"
                            title="Delete"
                          >
                            
                          </i>
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <DeleteCustomerModal
              isOpen={isOpenModalDeleteCustomer}
              closeModal={closeModalDeleteCustomer}
              deleteId={deletedId}
              customerName={customerName}
              idCardCustomer={idCardCustomer}
              getAllCustomer={getList}
            />
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
