import { ToastContainer} from "react-toastify";
import Container from "./CompletionModalCSS";
import { FaSpinner } from "react-icons/fa";
import { useEffect, useState } from "react";

const CompletionModal = ({
  item,
  setIsCompleteModalOpen,
  action,
  handleCompletion,
  isLoading
}) => {
  const actionText = action || "complete";
  const [isHovered, setIsHovered] = useState(false);
  const [shouldClose, setShouldClose] = useState(false);

  const handleCompletionResponse = async () => {
    handleCompletion();
    setShouldClose(true);
  };

  useEffect(() => {
    if (shouldClose) {
      const timer = setTimeout(() => {
        setIsCompleteModalOpen(false);
      }, 2000); 

      return () => clearTimeout(timer); 
    }
  }, [shouldClose, setIsCompleteModalOpen]);
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
      <div className="complete-modal">
        <h5 className="complete-modal__text">
          {`are you sure you want to ${actionText} this ${item}?`}
        </h5>
        <div className="complete-modal__buttons">
          <button
            onClick={() => setIsCompleteModalOpen(false)}
            className="complete-modal__no"
          >
            no
          </button>
       
        
          <button
            disabled={isLoading}
            onClick={handleCompletionResponse}
            className={`complete-modal__yes${isLoading ? "disabled" : ""}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            data-cy="complete-modal__yes"
          >
            {isHovered && isLoading ? <FaSpinner /> : "yes"}
          </button>
        </div>
      </div>
    </Container>
  );
};

export default CompletionModal;
