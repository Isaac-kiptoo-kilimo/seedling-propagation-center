import styled from "styled-components";

const Container = styled.main`
  --gray-border: #eceef6;
  --gray-insight: #acacac;
  padding: 2rem;
  .dashboard__title {
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    font-size: 1.5rem;
    margin-bottom: 2rem;
    font-weight: 600;
  }
  .dashboard__insights {
    display: grid;
    gap: 1rem;
  }
  // .dashboard__insight {
  //   display: flex;
  //   align-items: center;
  //   gap: 1.5rem;
  //   position: relative;
  //   border: 2px solid var(--gray-border);
  //   border-radius: 10px;
  //   padding: 1.5rem 1rem;
  //   z-index: -1;
  // }
  .dashboard__insight::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    bottom: -2px;
    border-radius: 10px 0 0 10px;
    width: 6.35px;
    background-color: var(--primary-clr);
  }
  .insight__icon {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to bottom, #d3ffe7 0%, #e5f2d6 100%);
    font-size: 3rem;
    color: var(--primary-clr);
  }
  .insight__title {
    color: var(--gray-insight);
    font-size: 0.85rem;
    letter-spacing: var(--letter-spacing);
  }

  .insight__count {
    font-weight: 700;
    font-size: 2rem;
  }
  .insight__text {
    display: flex;
    gap: 2px;
    font-size: 0.75rem;
    letter-spacing: var(--letter-spacing);
  }
  .insight__stats {
    display: flex;
    align-items: center;
    gap: 5px;
    color: var(--primary-clr);
  }

  @media (min-width: 768px) {
    .dashboard__insights {
      grid-template-columns: repeat(2, 1fr);
      justify-content: center;
    }
  }
  @media (min-width: 1000px) {
    padding: 2rem;

    .dashboard__insights {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default Container;
