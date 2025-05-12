import { useSelector } from "react-redux";
import Container from "../../pages/checkoutPage/CheckoutPageCSS";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, totalAmount } = useSelector((store) => store.cart);
  const shippingCost = 0;
  const calculateTotalCost = () => {
    return totalAmount + shippingCost;
  };
  const handleEditMyOrder = () => {
    navigate("/viewCart");
  };
  
  return (
    <Container>
      <div className="order-card-items">
        <div className="order-edit-items">
          <h4 className="order-header">My Order</h4>
          <button
            className="edit-order-items-btn"
            onClick={() => handleEditMyOrder()}
          >
            Edit
          </button>
        </div>
        <div className="order-main-content">
          {cartItems &&
            cartItems.map((item) => (
              <div className="order--cart-card" key={item._id}>
                <div className="order--cart-view-card">
                  <div className="order--cart-img">
                    <img src={item.productImage} alt="test" />
                  </div>
                  <div className="order--cart-desc-price">
                    <div className="cart-description">
                      <p>{item.productDescription}</p>
                    </div>
                    <div className="order--quality-btns">
                      <p>
                        Qlty : <span>{item.quantity}</span>
                      </p>
                    </div>
                    <div className="order--cart-each-price">
                      <h4>KES {item.price}</h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="order--all-total">
          <div className="order--total-amount-card">
            <div className="order--sub-total">
              <p>Cart Subtotal</p>
              <h4>KES {totalAmount}</h4>
            </div>
            <div className="order--shipping-fee">
              <p>Shipping</p>
              <h4>KES {shippingCost}</h4>
            </div>
            <div className="order--total-value">
              <p>Total</p>
              <h4>KES {calculateTotalCost()}</h4>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Checkout;
