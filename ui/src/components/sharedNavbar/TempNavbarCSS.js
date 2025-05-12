import styled from "styled-components";

const Container = styled.nav`
  --gray-link: #686868;
  --nav-bg: #f0f7ee;
  position: sticky;
  top: 0;
  height: 5rem;
  padding: 0 2rem;
  background-color: var(--nav-bg);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
   /* border-bottom: 1px solid #eaeaea; */
   /* border-bottom: 2px solid white; */

  .nav__header {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .nav__toggle {
    background-color: transparent;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .nav__logo {
    width: 6rem;
  }
  .nav__toggle:hover {
    color: var(--primary-clr);
  }
  .nav__links {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 50%;
  }
  .account {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  height: 100%;
  width: 100%;
  cursor: pointer;
}
.admin__account{
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: 40%;
  cursor: pointer;
}
  .icon {
    font-size: 1.3rem;
  }
  .search,.track__order{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}
.cart{
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /* height: 100%; */
  width: 100%;
}
  .count {
    position: absolute;
    top: -6px;
    right: 8px;
    background: #e85e34;
    color: white;
    font-size: 0.8rem;
    font-weight: bold;
    width: auto;
    min-width: 20px;
    height: 20px;
    padding: 2px 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }

  .nav__notification {
    position: relative;
    display: flex;
    align-items: center;
  }
  .nav__notification svg {
    font-size: 1.5rem;
    color: var(--gray-link);
  }
  .notification__count {
    position: absolute;
    top: -10px;
    right: -10px;
    background-color: var(--primary-clr);
    border: 2px solid var(--smoky-white);
    width: 25px;
    height: 25px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--smoky-white);
    font-size: 14px;
  }
  .nav__profile {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    cursor: pointer;
  }
  .nav__profile .profile__img,
  .profile__placeholder {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
  }
  .profile__placeholder {
    font-size: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .nav__profile svg {
    color: var(--primary-clr);
  }
  .nav__drop-down {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    width: 200px;
    padding: 1rem;
    position: absolute;
    bottom: -8.5rem;
    right: 1rem;
    background-color: var(--smoky-white);
    box-shadow: var(--shadow-1);
    border-radius: var(--border-radius);
    transform-origin: top;
    transform: scaleY(0);
    transition: var(--transition);
  }
  .nav__drop-down--active {
    transform: scaleY(1);
  }
  .nav__drop-down button {
    background-color: transparent;
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
  }
  .drop-down__edit {
    background-color: transparent;
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    transition: var(--transition);
    font-size: 0.85rem;
  }

  .drop-down__edit:hover,
  .drop-down__password:hover {
    color: var(--primary-clr);
  }

  .drop-down__logout {
    margin-top: 0.5rem;
    border: 1px solid var(--danger);
    padding: 0.5rem 1rem;
    border-radius: var(--border-radius);
    color: var(--danger);
  }
  .drop-down__logout:hover {
    background-color: var(--danger);
    color: var(--smoky-white);
  }

    @media (max-width: 400px) {
   
    .nav__logo {
      width: 3rem;
    }

      .nav__links {
    width: 60%;
  }
   
  }

   @media (min-width: 575px) {
    .nav__links {
    width: 40%;
  }
  }

  @media (min-width: 768px) {
    /* padding-left: 60px;
    z-index: 2;
    .nav__toggle {
      display: none;
    } */
    .nav__logo {
      display: block;
      width: 6rem;
    }
    .nav__links {
    width: 30%;
  }
  }
  @media (min-width: 1000px) {
    justify-content: space-between;
    padding-left: 1rem;
    .nav__logo {
      width: 8rem;
      height: 2rem;
      object-fit: cover;
    }
      .nav__links {
    width: 15%;
  }
  }
`;

export default Container;
