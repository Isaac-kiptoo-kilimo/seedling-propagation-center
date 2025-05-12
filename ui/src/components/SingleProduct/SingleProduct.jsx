import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import DeleteModal from "../deleteModal/DeleteModal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useRemoveProductMutation } from "../../features/products/productApi";
import Container from "./SingleProductCSS";
import {
  setSelectedProduct,
  toggleAddProductModal,
  toggleEditMode,
} from "../../features/configurations/configurationSlice";
import { FaTags } from "react-icons/fa6";
import CreateOfferModal from "../createOfferModal/CreateOfferModal";
const SingleProduct = ({ product, isAdmin }) => {
  const {
    _id,
    productImage,
    productName,
    category,
    productDescription,
    price,
    offerPrice,
    productQuantity,
  } = product;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOfferModalOpen, setIsOfferModalOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEditProduct = (product) => {
    dispatch(setSelectedProduct(product));
    dispatch(toggleAddProductModal(product));
    dispatch(toggleEditMode(true));
  };

  const handleCreateOffer = () => {
    setIsOfferModalOpen(true);
  };

  const [RemoveProduct] = useRemoveProductMutation();

  const handleDeleteProduct = async () => {
    try {
      const response = await RemoveProduct(_id);
      if (response && response.error) {
        toast.error(response.error.data.message);
      } else {
        if (response && response.data.success === true) {
          toast.success(response.data.message);
          setTimeout(() => {
            setIsModalOpen(false);
          }, 1000);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      toast.error("An error occured while deleting");
    }
  };
  return (
    <Container>
      <div className="single-product">
        <div className="product__placeholder">
          <img src={productImage} alt="product image" />
        </div>
        <div className="single-product__info">
          <h5 className="header__title">Name</h5>
          <h5 className="header__title">Category</h5>
          <h5 className="header__title">Price</h5>
          <h5 className="header__title">Discounted Price</h5>
          <h5 className="header__title">Quantity</h5>
        </div>
        <div className="single__product__group">
          <span className="single-product__name">{productName}</span>
          <span className="single-product__name">{category.name}</span>
          <span className="single-product__name">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "KSH",
            }).format(price)}
          </span>
          <span className="single-product__name">
            {offerPrice
              ? new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "KSH",
                }).format(offerPrice)
              : "NA"}
          </span>
          <span className="single-product__name">{Number(productQuantity) <= 0 ? "Out of Stock" : productQuantity}</span>
        </div>

        <div className="product-buttons">
          {/* <button
            className="single-product__edit"
            onClick={() => handleCreateOffer()}
          >
            <FaTags size={20} color="#374151" />
          </button> */}
          <button
            className="single-product__edit"
            onClick={() => handleEditProduct(product)}
          >
            <MdEdit />
          </button>
          {isAdmin && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="single-product__delete"
            >
              <FaTrash />
            </button>
          )}
        </div>
      </div>
      {isOfferModalOpen && (
        <CreateOfferModal setIsOfferModalOpen={setIsOfferModalOpen} _id={_id} />
      )}
      {isModalOpen && (
        <DeleteModal
          handleDelete={handleDeleteProduct}
          setIsModalOpen={setIsModalOpen}
          item="product"
        />
      )}
    </Container>
  );
};

export default SingleProduct;
