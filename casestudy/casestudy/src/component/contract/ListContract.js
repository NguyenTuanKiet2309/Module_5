import { useEffect, useState } from "react";
import { getListContract } from "../furama_service/FuramaService";
import AddContractModal from "./ModalContract";

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
                  <AddContractModal/>
                 
                </div>
              </div>
            </div>
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                
                  <th>ID</th>
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
                      <td>{contracts.contract_id}</td>
                      <td>{contracts.check_in}</td>
                      <td>{contracts.check_out}</td>
                      <td>{contracts.deposit}</td>
                      <td>{contracts.total}</td>
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
