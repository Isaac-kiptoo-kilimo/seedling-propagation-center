import styled from "styled-components";

const Container= styled.main`
.search-input-overlay {
  position: fixed;
  top: 20%;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  display: flex;
  justify-content: flex-end;
}

.search--input {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 36%;
  height: 25%;
  background: white;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  min-height: 25vh;
  padding: 2rem;
  gap: 1.5rem;
}

.shopping-cart-overlay .shopping-cart {
  transform: translateX(0);
}
.search--input-icons{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding: 5px;
}
.search--input-icons input{
    width: 100%;
    border: none;
    outline: 2px solid gray;
    border-radius: 20px;
    padding: 7px 15px;
    font-size: 18px;
    color: gray;
}
input[type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: none;
    appearance: none;
    display: none;
  }
.search--icon{
    font-size: 24px;
    margin-left: -40px;
    cursor: pointer;
    color: gray;
}
.close-btn{
    background-color: white;
    border: none;
    outline: none;
    cursor: pointer;
    color: gray;

}

`
export default Container;