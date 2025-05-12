import styled from "styled-components";

const Container = styled.section`
  --black-caption: #101828;
  --gray-border: #e4e7ec;
  --gray-header: #475467;
  --gray-status: #344054;
  --gray-checkbox: #d0d5dd;
  --header-bg: #f9fafb;

  // margin-top: 2rem;
  .employees-error,
  .employees-zero {
    text-align: center;
    letter-spacing: var(--letter-spacing);
    text-transform: capitalize;
  }
  .employees{
    margin-top: 2rem;
  }
  .employees__title {
    margin-bottom: 1rem;
    border: none;
    font-size: 18px;
    font-weight: 600;
    color: var(--black-caption);
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
  }
  .employees__grid--sm {
    margin-top: 1rem;
    /* z-index: -1; */
  }
  .employees--sm {
    display: grid;
    gap: 1rem;
  }
  .employees__grid--lg {
    display: none;
  }
  .employees__heading {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(4, 1fr) 100px;
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
    .employees--sm {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1200px) {
    .employees--sm {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (min-width: 1200px) {
    .employees {
      border: 1px solid var(--gray-border);
      border-radius: 10px;
    }
    .employees__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 5rem;
      padding: 0.5rem 1rem;
    }
    .employees__title {
      margin: 0;
    }
    .employees__filters {
      box-shadow: none;
      padding: 1.5rem 1rem;
      margin: 0;
    }
    .employees__grid--sm {
      display: none;
    }
    .employees__grid--lg {
      display: block;
    }
    .employee-zero--lg {
      padding: 2rem 0;
      border-top: 1px solid var(--gray-border);
    }
    .employee__row:not(:last-child) {
      border-bottom: 1px solid var(--gray-border);
    }
    .employee__row:first-child {
      border-top: 1px solid var(--gray-border);
    }
  }
`;

export default Container;
