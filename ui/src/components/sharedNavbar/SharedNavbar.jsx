import { IoChevronDownOutline } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleSidebar,
  toggleNavDropDown,
  toggleChangePasswordModal,
} from "../../features/configurations/configurationSlice";
import logo from "../../assets/logo2.png";
import { useNavigate } from "react-router-dom";
import { getUserInitials } from "../../utils";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import { setAuthenticatedUser } from "../../features/userProfile/userProfileApi";
import ChangePasswordModal from "../changePasswordModal/ChangePasswordModal";
import Container from "./TempNavbarCSS";
import { FaSearch } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import {
  toggleSearchInputModal,
  toggleShoppingCartModal,
} from "../../features/configurations/configurationSlice";
import ShoppingCartModal from "../shoppingCart/ShoppingCartModal";
import SearchInput from "../shared/SearchInput";
import { clearCart, setCartUser } from "../../features/cart/CartSlice";
import { useRef } from "react";
import { AiOutlineHistory } from "react-icons/ai";
import { Tooltip } from "react-tooltip";

const SharedNavbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);
  const searchRef = useRef();

  const { isNavDropDownOpen, isChangePasswordModalOpen } = useSelector(
    (store) => store.configurations
  );
  const { authenticatedUser: user } = useSelector((store) => store.userProfile);
  const { isShoppingCartModalOpen, isSearchInputModalOpen } = useSelector(
    (store) => store.configurations
  );
 if (!user) return null;

const isAdmin = user.role=== 'admin'
  const { fullName, profilePicture } = user;
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("employee");
    dispatch(clearCart());
    dispatch(setCartUser(user._id));
    dispatch(setAuthenticatedUser(null));
    dispatch(toggleNavDropDown());
    navigate("/");
  };

  const handleToggleShoppingCartModal = () => {
    dispatch(toggleShoppingCartModal());
  };
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleToggleSearchInputModal = () => {
    dispatch(toggleSearchInputModal());
  };
  const handleToggleChangePassword = () => {
    dispatch(toggleChangePasswordModal());
  };
  return (
    <Container className="nav">
      <div className="nav__header">
        <button
          className="nav__toggle"
          onClick={() => dispatch(toggleSidebar())}
        >
          <CiMenuBurger />
        </button>
        <img src={logo} alt="seedling propagation" className="nav__logo" />
      </div>
      {user && (
        <div className="nav__links">
          <div className={ `${isAdmin ? "admin__account" : "account"}`}>
            <div
              className="search"
              ref={searchRef}
              onMouseEnter={() => dispatch(toggleSearchInputModal(true))}
              onMouseLeave={() => dispatch(toggleSearchInputModal(false))}
            >
              <FaSearch className="icon" />
              {isSearchInputModalOpen &&
                createPortal(
                  <SearchInput onClose={handleToggleSearchInputModal} />,
                  document.body
                )}
            </div>
            {!isAdmin && (
                  <>
                    <div
                      className="cart"
                      onClick={handleToggleShoppingCartModal}
                    >
                      <BsCart className="icon" />
                      {cartCount > 0 && (
                        <div className="count">
                          <span>{cartCount}</span>
                        </div>
                      )}
                    </div>

                    <div className="track__order">
                      <AiOutlineHistory
                        className="icon"
                        data-tooltip-id="track-tooltip"
                        data-tooltip-content="Track Orders"
                        onClick={() => navigate("/track-orders")}
                      />
                      <Tooltip id="track-tooltip" />
                    </div>
                  </>
                )}
          </div>
          <div
            className="nav__profile"
            onClick={() => dispatch(toggleNavDropDown())}
          >
            {profilePicture ? (
              <img
                src={profilePicture}
                alt="profile"
                className="profile__img"
              />
            ) : (
              <span
                className="profile__placeholder"
                data-cy="profile__placeholder"
              >
                {getUserInitials(fullName)}
              </span>
            )}
            <IoChevronDownOutline />
          </div>
          <div
            style={{
              top: "5rem",
              bottom: (!user || user.role !== "admin") ? "-10rem" : "-8.5rem"
            }}
            className={
              isNavDropDownOpen
                ? "nav__drop-down nav__drop-down--active"
                : "nav__drop-down"
            }
          >
            {user && user.role !== "admin" && (
              <Link
                onClick={() => dispatch(toggleNavDropDown())}
                to="/user/profile"
                className="drop-down__edit"
              >
                profile
              </Link>
            )}
            <button
              className="drop-down__password"
              onClick={() => {
                handleToggleChangePassword();
                dispatch(toggleNavDropDown());
              }}
              data-cy="drop-down__password"
            >
              change password
            </button>
            <button
              onClick={logout}
              data-cy="logout"
              className="drop-down__logout btn--block"
            >
              logout
            </button>
          </div>
          {isChangePasswordModalOpen &&
            createPortal(<ChangePasswordModal />, document.body)}

          {isShoppingCartModalOpen &&
            createPortal(
              <ShoppingCartModal onClose={handleToggleShoppingCartModal} />,
              document.body
            )}
        </div>
      )}
    </Container>
  );
};

export default SharedNavbar;
