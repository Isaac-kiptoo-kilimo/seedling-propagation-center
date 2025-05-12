import styled from "styled-components";

const Container = styled.main`
  
.modal-overlay {
  position: fixed;
  top: 0; 
  left: 0;
  width: 100%;
  bottom: 0; 
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.edit__profile--modal {
  width: 70%;
  max-height: calc(100% - 20px); 
  background-color: white;
  padding: 20px; 
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  overflow-y: auto; 
}

  .edit__profile--modal--content {
    display: flex;
    flex-direction: column;
  }

  .edit__profile--close {
    color: var(--red-clr);
    font-size: 2rem;
    cursor: pointer;
    transition: var(--transition);
  }
.edit__profile__top--items{
  display: flex;
  flex-direction: row;
    align-items: center;
    gap: 1rem;
}
  .top__items__profile{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .edit__profile--close :hover {
    color: #bb0000;
  }

  .profile__modal--heading,.edit__profile--heading {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    font-weight: 500;
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    font-size: 1.2rem;
    color: #000000;
  }


  .edit__profile__form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  
  .edit__profile_name {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: .5rem;
  }
  
  .edit__profile__group__input {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .first__name__input,
  .last__name__input{
    width: 100%;
    padding: 12px;
    background-color: var(--white);
    color: #686868;
    font-size: 18px;
    font-weight: 400;
    font-family: outfit;
    border-radius: 5px;
    outline: 1.5px solid #c4c4c4;
    letter-spacing: var(--letter-spacing);
  }


  .first__name__label,
  .last__name__label,
  .edit__profile__email__label,
  .edit__profile__phone__label,
  .edit__profile__role__label {
    color: #3f3d56;
    font-weight: 500;
    letter-spacing: var(--letter-spacing);
    font-size: 14px;
    padding: 0.3rem;
    margin-top: 0.4rem
  }
  .errors{
    color: #DF0404;
    font-size: 14px;
    padding-left: 1.2rem;
  }
  
  .edit__profile__btn {
    width: 100%;
    display: flex;
    align-items: center;
  }
  
  .edit__profile--btn {
    width: 100%;
    padding: 0.8rem 0;
    font-size: 16px;
    font-weight: 500;
    margin-top: 1rem;
  }
  
  .group__input--select {
    position: relative;
  }
  
  .custom-select-wrapper {
    position: relative;
    display: inline-block;
  }
  
  
    
  
  @media (min-width: 992px) {
    .edit__profile--modal {
      width: 50%;
   
    }
    
    .edit__profile__content {
      width: 80%;
    }
  
    .edit__profile__content {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 90%;
      margin: 2rem auto;
      padding: 1rem;
    }
    .edit__profile__heading {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  
    .edit__profile__heading p {
      font-weight: 700;
      font-size: 30px;
    }
  
    .edit__profile__heading span {
      color: #3f3d56;
      font-weight: 500;
      font-size: 25px;
    }

    .edit__profile__form {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
  
    .edit__profile_name {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  
    .edit__profile__group__input {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
  
    .first__name__input,
    .last__name__input {
      width: 100%;
    padding: 12px;
    background-color: var(--white);
    color: #686868;
    font-size: 18px;
    font-weight: 400;
    border-radius: 5px;
    outline: 1.5px solid #c4c4c4;
    letter-spacing: var(--letter-spacing);
    }
  
    

  
    .first__name__label,
    .last__name__label {
      color: #3f3d56;
      font-weight: 500;
      letter-spacing: var(--letter-spacing);
      font-size: 14px;
      padding: 0.3rem;
    }
  
    .edit__profile__btn {
      width: 100%;
      display: flex;
      align-items: center;
    }
  
    .edit__edit--btn {
      width: 100%;
      padding: 0.8rem 0;
      font-size: 16px;
      font-weight: 500;
      margin-top: 1rem;
    }
  }
    @media (min-width: 768px) {
      .edit__profile__content {
        width: 80%;
      }
  
      .edit__profile__heading {
        align-items: start;
      }
 
      .edit__profile--modal {
        width: 50%;
     
      }
      .edit__profile__img--top{
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        padding: 5px 1.5rem;
        gap: 2rem
      }
      .edit__profile_name {
        flex-direction: row;
        gap: 2rem;
      }
      .edit__profile__btn {
        justify-content: flex-end;
      }
  
      .edit__profile--btn {
        width: 35%;
      }
    }
    
`;
export default Container;
