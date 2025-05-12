import styled from "styled-components";

const Container = styled.div`
  --gray-text: #a4a4a4;
  --gray-link: #686868;

  .sidebar {
    width: 50%;
    min-height: 100vh;
    position: fixed;
    top: 0;
    background-color: var(--smoky-white);
    z-index: 99;
    transform: translateX(-100%);
    transition: var(--transition);
    /* border-right: 2px solid var(--smoky-white);; */
  }
  .sidebar--active {
    transform: translateX(0);
  }

  .sidebar svg {
    font-size: 1.5rem;
  }

  .sidebar__header {
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .sidebar__logo {
    width: 6rem;
  }

  .sidebar__close {
    background-color: transparent;
    color: var(--danger);
  }

  .sidebar__profile {
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    line-height: 1.2;
  }

  .profile__img {
    object-fit: cover;
  }
  .profile__img,
  .profile__placeholder {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .profile__name {
    font-size: 1rem;
    font-weight: 700;
  }
  .profile__role {
    font-size: 0.8rem;
    color: var(--gray-text);
    text-align: center;
    margin-left: 0.25rem;
  }
  .links__title {
    text-transform: uppercase;
    padding: 1rem;
    font-weight: 300;
    font-size: 0.75rem;
    letter-spacing: var(--letter-spacing);
    color: var(--gray-link);
  }

  .sidebar__links {
    display: flex;
    flex-direction: column;
  }

  .sidebar__link {
    display: flex;
    align-items: center;
    gap: 1rem;
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    padding: 0.5rem;
    padding-left: 1rem;
    color: var(--gray-link);
    transition: var(--transition);
  }
  .sidebar__link:hover {
    color: var(--primary-clr);
  }

  .sidebar__link--active {
    position: relative;
    color: var(--primary-clr);
    border-left: 5px solid var(--primary-clr);
    padding-left: calc(1rem - 4px);
    background-color: var(--white);
  }

  @media (min-width: 768px) {
    .sidebar {
      padding-top: 2rem;
      min-height: calc(100vh - 4rem);
      width: auto;
      position: sticky;
      top: 4rem;
      transform: translateX(0);
      z-index: 1;
    }

    .sidebar__header,
    .sidebar__profile,
    .sidebar__link .link__text,
    .links__title {
      display: none;
    }
  }
  @media (min-width: 1000px) {
    .sidebar {
      padding-top: 0;
    }
    .sidebar__header,
    .sidebar__profile {
      display: flex;
    }
    .sidebar__header {
      justify-content: center;
    }
    .sidebar__close {
      display: none;
    }
    .sidebar__link .link__text,
    .links__title {
      display: block;
    }
  }
`;

export default Container;
