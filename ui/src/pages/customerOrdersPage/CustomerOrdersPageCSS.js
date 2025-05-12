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

`;

export default Container;
