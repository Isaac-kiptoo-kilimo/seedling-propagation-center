import styled from "styled-components";

const Container = styled.section`
  --black-caption: #101828;
  --gray-border: #e4e7ec;
  --gray-header: #475467;
  --gray-status: #344054;
  --gray-checkbox: #d0d5dd;
  --header-bg: #f9fafb;

  // margin-top: 2rem;
  .products-error,
  .products-zero {
    text-align: center;
    letter-spacing: var(--letter-spacing);
    text-transform: capitalize;
  }
  .products{
    margin-top: 2rem;
  }
  .products__title {
    margin-bottom: 1rem;
    border: none;
    font-size: 18px;
    font-weight: 600;
    color: var(--black-caption);
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
  }
  .products__grid--sm {
    margin-top: 1rem;
    /* z-index: -1; */
  }
  .products--sm {
    display: grid;
    gap: 1rem;
  }
  .products__grid--lg {
    display: none;
  }
  .products__heading {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(8, 1fr);
    padding: 1rem;
    background-color: var(--header-bg);
    text-transform: capitalize;
    color: var(--gray-header);
    letter-spacing: var(--letter-spacing);
    font-weight: 500;

    .header__title {
      font-size: 0.75rem;
    }
  }
  @media (min-width: 768px) {
    .products--sm {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1200px) {
    .products--sm {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (min-width: 1200px) {
    .products {
      border: 1px solid var(--gray-border);
      border-radius: 10px;
    }
    .products__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 5rem;
      padding: 0.5rem 1rem;
    }
    .products__title {
      margin: 0;
    }
    .products__filters {
      box-shadow: none;
      padding: 1.5rem 1rem;
      margin: 0;
    }
    .products__grid--sm {
      display: none;
    }
    .products__grid--lg {
      display: block;
    }
    .employee-zero--lg {
      padding: 2rem 0;
      border-top: 1px solid var(--gray-border);
    }
    .product__row:not(:last-child) {
      border-bottom: 1px solid var(--gray-border);
    }
    .product__row:first-child {
      border-top: 1px solid var(--gray-border);
    }
  }
`;

export default Container;
