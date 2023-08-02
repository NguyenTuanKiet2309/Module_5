import { useEffect, useState } from "react";
import { getListShoes, searchShoes } from "../service/ShoesService";
import { Link } from "react-router-dom";
import DeleteShoes from "./DeleteShoes";

export default function ListShoes() {
  const [shoes, setShoes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [deleteId, setDeteleId] = useState(null);
  const [deleteName, setDeleteName] = useState(null);

  const isOpenModal = (id, name) => {
    setIsOpen(true);
    setDeteleId(id);
    setDeleteName(name);
  };

  const closeModal = () => setIsOpen(false);

  function showList() {
    const getList = async () => {
      const data = await getListShoes(currentPage);
      setShoes(data);
    };
    getList();
  }

  useEffect(() => {
    showList();
  }, [currentPage]);

  const nextPage = async () => {
    const next = currentPage + 1;
    const data = await getListShoes(next);
    if (data.length > 0) {
      setCurrentPage(next);
    }
  };

  const previousPage = async () => {
    const pre = currentPage - 1;
    if (pre > 0) {
      setCurrentPage(pre);
    }
  };

  const searchByName = async () => {
    const search = document.getElementById("search").value;
    const data = await searchShoes(search);
    setShoes(data);
  };

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
                <div className="col-sm-6"></div>
                <div className="col-sm-6">
                  <input id="search" name="search" type="text"></input>
                  <button
                    onClick={() => {
                      searchByName();
                    }}
                    type="button"
                  >
                    Search
                  </button>

                  <Link
                    to="/create"
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
                  <th>Price</th>
                  <th>Producer</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {shoes.map((s, index) => {
                  return (
                    <tr key={index}>
                      <td>{s.id}</td>
                      <td>{s.name}</td>
                      <td>{s.price}</td>
                      <td>{s.producer.name}</td>
                      <td>
                        <a
                          onClick={() => {
                            isOpenModal(s.id, s.name);
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

                        <Link to={`/edit/${s.id}`} className="edit">
                          <i
                            className="material-icons"
                            data-toggle="tooltip"
                            title="Edit"
                          >
                            
                          </i>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <DeleteShoes
                isOpen={isOpen}
                closeModal={closeModal}
                deleteId={deleteId}
                deleteName={deleteName}
                getAllShoes={showList}
              />
            </table>
            <div className="clearfix">
              <ul className="pagination">
                <button onClick={() => previousPage()} className="page-link">
                  {" "}
                  <li className="page-item " />
                  Previous
                </button>
                <button onClick={() => nextPage()} className="page-link">
                  {" "}
                  <li className="page-item" />
                  Next
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
