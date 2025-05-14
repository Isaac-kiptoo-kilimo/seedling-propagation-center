import { useState } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { AiOutlineHistory } from "react-icons/ai";
import { CiMenuBurger, CiSearch } from "react-icons/ci";
import { Tooltip } from "react-tooltip";

import logo from "../../assets/logo2.png";
import {
  toggleSearchInputModal,
  toggleShoppingCartModal,
} from "../../features/configurations/configurationSlice";
import Container from "./NavbarCSS";
import ShoppingCartModal from "../shoppingCart/ShoppingCartModal";
import SearchInput from "./SearchInput";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isShoppingCartModalOpen, isSearchInputModalOpen } = useSelector(
    (store) => store.configurations
  );
  const { authenticatedUser: user } = useSelector((store) => store.userProfile);
  const { cartItems } = useSelector((store) => store.cart);
  
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleToggleShoppingCartModal = () => {
    dispatch(toggleShoppingCartModal());
  };
  
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  const scrollToTopAndNavigate = (path) => {
    window.scrollTo(0, 0);
    navigate(path);
    setShowMenu(false);
  };

  const handleToggleSearchInputModal = () => {
    dispatch(toggleSearchInputModal());
  };

  const NavigateToTracker=()=>{
      navigate("/track-orders")
      setShowMenu(false);
  }

  const navItems = [
    { path: "/", text: "HOME" },
    { path: "/shop/products", text: "OUR SHOP" },
    { path: "", text: "BLOG" },
    { path: "/aboutUs", text: "ABOUT US" },
    { path: "/contactUs", text: "CONTACT US" },
  ];

  return (
    <Container className="nav">
      <div className="navbar">
        <div className="top-banner">
          <div className="top-banner-caros">
            <p>
              Welcome to the Seedling Propagation Centre, where you can explore a wide range of quality seedlings, grow with expert support, and succeed in building a healthy and productive future.
            </p>
          </div>
        </div>
        <div className="nav__content">
          <div className="logo">
            <div
              className="image"
              onClick={() => {
                navigate("/");
              }}
            >
              <img src={logo} alt="no-logo" />
            </div>
            <div className="menu-toggle" onClick={toggleMenu}>
              <CiMenuBurger size={28} />
            </div>
          </div>
          <div className="nav__content__menu">
            <div className={`menu-items ${showMenu ? "show" : ""}`}>
              {showMenu && (
                <div className="menu-close-icon" onClick={toggleMenu}>
                  <FaTimes size={28} />
                </div>
              )}
              <div className="nav__items__menu">
                {navItems.map((item, index) => (
                  <div key={index} className="menu__item">
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        isActive ? "active-nav" : ""
                      }
                      onClick={() => scrollToTopAndNavigate(item.path)}
                    >
                      <h6>{item.text}</h6>
                    </NavLink>
                  </div>
                ))}
              </div>
              <div className="user__track__icons">
                <AiOutlineHistory
                  size={24}
                  className="track__icon"
                  data-tooltip-id="track-tooltip"
                  data-tooltip-content="Track Orders"
                  onClick={NavigateToTracker}
                />
                <Tooltip id="track-tooltip" />
              </div>
            </div>
            <div className="account">
              <div
                className="search"
                onClick={() => dispatch(toggleSearchInputModal(true))}
              >
                <CiSearch className="icon" size={28} />
              </div>
              <div className="user">
                <FaUser
                  className="icon"
                  size={24}
                  onClick={() => navigate("/authenticate/login")}
                  aria-label="User Login"
                />
              </div>
              <div className="cart" onClick={handleToggleShoppingCartModal}>
                <BsCart className="icon" size={24} />
                {cartCount > 0 && (
                  <div className="count">
                    <span>{cartCount}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {isSearchInputModalOpen &&
          createPortal(
            <SearchInput onClose={handleToggleSearchInputModal} />,
            document.body
          )}
          
        {isShoppingCartModalOpen &&
          createPortal(
            <ShoppingCartModal onClose={handleToggleShoppingCartModal} />,
            document.body
          )}
      </div>
    </Container>
  );
};

export default Navbar;