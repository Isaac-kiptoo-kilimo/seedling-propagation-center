import Container from "./CreateCategoryCSS";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { IoCloseCircle } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import {  FaSpinner } from "react-icons/fa";
import { useCreateCategoryMutation, useUpdateCategoryMutation } from "../../features/categories/categoryApi";
import { toggleAddCategoryModal, toggleEditCategoryMode } from "../../features/configurations/configurationSlice";
import { useDispatch, useSelector } from "react-redux";

const CreateCategory = () => {
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);
  const { isEditCategoryMode, selectedCategoryData } = useSelector(
    (store) => store.configurations
  );
  const [createCategory,{isLoading}] = useCreateCategoryMutation();
  const [updateCategory] = useUpdateCategoryMutation()
  const schema = yup.object().shape({
    name: yup.string().required("Category is required"),
    description: yup.string().required("Description is required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
  });

    useEffect(() => {
      if (isEditCategoryMode && selectedCategoryData) {
        setValue("name", selectedCategoryData.name);
        setValue("description", selectedCategoryData.description);
      } else {
        reset();
      }
    }, [isEditCategoryMode, selectedCategoryData, setValue, reset]);
  const handleCreateCategory = async (formData) => {
    try {
      const response= isEditCategoryMode
        ? await updateCategory({
            _id: selectedCategoryData._id,
            name: formData.name,
            description: formData.description
          })
        : await createCategory({
        name: formData.name,
        description: formData.description
      });
      if (response && response.error) {
        reset();
        toast.error(response.error.data.message);
      } else if (response && response.data) {
        if (response && response.data.success === true) {
          reset();
          toast.success(response.data.message);
          setTimeout(() => {
            dispatch(toggleAddCategoryModal());
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
    if (isEditCategoryMode) {
      dispatch(toggleEditCategoryMode(false));
    }
    dispatch(toggleAddCategoryModal());
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
              
              {isEditCategoryMode ? "Edit Category" : "Add Category"}
              </h2>
            <form
              className="add__category--form"
              data-cy="add__category--form"
              onSubmit={handleSubmit(handleCreateCategory)}
            >
              <div className="dert__group--input">
                <label htmlFor="category">category</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="e.g Fruits"
                  {...register("name")}
                  data-cy="category"
                />
                {errors.name && <p className="errors">{errors.name.message}</p>}
              </div>

              <div className="dert__group--input">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  placeholder="e.g write decription about the category"
                  {...register("description")}
                  data-cy="description"
                />
                {errors.description && <p className="errors">{errors.description.message}</p>}
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

export default CreateCategory;
