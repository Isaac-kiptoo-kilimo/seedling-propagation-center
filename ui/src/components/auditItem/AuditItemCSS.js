import styled from "styled-components";

const Container = styled.article`
  --gray-text: #475467;
  --gray-border: #e4e7ec;
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-1);

  .audit__detail {
    display: flex;
    gap: 1rem;
    span {
      font-weight: 700;
      text-transform: capitalize;
    }
    .audit__value {
      letter-spacing: 0.5px;
      color: var(--gray-text);
    }
  }
  .audit__detail--index {
    display: none;
  }
  @media (min-width: 1200px) {
    padding: 1rem;
    box-shadow: none;
    border-radius: 0;
    border-bottom: 1px solid var(--gray-border);
    display: grid;
    align-items: center;
    gap: 1rem;
    grid-template-columns: 30px 1fr 1fr 1fr 1fr 1fr;
    .audit__detail--index {
      display: block;
    }
    .audit__detail {
      span {
        display: none;
      }
      .audit__value {
        font-size: 0.85rem;
        letter-spacing: var(--letter-spacing);
      }
    }
  }
`;

export default Container;
