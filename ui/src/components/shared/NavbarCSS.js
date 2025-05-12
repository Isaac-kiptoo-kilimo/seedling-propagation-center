import styled from "styled-components";

const Container = styled.nav`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  overflow-x: hidden;
  border-bottom: 1px solid #dddddd;
  background-color: #ffffff;

  .navbar {
    display: flex;
    flex-direction: column;
    line-height: 1.5rem;
  }

  .top-banner {
    width: 100%;
    padding: 0.3rem 0;
    background-color: #41663c;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: large;
    border-bottom: 1px solid var(--primary-clr);
  }

  @keyframes marquee {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(-100%);
    }
  }
  
  .active-nav {
    color: var(--primary-clr);
    font-weight: bold;
  }

  .top-banner-caros p {
    display: inline-block;
    white-space: nowrap;
    animation: marquee 20s linear infinite;
    color: white;
  }

  .nav__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
    height: 100%;
    padding: 0.5rem 0;
    position: relative;
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 20%;
  }

  .logo img {
    width: 8rem;
    object-fit: contain;
  }

  .menu-toggle {
    display: none;
    cursor: pointer;
    color: var(--primary-clr);
  }
  
  .menu-close-icon {
    display: none;
    cursor: pointer;
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    color: var(--primary-clr);
    z-index: 1010;
  }

  .nav__content__menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 1;
    justify-content: space-between;
  }
  
  .menu-items {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 84%;
  }
  
  .nav__items__menu {
    display: flex;
    align-items: center;
    gap: 4rem;
  }

  .menu-items .menu__item {
    font-size: 20px;
    color: #6f6f74;
    cursor: pointer;
    transition: color 0.3s ease;
  }

  .user__track__icons {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
  
  .menu-items h6 {
    margin: 0;
    transition: color 0.3s ease;
  }
  
  .menu-items h6:hover {
    color: var(--primary-clr);
  }

  .account {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1.5rem;
    width: auto;
  }

  .search,
  .user,
  .cart {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  
  .icon {
    transition: color 0.3s ease;
  }
  
  .icon:hover {
    color: var(--primary-clr);
  }

  .cart {
    position: relative;
  }

  .count {
    position: absolute;
    top: -8px;
    right: -8px;
    background: #e85e34;
    color: white;
    font-size: 0.7rem;
    font-weight: bold;
    min-width: 18px;
    height: 18px;
    padding: 0 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }

  /* Tablet and Mobile Styles */
  @media (max-width: 992px) {
    .nav__content {
      width: 95%;
    }
    
    .logo {
      width: auto;
    }
    
    .menu-toggle {
      display: flex;
      order: -1;
      margin-right: 1rem;
      margin-left: 0;
    }
    
    .logo img {
      width: 7rem;
    }
    
    .nav__content__menu {
      justify-content: flex-end;
    }
    
    .menu-items {
      position: fixed;
      top: 0;
      left: -100%;
      height: 100vh;
      width: 60%;
      background-color: white;
      flex-direction: column;
      align-items: flex-start;
      padding: 5rem 2rem;
      gap: 3rem;
      z-index: 1000;
      box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);
      transition: transform 0.3s ease-in-out;
      overflow-y: auto;
      transform: translateX(-100%);
    }
    
    .menu-items.show {
      left: 0;
      transform: translateX(0);
    }
    
    .menu-close-icon {
      display: block;
    }
    
    .nav__items__menu {
      flex-direction: column;
      align-items: flex-start;
      gap: 2rem;
      width: 100%;
    }
    
    .menu-items .menu__item {
      font-size: 1.2rem;
      width: 100%;
    }
    
    .user__track__icons {
      margin-top: 1rem;
    }

    .account {
      gap: 1.2rem;
    }
  }

  /* Small Mobile Devices */
  @media (max-width: 576px) {
    .nav__content {
      width: 100%;
      padding: 0.5rem 1rem;
    }
    
    .logo img {
      width: 5.5rem;
    }
    
    .account {
      gap: 1rem;
    }
    
    .menu-items {
      width: 100%;
      max-width: none;
    }
    
    .top-banner {
      font-size: 0.9rem;
    }
    
    .icon {
      font-size: 1.2rem;
    }
    
    .count {
      min-width: 16px;
      height: 16px;
      font-size: 0.6rem;
      top: -6px;
      right: -6px;
    }
  }
`;

export default Container;