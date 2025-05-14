import styled from "styled-components";

const Container = styled.main`
  --gray-border: #eceef6;
  --gray-insight: #acacac;
  padding: 2rem;
  .create__order__btn{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-right: 2rem;
  }
 .order__top--content {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
  .orders__dashboard__title {
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

export default Container;
