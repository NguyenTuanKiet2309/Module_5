import { useEffect, useState } from "react";
import { getListService } from "../furama_service/FuramaService";
import {
  AddCustomerModal,
  DeleteCustomerModal,
  EditCustomerModal,
} from "../customer/ModalCustomer";
import { DeleteServiceModal } from "./ModalService";

export default function ListService() {
  const [service, setService] = useState([]);
  const [deletedId, setDeletedId] = useState(null);
  const [isOpenModalDeleteService, setIsOpenDeleteService] = useState(false);

  const openModalDeleteService = (id) => {
    setIsOpenDeleteService(true);
    setDeletedId(id);
    console.log("delete " + id);
  };

  const closeModalDeleteService = () => setIsOpenDeleteService(false);

  function getList() {
    const getService = async () => {
      const data = await getListService();
      setService(data);
    };
    getService();
  }

  useEffect(() => {
    getList();
  });

  return (
    <>
      <div className="container-xl container">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-6">
                  <h2>
                    Manage <b>Service</b>
                  </h2>
                </div>
              </div>
            </div>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Usage Area(m2)</th>
                  <th>Rental Cost($)</th>
                  <th>Capacity(People)</th>
                  <th>Type Of Rent</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {service.map((s) => {
                  return (
                    <tr key={s.id}>
                      <td>{s.Service}</td>
                      <td>{s.area}</td>
                      <td>{s.Costs}</td>
                      <td>{s.MaxPeople}</td>
                      <td>{s.Type}</td>
                      <td>
                        <EditCustomerModal />
                        <a
                          onClick={() => {
                            openModalDeleteService(s.id);
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
            <DeleteServiceModal
              isOpen={isOpenModalDeleteService}
              closeModal={closeModalDeleteService}
              deleteId={deletedId}
            />
            <div className="clearfix">
              <div className="hint-text">
                Showing <b>5</b> out of <b>25</b> entries
              </div>
              <ul className="pagination">
                <li className="page-item disabled">
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
                <li className="page-item active">
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
