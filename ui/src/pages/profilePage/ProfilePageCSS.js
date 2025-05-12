import styled from "styled-components";
import profileBanner from "../../assets/profileImage1.jpg";

const Container = styled.main`
  position: relative;
  font-family: "Outfit", sans-serif;

  .profile__banner {
    background-image: url(${profileBanner});
    height: 220px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  .img-container {
    position: relative;
    transform: translateX(5%) translateY(-50%);
    width: fit-content;
  }

  .profile__placeholder {
    width: 100px;
    height: 100px;
    background-color: var(--primary-clr-light);
    color: black;
    font-size: 2.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 4px solid var(--white);
  }

  .img--edit {
    position: absolute;
    right: -10px;
    top: 70%;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #F0F0F0;
    color: var(--primary-clr);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transition: background-color 0.3s;
    font-size: 1.5rem;
  }


  .profile__info {
    background-color: #fff;
    padding: 3rem 2rem;
    margin: -3rem 1rem 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    display: grid;
    gap: 2rem;
  }

  .profile__headline {
    font-size: 1.5rem;
    color: var(--text-dark);
    font-weight: 600;
  }

  .personal__information,
  .delivery__infornation {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .personal__information h5,
  .delivery__infornation h5 {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
    color: var(--primary-clr-dark);
  }

  .profile__details {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
  }

  .profile__details div {
    flex: 1 1 250px;
    display: flex;
    flex-direction: column;
  }

  label {
    font-size: 0.875rem;
    font-weight: 500;
    color: #444;
    margin-bottom: 0.5rem;
  }

  input {
    padding: 0.75rem;
    border-radius: 6px;
    background-color: #f5f5f5;
    border: none;
    font-size: 1rem;
    color: #333;
  }

  input:focus {
    outline: 2px solid var(--primary-clr);
  }

  .btn-container {
    display: flex;
    justify-content: flex-end;
    padding-top: 1rem;
  }

  .profile__edit {
    padding: 0.6rem 2rem;
    background-color: var(--primary-clr);
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .edit__profile____modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.45);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }

  /* Responsive Layout */
  @media (max-width: 768px) {
    .img-container {
      transform: translateX(10%) translateY(-50%);
    }

    .profile__info {
      margin: -2rem 1rem;
      padding: 2rem;
    }

    .profile__headline {
      font-size: 1.25rem;
    }

    .profile__edit {
      width: 100%;
      padding: 0.75rem;
    }

    .btn-container {
      justify-content: center;
    }
  }
`;

export default Container;
