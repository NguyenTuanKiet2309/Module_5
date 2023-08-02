import { Button, Modal } from "react-bootstrap";
import { deleteShoes } from "../service/ShoesService";
import Swal from "sweetalert2";

export default function DeleteShoes(props) {
  const hanldeDelete = async (id) => {
    try {
      await deleteShoes(id);
      props.closeModal();

      Swal.fire({
        title: "Deleted",
        text: "Product was Deleted!!",
        icon: "success",
        confirmButtonText: "OK",
        timer: 1500,
      }).then(() => {
        props.getAllShoes();
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Modal show={props.isOpen} onHide={props.closeModal}>
        <Modal.Header>
          <Modal.Title>Delete Shoes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div>
              <form>
                <div className="modal-body">
                  <p>Are you sure want to delete {props.deleteName} ?</p>
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
          <Button
            variant="danger"
            onClick={() => {
              hanldeDelete(props.deleteId);
            }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
