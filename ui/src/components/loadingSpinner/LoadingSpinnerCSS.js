import styled from "styled-components";

const Container = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 2rem auto;
  border: 2px solid #f1f5f9;
  border-top-color: var(--primary-clr);
  animation: spin 0.3s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Container;
