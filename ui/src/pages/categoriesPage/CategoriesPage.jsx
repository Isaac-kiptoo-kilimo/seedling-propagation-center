import { useState } from "react";
import {
  CreateCategory,
  LoadingSpinner
} from "../../components";
import { createPortal } from "react-dom";
import Container from "./CategoriesPageCSS";
import { TfiFaceSad } from "react-icons/tfi";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {useGetAllCategoriesQuery, useRemoveCategoryMutation } from "../../features/categories/categoryApi";
import DeleteModal from "../../components/deleteModal/DeleteModal";
import { toggleAddCategoryModal, toggleEditCategoryMode } from "../../features/configurations/configurationSlice";

const CategoriesPage = () => {

  const dispatch = useDispatch();
  const { page } = useSelector((store) => store.categoryPages);
  const [searchQuery, setSearchQuery] = useState({});
  const { isLoading, isError, data } = useGetAllCategoriesQuery({
    page,
    ...searchQuery,
  });
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoryIdToDelete, setCategoryIdToDelete] = useState(null);
  const { isAddCategoryModalOpen } = useSelector(
    (store) => store.configurations
  );
  const handleEditClick = (category) => {
    dispatch(toggleAddCategoryModal(category));
  dispatch(toggleEditCategoryMode(true));  
  };
  const [removeCategory] = useRemoveCategoryMutation();
console.log("data category",data);

  const handleDeleteClick = (category) => {
    setCategoryIdToDelete(category._id);
    setIsModalOpen(true);
  };

  const handleDeletedCategory = async () => {
    try {
      const res = await removeCategory(categoryIdToDelete);
      if (res && res.error) {
        toast.error(res.error.data.message);
      } else {
        if (res && res.data.success === true) {
          toast.success(res.data.message);
          setTimeout(() => {
            setIsModalOpen(false);
          }, 2000);
        } else {
          toast.error(res.data.message);
        }
      }
    } catch (error) {
      toast.error("error while deleting category",error);
    }
  };
  return (
    <Container>
      <div className="categories__container">
        
        <div className="category__top--content">
        <div className="categories__title"><h4>Categories</h4></div>
          <div className="add-category-container">
            <button
              className="btn--primary btn--block category__btn"
              type="button"
              onClick={() => dispatch(toggleAddCategoryModal())}
              data-cy="add-category"
            >
              add new category
            </button>
          </div>
        </div>

        {isLoading ? (
          <LoadingSpinner />
        ) : isError ? (
          <p className="error__msg">
            something went wrong... <TfiFaceSad />
          </p>
        ) : data && data.categories.length === 0 ? (
          <div className="employees-zero">
            <p className="employees-zero__text">no category to display...</p>
          </div>
        ) : (
          <>
            <div className="category__grid">
              {data &&
                data.categories.map((category) => {
                  return (
                    <div
                      className="category"
                      key={category._id}
                    >
                      <p>{category.name}</p>
                      <span className="category__employee-count">
                        {category.productCount}
                      </span>
                      <p>{category.description}</p>
                        <div className="category__modal">
                          <button
                            className="category__edit"
                            data-cy="category__edit"
                            onClick={()=>handleEditClick(category)}
                            >
                            <MdEdit />
                            edit
                          </button>
                          <button
                            onClick={()=>handleDeleteClick(category)}
                            className="category__delete"
                            data-cy="category__delete"
                          >
                            <RiDeleteBin5Line />
                            delete
                          </button>
                        </div>
              
                    </div>
                  );
                })}

            </div>
          </>
        )}
      </div>
      {isAddCategoryModalOpen &&
        createPortal(
          <div className="category__modal--container">
            <div className="category__modal">
              <CreateCategory />
            </div>
          </div>,
          document.body
        )}
      {isModalOpen && (
        <DeleteModal
          handleDelete={handleDeletedCategory}
          setIsModalOpen={setIsModalOpen}
          item="category"
        />
      )}
    </Container>
  );
};

export default CategoriesPage;
