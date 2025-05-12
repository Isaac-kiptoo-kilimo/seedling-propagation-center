import styled from "styled-components";

const Container = styled.div`
  --role-text: #475467;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  .complete-modal {
    text-align: center;
    width: 90vw;
    max-width: 500px;
    margin: 15rem auto;
    padding: 2rem;
    background-color: var(--white);
    border-radius: var(--border-radius);
    z-index: 1;
  }
  .complete-modal__text {
    color: var(--role-text);
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    font-size: 1rem;
  }
  .complete-modal__buttons {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  .complete-modal__yes,
  .complete-modal__no {
    background-color: transparent;
    padding: 0.5rem 1rem;
    border-radius: var(--border-radius);
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
  }

  .complete-modal__no {
    border: 1px solid var(--danger);
    color: var(--danger);
  }
  .complete-modal__no:hover {
    background-color: var(--danger);
    color: var(--white);
  }
  .complete-modal__yes {
    border: 1px solid var(--primary-clr);
    color: var(--primary-clr);
  }
  .complete-modal__yes:hover {
    background-color: var(--primary-clr);
    color: var(--white);
  }
`;

export default Container;
