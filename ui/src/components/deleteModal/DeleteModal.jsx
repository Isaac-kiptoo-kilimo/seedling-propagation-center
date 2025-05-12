import { ToastContainer} from "react-toastify";
import Container from "./DeleteModalCSS";
import { FaSpinner } from "react-icons/fa";
import { useEffect, useState } from "react";

const DeleteModal = ({
  item,
  setIsModalOpen,
  action,
  handleDelete,
  isLoading
}) => {
  const actionText = action || "delete";
  const [isHovered, setIsHovered] = useState(false);
  const [shouldClose, setShouldClose] = useState(false);

  const handleDeletedResponse = async () => {
    handleDelete();
    setShouldClose(true);
  };

  useEffect(() => {
    if (shouldClose) {
      const timer = setTimeout(() => {
        setIsModalOpen(false);
      }, 2000); 

      return () => clearTimeout(timer); 
    }
  }, [shouldClose, setIsModalOpen]);
  return (
    <Container>
    <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="delete-modal">
        <h5 className="delete-modal__text">
          {`are you sure you want to ${actionText} this ${item}?`}
        </h5>
        <div className="delete-modal__buttons">
          <button
            onClick={() => setIsModalOpen(false)}
            className="delete-modal__no"
          >
            no
          </button>
       
        
          <button
            disabled={isLoading}
            onClick={handleDeletedResponse}
            className={`delete-modal__yes${isLoading ? "disabled" : ""}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            data-cy="delete-modal__yes"
          >
            {isHovered && isLoading ? <FaSpinner /> : "yes"}
          </button>
        </div>
      </div>
    </Container>
  );
};

export default DeleteModal;
