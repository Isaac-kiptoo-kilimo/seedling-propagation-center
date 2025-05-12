import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  overflow: auto;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  bottom: 2rem;
  padding: 2rem 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  .project__form {
    position: relative;
    width: 90vw;
    max-width: 600px;
    margin: 0 auto;
    background-color: var(--white);
    padding: 2rem;
    border-radius: var(--border-radius);
    display: grid;
    gap: 1rem;
  }
  .form__header {
    margin-bottom: 1rem;
  }
  .form__title {
    letter-spacing: var(--letter-spacing);
    text-align: center;
    text-transform: capitalize;
    font-weight: 700;
  }
  .modal__close {
    position: absolute;
    top: 1rem;
    right: 2rem;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: var(--red-clr);
    color: var(--white);
    font-size: 1rem;
  }
  .form__label {
    letter-spacing: var(--letter-spacing);
    text-transform: capitalize;
    font-size: 0.85rem;
    font-weight: 600;
  }
  .errors {
    color: #df0404;
    font-size: 14px;
    padding-left: 0.5rem;
  }
.disabled:hover{
  // width: 7.13rem;
  cursor: not-allowed;
}
  .form__input,
  .form__text-area {
    margin-top: 0.5rem;
    display: block;
    width: 100%;
    padding: .5rem;
    background-color: var(--white);
    color: #686868;
    font-size: 18px;
    font-family: inherit;
    font-weight: 400;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 4px;
  }
  ::placeholder {
    letter-spacing: var(--letter-spacing);
  }
  .button-container {
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
  }
  .form__row--switch{
    display: flex;
    flex-direction: column;
    margin: 1rem auto;
  }
    
  @media (max-width: 992px) {
    .add--project--btn{
      width: 40%;
    }
  }

  @media (max-width: 768px) {
    .add--project--btn{
      width: 100%;
    }
  }
  @media (max-width: 500px) {
    .add--project--btn{
      width: 100%;
    }
  }
`;
export default Container;
