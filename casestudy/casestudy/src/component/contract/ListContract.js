import { useEffect, useState } from "react";
import { getListContract } from "../furama_service/FuramaService";
import AddContractModal from "./ModalContract";
import { Link } from "react-router-dom";

export default function ListContract() {
  const [contract, setContract] = useState([]);

  function getList() {
    const getContract = async () => {
      const data = await getListContract();
      setContract(data);
    };
    getContract();
  }

  useEffect(() => {
    getList();
  });
  return (
    <>
      <div class="container-xl container">
        <div class="table-responsive">
          <div class="table-wrapper">
            <div class="table-title">
              <div class="row">
                <div class="col-sm-6">
                  <h2>
                    Contract <b>Service</b>
                  </h2>
                </div>
                <div class="col-sm-6">
                <Link
                    to="/contract/create"
                    className="btn btn-success"
                    data-toggle="modal"
                  >
                    <i aria-hidden="true" className="material-icons">
                      
                    </i>{" "}
                    <span>Add New Contract</span>
                  </Link>
                 
                </div>
              </div>
            </div>
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                
                  <th>ID</th>
                  <th>Customer</th>
                  <th>Service</th>
                  <th>Day Start</th>
                  <th>Day End</th>
                  <th>Pre-order amount</th>
                  <th>Total payment amount</th>
                </tr>
              </thead>
              <tbody>
                {contract.map((contracts) => {
                  return (
                    <tr key={contracts.contract_id}>
                      <td>{contracts.contractNumber}</td>
                      <td>{contracts.customer.name}</td>
                      <td>{contracts.service.service}</td>
                      <td>{contracts.startDate}</td>
                      <td>{contracts.endDate}</td>
                      <td>{contracts.prepaidAmount}</td>
                      <td>{contracts.totalPayment}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
