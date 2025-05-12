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

  .change__password--modal {
    width: 50%;
    max-height: calc(100% - 20px);
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    overflow-y: auto;
  }

  .change__pass__modal--heading {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    text-transform: capitalize;
    font-size: 20px;
  }
  .top__items__change__password {
    display: flex;
    flex-direction: column;
  }

  .change__password--close {
    display: flex;
    flex-direction: row;
    justify-content: end;
    width: 100%;
    color: var(--red-clr);
    font-size: 1.5rem;
  }
  .change__password--close: hover {
    color: #BB0000;
    cursor: pointer;
  }
  .change--pass--form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .group-wrap-input {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  .wrap--input {
    width: 100%;
    position: relative;
  }
  .wrap--input label {
    // color: #686868;
    font-size: 14px;
    letter-spacing: var(--letter-spacing);
    text-transform: capitalize;
  }
  .errors{
    color: #DF0404;
    font-size: 14px;
    padding-left: .6rem;
  }
  
  
  .input {
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
    // position: absolute;
  }
  .icon {
    position: absolute;
    font-size: 20px;
    right: 14px;
    top: 30px;
    cursor: pointer;
  }
  input[type="password"]::-ms-reveal,
  input[type="password"]::-ms-clear {
    display: none;
  }
.disabled{
    cursor: not-allowed;
    width: 27%;
}
  .container--change--pass--form--btn {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
  }

  .auth--btn{
    width: 27%;

  }
  
@media (max-width: 992px) {
  .change__password--modal {
    width: 60%;
  }


  .auth--btn{
    width: 40%;

  }
}

@media (max-width: 768px) {
  .change__password--modal{
    width: 80%;
  }
 
  .auth--btn{
    width: 100%;

  }
}
`;

export default Container;
