import styled from "styled-components";

const Container = styled.div`
  .wrap--input {
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
    border: 1.5px solid #e6e6e6;
    border-radius: var(--border-radius);
    transition: border 0.3s ease-in-out;
  }
  .wrap--input.focused {
    border: 1.5px solid var(--green);
  }

  .label--input {
    font-size: 16px;
    color: #999999;
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.3s ease-in-out;
    pointer-events: none;
    background: white;
    padding: 0 5px;
  }

  .label--input.focused {
    top: -5px;
    left: 12px;
    background: white;
    color: var(--green);
    padding: 0 5px;

  }

  .input {
    flex: 1;
    font-size: 16px;
    color: #555555;
    border: none;
    outline: none;
    background: transparent;
    width: 100%;
    height: 100%;
    padding: 14px 14px;
  }


  .icon {
    position: absolute;
    font-size: 20px;
    right: 14px;
    cursor: pointer;
  }
`;

export default Container;
