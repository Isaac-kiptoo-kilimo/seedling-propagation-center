import Container from "./DeleteConfirmationModalCSS";
import { IoMdCloseCircle } from "react-icons/io";

const DeleteConfirmationModal = ({onClose,removeFromCart}) => {
  return (
    <Container >
      <div className="delete-confirmation-overlay" onClick={(e) => e.stopPropagation()} >
        <div className="delete--modal-main-card"  >
          <div className="close--modal-btn">
            <IoMdCloseCircle size={25} onClick={onClose} />
          </div>
          <div className="delete--confirmation-content">
            <div className="confirmation-modal-header">
              <p>Are you sure removing this item from your shopping cart?</p>
            </div>
            <div className="confirm-delete-btns">
              <button className="yes-btn" onClick={removeFromCart}>Yes</button>
              <button className="no-btn"  onClick={onClose}>No</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DeleteConfirmationModal;
