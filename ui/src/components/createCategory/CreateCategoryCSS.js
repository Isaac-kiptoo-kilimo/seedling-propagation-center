import styled from "styled-components";

const Container = styled.main`
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .add__category--modal {
    width: 50%;
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .add__category--modal--content {
    display: flex;
    flex-direction: column;
  }

  .add__category--close {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    color: var(--red-clr);
    font-size: 2rem;
    cursor: pointer;
  }

  .add__category--close :hover {
    color: #bb0000;
  }

  .category__modal--heading {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    font-size: 1.5rem;
    color: #3f3d56;
  }
  .add__category--modal--content form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  .dert__group--input label {
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 20px;
    color: #3f3d56;
  }

  .dert__group--input input[type="text"],
  .dert__group--input input[type="url"] {
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

  .dert__group--input input[type="text"]:focus,
  .dert__group--input input[type="url"]:focus {
    outline: 1.5px solid #c4c4c4;
  }
  
  .add__category--form .action-btn {
    display: flex;
    justify-content: center;
  }
  .errors{
  color: #DF0404;
  font-size: 14px;
  padding-left: .8rem;
}
  .add__category--btn {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 2rem;
  }
  .disabled{
    width: 5.05rem;
    cursor: not-allowed;
  }
  .category__add__button--sec {
    padding: 0.5rem 1.5rem;
    background-color: var(--red-clr);
    letter-spacing: var(--letter-spacing);
    color: var(--white);
    border-radius: var(--border-radius);
    text-transform: capitalize;
    border: 1px solid var(--red-clr);
  }

  .category__add__button--sec:hover {
  background-color: var(--white);
  color: var(--red-clr);
  border: 1px solid var(--red-clr);
}

@media (max-width: 992px) {
  .add__category--modal {
    width: 60%;
  }

}

@media (max-width: 768px) {
  .add__category--modal {
    width: 80%;
  }


}
@media (max-width: 500px) {
  .add__category--modal {
    width: 90%;
  }
  .add__category--btn {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }
  .dert__Checked__group--input label {
 
 width: 40%;

 }
  .action-btn{
    width: 100%;
  }
  .category__add__button--sec{
    width: 100%;
  }

  .category__add__btn-pry{
    width: 100%;
  }
}
`;
export default Container;
