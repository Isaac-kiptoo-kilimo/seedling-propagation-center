import styled from "styled-components";

const Container = styled.div`
  --gray-border-btn: #d0d5dd;
  --gray-text: #344054;
  --input-bg: #eff0f6;

  margin-top: 2rem;
  box-shadow: var(--shadow-1);
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;

  .prev__btn,
  .next__btn {
    background-color: transparent;
    span {
      display: none;
    }
  }

  .numbered__buttons {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .page__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;

    padding: 5px;
    color: var(--gray-text);
  }
  .page__btn--active {
    /* border-bottom: 2px solid var(--gray-text); */
    color: var(--primary-clr);
    border-radius: 0;
  }
  @media (min-width: 1200px) {
    border-top: 1px solid var(--gray-border);
    box-shadow: none;
    border-radius: 0;
    margin-top: 0;
    .page__btn {
      width: 30px;
      height: 30px;
      border-radius: var(--border-radius);
    }
    .page__btn--active {
      background-color: var(--input-bg);

      border: none;
    }
    .prev__btn,
    .next__btn {
      background-color: transparent;
      padding: 0.5rem 1rem;
      border-radius: var(--border-radius);
      border: 1px solid var(--gray-border);
      display: flex;
      gap: 1rem;
      align-items: center;
      text-transform: capitalize;
      letter-spacing: var(--letter-spacing);
      color: var(--gray-text);
      font-weight: 500;
      font-size: 0.85rem;
      span {
        display: inline-block;
      }
    }
  }
`;

export default Container;
