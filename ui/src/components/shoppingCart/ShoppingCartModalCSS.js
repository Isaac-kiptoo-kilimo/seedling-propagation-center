import styled from "styled-components";

const Container=styled.main `
.shopping-cart-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
  display: flex;
  justify-content: flex-end;
}

.shopping-cart {
  display: flex;
  flex-direction: column;
  width: 36%;
  height: 100%;
  background: white;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2);
  /* box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); */
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  overflow: hidden;
  min-height: 100vh;
}

.shopping-cart-overlay .shopping-cart {
  transform: translateX(0);
}

.shopping-cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #ddd;
  position: sticky;
  top: 0;
  background: white;
  font-size: 18px;
  font-weight: 600;
  height: 10vh;
}

.close-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: background 0.2s;
}

.close-button:hover {
  background: #f0f0f0;
}
.shopping-cart-content-container {
  flex-grow: 1;
  overflow-y: auto;
  min-height: calc(100vh - 20vh);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.shopping-cart-content {
  padding: 16px;
  flex-grow: 1;
}

.shopping--cart-main-content {
  display: flex;
  flex-direction: column;
}
.shopping--cart-card{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #f0f0f0;
  }

.shopping--cart-img img {
    width: 120px;
    height: 120px;
    border-radius: 5px;
    margin-left: 10px;
  }

  .shopping--cart-desc-price {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 5px;
    flex: 1;
    margin-left: 15px;
  }

  .cart-description p {
    font-size: 18px;
    font-weight: 500;
  }

  .shopping--cart-each-price h4 {
    display: flex;
    flex-direction: row;
    width: 100%;
    font-size: 25px;
    color: #666;
    align-items: center;
    gap: 15px;
    font-weight: 300;
  }

  .shopping--cart-each-price span {
    text-decoration: line-through;
    color: #bbb;
    font-size: 18px;
    font-weight: 300;
  }
  .shopping--cart-btns{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .cart--incr-decrease-btn {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    border: 1px solid #ddd;
    border-radius: 2px;
  }
.cart-descrease-btn{
  font-weight: 200;
  cursor: pointer;
}
.cart---increase-btn{
  font-weight: 200;
  cursor: pointer;
}
  .cart--increase-descrease-input input {
    width: 40px;
    text-align: center;
    border: none;
    outline: none;
    border-radius: 4px;
    padding: 4px;
  }

  .cart-footer-items {
  background: #fafafa;
  position: sticky;
  bottom: 0;
  width: 100%;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
}
.shopping--cart-all-total {
    display: flex;
    justify-content: space-between;
    padding: 16px;
    border-top: 1px solid #f0f0f0;
    /* background: #fafafa; */
  }
.shopping--cart-each-product-delete{
  cursor: pointer;
}
.cart--all-checkbox{
  display: flex;
  flex-direction: row;
  align-items: end;
  gap: 2px;
}

.cart--total-amount-card{
  display: flex;
  flex-direction: column;
  gap: 5px;
}
  .cart-bottom-btns {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 16px;
  }

  .view--cart-btn,
  .checkout--cart-btn {
    flex: 1;
    padding: 15px;
    border: none;
    border-radius: 30px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;
  }

  .view--cart-btn {
    background: #fff;
    color: #1a1a1a;
    border: 1px solid #1a1a1a;
  }

  .checkout--cart-btn {
    background: #1a1a1a;
    color: white;
  }

  .is--empty {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    padding: 20px;
    font-size: 20px;
    color: black;
  };
  .icon{
    font-size: 40px;
  }

   @media (max-width: 768px) {
   
    .shopping-cart {
  width: 100%;
  overflow-x: hidden;
}
  }

`
export default Container;