import { useDispatch, useSelector } from "react-redux";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdCheckBox } from "react-icons/md";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../features/cart/CartSlice";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Container from "./ViewCartCSS";
import { toggleDeleteConfirmationModal} from "../../features/configurations/configurationSlice";
import DeleteConfirmationModal from "../../components/shared/DeleteConfirmationModal";
import { MdChevronRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const ViewCart = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const { cartItems, totalAmount } = useSelector((store) => store.cart);
  const { isDeleteConfirmationModalOpen } = useSelector(
    (store) => store.configurations
  );
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [editedQuantities, setEditedQuantities] = useState({});

    
    useEffect(() => {
      const updatedQuantities = {};
      cartItems.forEach((item) => {
        updatedQuantities[item._id] = item.quantity;
      });
      setEditedQuantities(updatedQuantities);
    }, [cartItems]);
  
    const handleQuantityChange = (_id, value) => {
      if (value === "" || (!isNaN(value) && Number(value) > 0)) {
        setEditedQuantities((prev) => ({ ...prev, [_id]: value }));
      }
    };
  
    const handleQuantityBlur = (_id) => {
      const newQuantity = Number(editedQuantities[_id]);
  
      if (!isNaN(newQuantity) && newQuantity > 0) {
        dispatch(increaseQuantity({ _id, quantity: newQuantity }));
      }
    };
  
    const handleIncrease = (_id, currentQuantity) => {
      const newQuantity = currentQuantity + 1;
      dispatch(increaseQuantity({ _id, quantity: newQuantity }));
    };
    const handleDecrease = (_id, currentQuantity) => {
      if (currentQuantity > 1) {
        const newQuantity = currentQuantity - 1;
        dispatch(decreaseQuantity({ _id, quantity: newQuantity }));
      }
    };
    const handleToggleDeleteConfirmationModal = (_id) => {
      setSelectedItemId(_id);
      dispatch(toggleDeleteConfirmationModal());
    };
  
    const handleRemoveCartItem = () => {
      if (selectedItemId) {
        dispatch(removeFromCart({_id: selectedItemId}));
        dispatch(toggleDeleteConfirmationModal());
      }
    };
  const handleCheckoutPage=()=>{
      navigate('/checkout')
    }

  return (
    <Container>
      {/* <Navbar /> */}
      <div className="shopping-cart-page">
        <div className="tracking--order-section">
          <div className="shopping-track-btn active">
            <button>Shopping Cart</button>
            <MdChevronRight size={24} />
          </div>
          <div className="checkout--tack-btn">
            <button>Secure Checkout</button>
            <MdChevronRight size={24} />
          </div>
          <div className="order-complete--track-btn">
            <button>Order Complete</button>
          </div>
        </div>
        <div className="shopping-cart-view">
          <div className="shopping-cart-header">
            <h4>Shopping Cart</h4>
          </div>
          <div className="shopping-cart">
            <div className="shopping-cart-content">
              <div className="shopping--cart-main-content">
                <div className="cart--all-checkbox">
                  {/* <MdOutlineCheckBoxOutlineBlank /> */}
                  <MdCheckBox />
                  <p>ALL</p>
                </div>
                {cartItems && cartItems.length > 0 ? (
                  cartItems.map((item) => (
                    <div className="shopping--cart-card" key={item._id}>
                      <div className="shopping--cart-checkbox">
                        <MdCheckBox />
                      </div>
                      <div className="shopping--cart-view-card">
                      <div className="shopping--cart-img">
                        <img src={item.productImage} alt={item.productImage} />
                      </div>
                      <div className="shopping--cart-desc-price">
                        <div className="cart-description">
                          <p>{item.productDescription}</p>
                          <div className="shopping--cart-each-product-delete">
                            <FaRegTrashAlt
                              onClick={() =>
                                handleToggleDeleteConfirmationModal(item._id)
                              }
                            />
                          </div>
                        </div>
                        <div className="shopping--cart-btns">
                          <div className="cart--incr-decrease-btn">
                            <div className="cart-descrease-btn">
                              <FaAngleLeft
                                size={16}
                                onClick={() =>
                                  handleDecrease(item._id, item.quantity)
                                }
                                style={{
                                  cursor:
                                    item.quantity > 1
                                      ? "pointer"
                                      : "not-allowed",
                                  opacity: item.quantity > 1 ? 1 : 0.5,
                                }}
                              />
                            </div>
                            <div className="cart--increase-descrease-input">
                              <input
                                type="text"
                                value={
                                  editedQuantities[item._id] ?? item.quantity
                                }
                                onChange={(e) =>
                                  handleQuantityChange(item._id, e.target.value)
                                }
                                onBlur={() => handleQuantityBlur(item._id)}
                              />
                            </div>
                            <div className="cart---increase-btn">
                              <FaAngleRight
                                size={16}
                                onClick={() =>
                                  handleIncrease(item._id, item.quantity)
                                }
                              />
                            </div>
                          </div>
                        </div>
                        <div className="shopping--cart-each-price">
                          <h4>
                            KES {item.price}{" "}
                            <span>KES {item.offerPrice}</span>
                          </h4>
                        </div>
                      </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="is--empty">
                    <p>Your cart is empty.</p>
                  </div>
                )}
              </div>
            </div>
            <div className="cart-footer-items">
              <div className="shopping--cart-all-total">
                <div className="cart--total-amount-card">
                  <div className="shopping--cart-order-summary-title">
                    <p>Order Summary</p>
                  </div>
                  <div className="shopping--cart-sub-total">
                    <p>Cart Subtotal</p>
                    <h4>KES {totalAmount}</h4>
                  </div>
                  <div className="cart--total-value">
                    <p>Estimated total</p>
                    <h4>KES {totalAmount}</h4>
                  </div>
                </div>
              </div>
              <div className="cart-bottom-btns">
                <button className="checkout--cart-btn" onClick={handleCheckoutPage}>Checkout</button>
              </div>
            </div>
          </div>
        </div>

        {isDeleteConfirmationModalOpen &&
          createPortal(
            <DeleteConfirmationModal
              onClose={handleToggleDeleteConfirmationModal}
              removeFromCart={handleRemoveCartItem}
            />,
            document.body
          )}
      </div>
    </Container>
  );
};

export default ViewCart;
