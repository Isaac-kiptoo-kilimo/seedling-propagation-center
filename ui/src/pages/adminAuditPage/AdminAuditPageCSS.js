import styled from "styled-components";

const Container = styled.main`
  padding: 2rem;
  --gray-border: #e4e7ec;
  --gray-header-text: #475467;

  .audit__title {
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    font-size: 1.5rem;
    margin-bottom: 2rem;
    font-weight: 600;
  }
  .audit__head {
    display: none;
  }
  .audit__zero, .audit__error {
    text-align: center;
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    padding: 1rem;
    border-top: 1px solid var(--gray-border);
  }
  .audit__grid {
    display: grid;
    gap: 1rem;
  }
  @media (min-width: 980px) {
    .audit__grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1000px) {
    .audit__grid {
      grid-template-columns: 1fr;
    }
  }
  @media (min-width: 1200px) {
    .audit-container {
      border: 1px solid var(--gray-border);
      border-radius: var(--border-radius);
    }
    .audit__header {
      padding: 2rem 1rem;
      display: flex;
      align-items: center;
      gap: 1rem;
      justify-content: space-between;
    }
    .audit__title {
      margin: 0;
    }
    .audit__head {
      background-color: #f9fafb;
      border-top: 1px solid var(--gray-border);
      border-bottom: 1px solid var(--gray-border);
      padding: 1rem;
      display: grid;
      gap: 1rem;
      grid-template-columns: 30px 1fr 1fr 1fr 1fr 1fr;
    }
    .head__title {
      color: var(--gray-header-text);
      font-size: 0.85rem;
      letter-spacing: var(--letter-spacing);
      text-transform: capitalize;
      font-weight: 600;
    }
    .audit__grid {
      grid-template-columns: 1fr;
    }
  }
`;

export default Container;
