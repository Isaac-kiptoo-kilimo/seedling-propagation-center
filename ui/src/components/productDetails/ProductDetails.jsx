import { FaRegTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import DeleteModal from "../deleteModal/DeleteModal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useRemoveProductMutation } from "../../features/products/productApi";
import Container from "./ProductDetailsCSS";
import {
  setSelectedProduct,
  toggleAddProductModal,
  toggleEditMode,
} from "../../features/configurations/configurationSlice";
import CreateOfferModal from "../createOfferModal/CreateOfferModal";

const ProductDetails = ({ product, isAdmin }) => {
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
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOfferModalOpen, setIsOfferModalOpen] = useState(false);
  const handleEditProduct = (product) => {
    dispatch(setSelectedProduct(product));
    dispatch(toggleAddProductModal(product));
    dispatch(toggleEditMode(true));
  };

  const [RemoveProduct, { isLoading }] = useRemoveProductMutation();
  const handleCreateOffer = () => {
    setIsOfferModalOpen(true);
  };

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
    <Container className="product__row">
      <div className="single-product">
        <span className="product__placeholder">
          <img
            className="product__img"
            src={productImage}
            alt="product image"
          />
        </span>
      </div>
      <p className="single-product__name">{`${productName}`}</p>
      <div className="single-product__category">{category.name}</div>
      <div className="single-product__description">{productDescription}</div>
      <div className="single-product__price">
        {new Intl.NumberFormat("kenya", {
          style: "currency",
          currency: "KSH",
        }).format(price)}
      </div>
      <div className="single-product__offerprice">
        {offerPrice
          ? new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "KSH",
            }).format(offerPrice)
          : "NA"}
      </div>
      <div className="single-product__quantity">
        <div>
          <span key={_id} className="quantity">
            {Number(productQuantity) <= 0 ? "Out of Stock" : productQuantity}
          </span>
        </div>
      </div>

      <div className="single-product__actions">
        {/* <button className="single-product__edit"
        
          onClick={()=>handleCreateOffer()}
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
            disabled={isLoading}
          >
            <FaRegTrashAlt />
          </button>
        )}
      </div>

      {isOfferModalOpen && (
        <CreateOfferModal setIsOfferModalOpen={setIsOfferModalOpen} _id={_id} />
      )}

      {isModalOpen && (
        <DeleteModal
          handleDelete={handleDeleteProduct}
          item="product"
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </Container>
  );
};

export default ProductDetails;
