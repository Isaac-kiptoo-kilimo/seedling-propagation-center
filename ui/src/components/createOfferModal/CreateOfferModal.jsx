import Container from "./CreateOfferModalCSS";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { IoCloseCircle } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import {  FaSpinner } from "react-icons/fa";
import {  useUpdateCategoryMutation } from "../../features/categories/categoryApi";
import { toggleAddCategoryModal, toggleEditCategoryMode } from "../../features/configurations/configurationSlice";
import { useDispatch, useSelector } from "react-redux";
import { useApplyProductOfferMutation } from "../../features/products/productApi";

const CreateOfferModal = ({setIsOfferModalOpen,_id}) => {
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);
 
  const [applyProductOffer,{isLoading}] = useApplyProductOfferMutation();

  const schema = yup.object().shape({
    offerPrice: yup.number().required("offerPrice is required")
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
  });

  
  const handleCreateOffer = async (formData) => {
    try {
      const response=  await applyProductOffer({
            _id,
            offerPrice: formData.offerPrice
          })
      if (response && response.error) {
        reset();
        toast.error(response.error.data.message);
      } else if (response && response.data) {
        if (response && response.data.success === true) {
          reset();
          toast.success(response.data.message);
          setTimeout(() => {
            setIsOfferModalOpen(false);
          }, 2000);
        } else {
          reset();
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      reset();
      toast.error("something went wrong",error);
    }
  };

  const handleCloseModal = () => {
   setIsOfferModalOpen(false);
  };
  

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
      <div className="modal-overlay">
        <div className="add__category--modal">
          <div className="add__category--modal--content">
            <div className="add__category--close">
              <IoCloseCircle onClick={handleCloseModal} />
            </div>

            <h2 className="category__modal--heading"> 
              
              Create an Offer for this product
              </h2>
            <form
              className="add__category--form"
              data-cy="add__category--form"
              onSubmit={handleSubmit(handleCreateOffer)}
            >
              <div className="dert__group--input">
                <label htmlFor="category">Offer Price</label>
                <input
                  type="text"
                  id="offer"
                  name="offer"
                  placeholder="ksh"
                  {...register("offerPrice")}
                  data-cy="offer"
                />
                {errors.offerPrice && <p className="errors">{errors.offerPrice.message}</p>}
              </div>
             
              <div className="add__category--btn">
                <div className="action-btn">
                  <button
                    onClick={handleCloseModal}
                    className="category__add__button--sec"
                    type="button"
                  >
                    Cancel
                  </button>
                </div>
                <div className="action-btn">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`btn--primary category__add__btn-pry ${
                      isLoading ? "disabled" : ""
                    }`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    {isHovered && (isLoading )? <FaSpinner /> : "Submit"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CreateOfferModal;
