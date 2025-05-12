import { useDispatch, useSelector } from "react-redux";
import Container from "./AddProductModalCSS";
import { IoIosClose } from "react-icons/io";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import {
  useCreateProductMutation,
  useUpdateProductMutation,
} from "../../features/products/productApi";
import {
  toggleAddProductModal,
  toggleEditMode,
} from "../../features/configurations/configurationSlice";
import { useGetAllCategoriesQuery } from "../../features/categories/categoryApi";
import Switch from "react-switch";

const AddProductModal = () => {
  const dispatch = useDispatch();
  const { isEditMode, selectedProduct } = useSelector(
    (store) => store.configurations
  );
  const [createProduct, { isLoading }] = useCreateProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const { data } = useGetAllCategoriesQuery();
  const [imageFile, setImageFile] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const schema = yup.object().shape({
    productName: yup.string().required("Product Name is required"),
    productDescription: yup.string().required("Description is required"),
    price: yup
      .number()
      .typeError("Price must be a number")
      .required("Price is required"),
    productQuantity: yup
      .number()
      .typeError("Quantity must be a number")
      .required("Quantity is required"),
    image: yup
      .mixed()
      .test("fileRequired", "Image is required", (value) => {
        return !!value?.length;
      }),
    onOffer: yup.boolean(),
    offerPrice: yup.number().when("onOffer", {
      is: true,
      then: (schema) =>
        schema
          .typeError("Offer Price must be a number")
          .required("Offer Price is required"),
      otherwise: (schema) => schema.notRequired(),
    }),
    category: yup.string().required("Category is required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      onOffer: false,
    },
  });

  const onOfferValue = watch("onOffer");

  useEffect(() => {
    if (isEditMode && selectedProduct) {
      reset({
        productName: selectedProduct.productName,
        productDescription: selectedProduct.productDescription,
        price: selectedProduct.price,
        productQuantity: selectedProduct.productQuantity,
        onOffer: selectedProduct.onOffer || false,
        offerPrice: selectedProduct.offerPrice || undefined,
        category: selectedProduct.category._id,
      });
    } else {
      reset();
    }
  }, [isEditMode, selectedProduct, reset]);

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
    setValue("image", e.target.files); // So yup can validate it
  };

  const handleAddProduct = async (formData) => {
    const formDataToSend = new FormData();
    formDataToSend.append("productName", formData.productName);
    formDataToSend.append("productDescription", formData.productDescription);
    formDataToSend.append("price", formData.price);
    formDataToSend.append("initialPrice", formData.price);
    formDataToSend.append("productQuantity", formData.productQuantity);
    formDataToSend.append("category", formData.category);
    formDataToSend.append("onOffer", formData.onOffer);
    if (formData.offerPrice) {
      formDataToSend.append("offerPrice", formData.offerPrice);
    }
    if (imageFile) {
      formDataToSend.append("productImage", imageFile);
    }

    try {
      let response;
      if (isEditMode) {
        response = await updateProduct({
          _id: selectedProduct._id,
          updatedProduct: formDataToSend,
        }).unwrap();
      } else {
        response = await createProduct(formDataToSend).unwrap();
      }

      if (response.success) {
        toast.success(response.message);
        setTimeout(() => {
          dispatch(toggleAddProductModal());
          dispatch(toggleEditMode(false));
          reset();
        }, 1000);
      } else {
        toast.error(response.message || "An error occurred");
      }
    } catch (error) {
      toast.error(error?.data?.message || "Error uploading product");
    }
  };

  return (
    <Container>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="project__form">
        <div className="form__header">
          <h5 className="form__title">
            {isEditMode ? "Update Product" : "Add Product"}
          </h5>
          <button
            onClick={() => {
              if (isEditMode) {
                dispatch(toggleEditMode(false));
              }
              dispatch(toggleAddProductModal());
            }}
            className="modal__close"
            data-cy="modal__close"
          >
            <IoIosClose />
          </button>
        </div>

        <form onSubmit={handleSubmit(handleAddProduct)}>
          <div className="form__row">
            <label htmlFor="productName" className="form__label">
              Product Name
            </label>
            <input
              type="text"
              id="productName"
              className="form__input"
              placeholder="e.g., kales"
              {...register("productName")}
            />
            {errors.productName && <p className="errors">{errors.productName.message}</p>}
          </div>

          <div className="form__row">
            <label htmlFor="category" className="form__label">
              Category
            </label>
            <select id="category" className="form__input" {...register("category")}>
              <option value="">-- Select a category --</option>
              {data?.categories?.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
            {errors.category && <p className="errors">{errors.category.message}</p>}
          </div>

          <div className="form__row">
            <label htmlFor="price" className="form__label">
              Price
            </label>
            <input
              type="number"
              id="price"
              className="form__input"
              placeholder="e.g., 200"
              {...register("price")}
            />
            {errors.price && <p className="errors">{errors.price.message}</p>}
          </div>

          <div className="form__row form__row--switch">
            <label htmlFor="onOffer" className="form__label">
              On Offer
            </label>
            <Switch
              id="onOffer"
              checked={onOfferValue}
              onChange={(checked) => setValue("onOffer", checked)}
              onColor="#86c240"
              offColor="#ccc"
              height={22}
              width={48}
              handleDiameter={20}
            />
          </div>

          {onOfferValue && (
            <div className="form__row">
              <label htmlFor="offerPrice" className="form__label">
                Offer Price
              </label>
              <input
                type="number"
                id="offerPrice"
                className="form__input"
                placeholder="e.g., 150"
                {...register("offerPrice")}
              />
              {errors.offerPrice && <p className="errors">{errors.offerPrice.message}</p>}
            </div>
          )}

          <div className="form__row">
            <label htmlFor="productQuantity" className="form__label">
              Product Quantity
            </label>
            <input
              type="number"
              id="productQuantity"
              className="form__input"
              placeholder="e.g., 300"
              {...register("productQuantity")}
            />
            {errors.productQuantity && <p className="errors">{errors.productQuantity.message}</p>}
          </div>

          <div className="form__row">
            <label htmlFor="productImage" className="form__label">
              Product Image
            </label>
            <input
              type="file"
              id="productImage"
              className="form__input"
              onChange={handleImageChange}
            />
            {errors.image && <p className="errors">{errors.image.message}</p>}
          </div>

          <div className="form__row">
            <label htmlFor="productDescription" className="form__label">
              Product Description
            </label>
            <textarea
              rows="5"
              id="productDescription"
              className="form__text-area"
              placeholder="Write a brief description of the product"
              {...register("productDescription")}
            />
            {errors.productDescription && (
              <p className="errors">{errors.productDescription.message}</p>
            )}
          </div>

          <div className="button-container">
            <button
              disabled={isLoading}
              type="submit"
              className={`btn--primary add--project--btn ${isLoading ? "disabled" : ""}`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              data-cy="add-project-btn"
            >
              {isHovered && isLoading ? <FaSpinner /> : isEditMode ? "Update Product" : "Add Product"}
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default AddProductModal;
