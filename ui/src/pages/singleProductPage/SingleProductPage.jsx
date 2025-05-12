import { useParams } from "react-router-dom";
import { useGetProductDetailsQuery } from "../../features/products/productApi";
import Container from "./SingleProductPageCSS";
import { LoadingSpinner } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart/CartSlice";

const SingleProductPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data, isLoading, isError } = useGetProductDetailsQuery(id);
  const { authenticatedUser } = useSelector((store) => store.userProfile);

  if (isLoading) {
    return (
      <Container className="single__product__container">
        <LoadingSpinner />
      </Container>
    );
  }

  if (isError || !data?.product) {
    return (
      <Container className="single__product__container">
        <div className="products-error">
          <p className="products-error__text">Something went wrong...</p>
        </div>
      </Container>
    );
  }

  const {
    productImage,
    productName,
    productDescription,
    offerPrice,
    onOffer,
    price,
    productQuantity,
    category,
  } = data.product;

  const initialQuantity = 1900;
  const percentageLeft = (productQuantity / initialQuantity) * 100;

  const handleAddToCart = () => {
    const cartItem = {
      ...data.product,
      price: onOffer ? offerPrice : price,
      quantity: 1,
      userId: authenticatedUser?._id,
    };

    dispatch(addToCart(cartItem));
  };

  return (
    <Container className="single__product__container">
      <div className="single__product__img">
        {onOffer && (
          <div className="offer-card">
            <h4 className="offer-card-content">offer</h4>
          </div>
        )}
        <img src={productImage} alt={productName || "product image"} />
      </div>
      <div className="single__product__page__content">
        <div className="sing__product__page__category">
          <p>{category.name}</p>
        </div>
        <div className="single__product__page__name">
          <h4>{productName}</h4>
        </div>
        <div className="single__product__page__desc">
          <p className="scroll-text">{productDescription}</p>
        </div>
        <div className="single__product__page__price__quality">
          <div className="single__product__page__quantity">
            <p>
              Qnty:{" "}
              {Number(productQuantity) <= 0 ? (
                "Out of Stock"
              ) : (
                <span> {productQuantity} left </span>
              )}{" "}
            </p>
          </div>
          <div className="single__product__page__amount">
            <div className="single__product__page__amount-active">
              <p className="single__product__page__placeholder">
                KES <span>{onOffer ? offerPrice : price}</span>
              </p>
            </div>
            {onOffer && (
              <div className="single__product__page__amount-past">
                <span className="single__product__page__past-amount-placeholder">
                  KES {price}
                </span>
              </div>
            )}
          </div>
          <div className="single__product__page__add__to__cart">
            {Number(productQuantity) <= 0 ? (
              <button className="single__product__out_ofStock__btn">
                Out Of Stock
              </button>
            ) : (
              <button
                className="single__product__page__add__to__cart__btn btn--primary"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            )}
          </div>
          <div className="sing__product__page__category">
            <p>Category: {category.name}</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SingleProductPage;
