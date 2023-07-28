import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { DeleteCustomer } from "../furama_service/FuramaService";

import Swal from "sweetalert2";

export function DeleteCustomerModal(props) {
  function hanldeDelete(customerId) {
    const deleteCustomers = async () => {
      try {
        await DeleteCustomer(customerId);
        props.closeModal();
        Swal.fire({
          title: " Deleted!",
          text: "Customer has been deleted.",
          icon: "success",
          confirmButtonText: "OK",
          timer: 1500,
        }).then(() => {
          props.getAllCustomer();
        });
      } catch (error) {
        console.log("error");
      }
    };
    deleteCustomers();
  }

  return (
    <>
      <Modal show={props.isOpen} onHide={props.closeModal}>
        <Modal.Header>
          <Modal.Title>Delete Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div>
              <form>
                <div className="modal-body">
                  <p>
                    Are you sure want to delete customer{" "}
                    <span className="spanRed">{props.customerName}</span> and
                    has{" "}
                    <span className="spanRed">
                      {" "}
                      ID Card : {props.idCardCustomer}{" "}
                    </span>{" "}
                    ?
                  </p>
                  <p className="text-warning">
                    <small>This action cannot be undone.</small>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.closeModal}>
            Close
          </Button>
          <Button variant="danger" onClick={() => hanldeDelete(props.deleteId)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
