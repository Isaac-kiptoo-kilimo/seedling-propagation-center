import styled from "styled-components";

const Container = styled.section`
  --black-caption: #101828;
  --gray-border: #e4e7ec;
  --gray-header: #475467;
  --gray-status: #344054;
  --gray-checkbox: #d0d5dd;
  --header-bg: #f9fafb;

  // margin-top: 2rem;
  .orders-error,
  .orders-zero {
    text-align: center;
    letter-spacing: var(--letter-spacing);
    text-transform: capitalize;
  }
  .orders{
    margin-top: 2rem;
  }
  .orders__title {
    margin-bottom: 1rem;
    border: none;
    font-size: 18px;
    font-weight: 600;
    color: var(--black-caption);
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
  }
  .orders__grid--sm {
    margin-top: 1rem;
    /* z-index: -1; */
  }
  .orders--sm {
    display: grid;
    gap: 1rem;
  }
  .orders__grid--lg {
    display: none;
  }
  .orders__heading {
    display: grid;
    gap: 2rem;
    grid-template-columns:   
    1rem
    4rem
    6rem
    5rem
    1.5fr
    4rem
    4rem
    2rem
    4rem
    1rem;
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
    .orders--sm {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1200px) {
    .orders--sm {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (min-width: 1200px) {
    .orders {
      border: 1px solid var(--gray-border);
      border-radius: 10px;
    }
    .orders__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 5rem;
      padding: 0.5rem 1rem;
    }
    .orders__title {
      margin: 0;
    }
    .orders__filters {
      box-shadow: none;
      padding: 1.5rem 1rem;
      margin: 0;
    }
    .orders__grid--sm {
      display: none;
    }
    .orders__grid--lg {
      display: block;
    }
    .employee-zero--lg {
      padding: 2rem 0;
      border-top: 1px solid var(--gray-border);
    }
    .order__row:not(:last-child) {
      border-bottom: 1px solid var(--gray-border);
    }
    .order__row:first-child {
      border-top: 1px solid var(--gray-border);
    }
  }
`;

export default Container;
