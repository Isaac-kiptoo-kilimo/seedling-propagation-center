import styled from "styled-components";

const Container = styled.section`
  --gray-border: #e4e7ec;
  --gray-header: #475467;
  --header-bg: #f9fafb;
  --category-text: #475467;

  --category-bg: #eff0f6;

  .categories__container {
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .categories__title {
    margin: 0;
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    font-size: 1.5rem;
    font-weight: 600;
  }

  .category__top--content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .search__input {
    display: flex;
    flex-direction: row;
    align-items: center;
    /* gap: 0.5rem; */
    background-color: #eff0f6;
    padding: 0 0.5rem;
    border-radius: 5px;
    font-size: 1.2rem;
  }
  .search__input input {
    background-color: #eff0f6;
    font-size: 0.9rem;
    padding: 0.6rem 0.5rem;
    outline: none;
  }

  .category__top--content {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .error__msg,
  .employees-zero {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    gap: 0.5rem;
    svg {
      color: var(--primary-clr);
    }
  }

  .category__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  .category {
    cursor: pointer;
    /* position: relative; */
    /* background-color: yellow; */
    padding: 0.5rem 1rem;
    /* border-radius: var(--border-radius); */
    font-size: 0.75rem;
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.24);
    color: var(--category-text);
    font-weight: 500;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
  .category__employee-count {
    background-color: var(--primary-clr);
    width: 25px;
    height: 25px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--category-bg);
    font-weight: 700;
  }
  .category__modal {
    background-color: var(--white);
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    z-index: 10;
    width: 100%;
  }
  .category__edit,
  .category__delete {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    background-color: transparent;
    letter-spacing: var(--letter-spacing);
    text-transform: capitalize;
  }
  .category__edit {
    color: var(--primary-clr);
  }
  .category__delete {
    color: var(--red-clr);
  }
  @media (min-width: 768px) {
    .category__top--content {
      flex-direction: row;
      justify-content: space-between;
    }
    .search__input {
      width: 200px;
    }
    .search__input input {
      width: 80%;
    }
    .btn--primary {
      padding: 0.5rem 3rem;
    }
    .category__grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (min-width: 1200px) {
    .category__grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (min-width: 1600px) {
    .category__grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default Container;
