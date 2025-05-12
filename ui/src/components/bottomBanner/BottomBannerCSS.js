import styled from "styled-components";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  background-color: #F4F4F4;

  .bottom--banner {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    width: 60%;
  }

  .bottom--banner h4 {
    font-size: 46px;
    font-weight: 500;
    color: #2B2F38;
  }

  .bottom--banner p {
    font-size: 16px;
    line-height: 1.9;
    color: #5D6167;
  }

  @media (max-width: 768px) {
    padding: 2rem; 

    .bottom--banner {
      width: 90%;
      text-align: center;
    }

    .bottom--banner h4 {
      font-size: 32px;
    }

    .bottom--banner p {
      font-size: 14px;
      line-height: 1.7;
    }
  }
`;

export default Container;
