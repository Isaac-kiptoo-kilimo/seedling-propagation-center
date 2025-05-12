import styled from "styled-components";

const Container = styled.main`

  @media (min-width: 768px) {
    .main {
      display: grid;
      grid-template-columns: 60px 1fr;
    }
  }
  @media (min-width: 1000px) {
    .main {
      grid-template-columns: 250px 1fr;
    }
  }
  .default {
    display: block;
  }
`;
export default Container;
