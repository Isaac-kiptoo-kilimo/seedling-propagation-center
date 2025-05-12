import { useDispatch, useSelector } from "react-redux";
import Container from "./FeaturedProductsCSS";
import { addToCart } from "../../features/cart/CartSlice";
import { useNavigate } from "react-router-dom";

const FeaturedProductsCard = ({ product }) => {
  const navigate = useNavigate();

  const {
    _id,
    productImage,
    productName,
    productDescription,
    price,
    offerPrice,
    productQuantity,
    onOffer,
  } = product;

  const initialQuantity = 2000;
  const percentageLeft = (productQuantity / initialQuantity) * 100;

  const dispatch = useDispatch();
  const { authenticatedUser } = useSelector((store) => store.userProfile);

  const handleSingelProduct = () => {
    navigate(`/single/product/${_id}`);
  };
  const handleAddToCart = () => {
    const cartItem = {
      ...product,
      price: onOffer ? offerPrice : price,
      quantity: 1,
      userId: authenticatedUser?._id,
    };

    dispatch(addToCart(cartItem));
  };

  return (
    <Container>
      <div className="featured--product-card">
        <div className="featured--product-img">
          {onOffer && (
            <div className="offer-card">
              <h4 className="offer-card-content">offer</h4>
            </div>
          )}
          <img
            src={productImage}
            alt={productName || "product image"}
            onClick={handleSingelProduct}
          />
        </div>
        <div className="featured--product-content">
          <div className="featured--product-Collection-name">
            <h4>{productName}</h4>
          </div>
          <div className="featured--product-name">
            <p className="scroll-text">{productDescription}</p>
          </div>
          <div className="featured--product-price-quality">
            <div className="product__quantity_price">
              <div className="featured__product__quantity">
                <p>
                  Qnty:{" "}
                  {Number(productQuantity) <= 0 ? (
                    "Out of Stock"
                  ) : (
                    <span> {productQuantity} left </span>
                  )}{" "}
                </p>
              </div>
              <div className="featured--product-amount">
                <div className="featured--product--amount-active">
                  <p className="featured--amount-placeholder">
                    KES <span>{onOffer ? offerPrice : price}</span>
                  </p>
                </div>
                {onOffer && (
                  <div className="featured--product--amount-past">
                    <span className="featured--past-amount-placeholder">
                      KES {price}
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className="add--to-cart">
              {Number(productQuantity) <= 0 ? (
                <button className="featured__product__out_ofStock__btn">
                  Out Of Stock
                </button>
              ) : (
                <button
                  className="add--to-cart-btn btn--primary"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FeaturedProductsCard;
