import { useDispatch, useSelector } from "react-redux";
import { IoCloseCircle } from "react-icons/io5";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdCheckBox } from "react-icons/md";
// import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";
import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  setCartUser,
} from "../../features/cart/CartSlice";
import Container from "./ShoppingCartModalCSS";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import DeleteConfirmationModal from "../shared/DeleteConfirmationModal";
import {
  toggleDeleteConfirmationModal,
  toggleShoppingCartModal,
} from "../../features/configurations/configurationSlice";
import { useNavigate } from "react-router-dom";
import { BsCart } from "react-icons/bs";

const ShoppingCartModal = ({ onClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems, totalAmount ,userId: cartUserId } = useSelector((store) => store.cart);
  const { isDeleteConfirmationModalOpen } = useSelector(
    (store) => store.configurations
  );
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [editedQuantities, setEditedQuantities] = useState({});
  const { authenticatedUser } = useSelector((store) => store.userProfile);
  const loggedInUserId = authenticatedUser?._id || null;
  
  useEffect(() => {
    if (loggedInUserId && cartUserId !== loggedInUserId) {
      dispatch(clearCart());
      dispatch(setCartUser(loggedInUserId));
    }
  }, [loggedInUserId, cartUserId, dispatch]);
  
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
  const handleViewCartPage = () => {
    dispatch(toggleShoppingCartModal());
    window.scrollTo(0, 0);
    navigate("/viewCart");
  };

  const handleCheckoutPage = () => {
    dispatch(toggleShoppingCartModal());
    window.scrollTo(0, 0);
    navigate("/checkout");
  };

  return (
    <Container>
      <div className="shopping-cart-overlay" onClick={onClose}>
        <div className="shopping-cart" onClick={(e) => e.stopPropagation()}>
          <div className="shopping-cart-header">
            <h4>Shopping Cart</h4>
            <button onClick={onClose} className="close-button">
              <IoCloseCircle size={24} />
            </button>
          </div>
          {cartItems && cartItems.length > 0 ? (
            <div className="shopping-cart-content-container">
              <div className="shopping-cart-content">
                <div className="shopping--cart-main-content">
                  {cartItems.map((item) => (
                    <div className="shopping--cart-card" key={item._id}>
                      <div className="shopping--cart-checkbox">
                        <MdCheckBox />
                      </div>
                      <div className="shopping--cart-img">
                        <img src={item.productImage} alt={item.productName} />
                      </div>
                      <div className="shopping--cart-desc-price">
                        <div className="cart-description">
                          <p>{item.productDescription}</p>
                        </div>
                        <div className="shopping--cart-each-price">
                          <h4>
                            KES {item.price}{" "}
                          </h4>
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
                          <div className="shopping--cart-each-product-delete">
                            <FaRegTrashAlt
                              onClick={() =>
                                handleToggleDeleteConfirmationModal(item._id)
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="cart-footer-items">
                <div className="shopping--cart-all-total">
                  <div className="cart--all-checkbox">
                    {/* <MdOutlineCheckBoxOutlineBlank /> */}
                    <MdCheckBox />
                    <p>ALL</p>
                  </div>
                  <div className="cart--total-amount-card">
                    <div className="shopping--cart-sub-total-title">
                      <p>Subtotal</p>
                    </div>
                    <div className="cart--total-value">
                      <h4>KES {totalAmount}</h4>
                    </div>
                  </div>
                </div>
                <div className="cart-bottom-btns">
                  <button
                    className="view--cart-btn"
                    onClick={handleViewCartPage}
                  >
                    View Cart
                  </button>
                  <button
                    className="checkout--cart-btn"
                    onClick={handleCheckoutPage}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="is--empty">
              <BsCart className="icon" />
              <p>Your cart is empty.</p>
            </div>
          )}
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

export default ShoppingCartModal;
