import styled from "styled-components";

const Container=styled.main `
.shopping-cart-page{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}
.tracking--order-section{
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  padding: 20px;
}
.shopping-track-btn,.checkout--tack-btn,.order-complete--track-btn{
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #bbb;
}
.shopping-track-btn button,.checkout--tack-btn button,.order-complete--track-btn button{
  background-color: white;
  font-size: 18px;
  color: #bbb;
}
.active, .active button{
  color: black;
}
.shopping-cart-view{
  display: flex;
  flex-direction: column;
  width: 100%;
}
.shopping-cart {
  display: flex;
  flex-direction: row;
  width: 98%;
  background: white;
  gap: 1rem;
  padding: 10px 10px 10px 0;
}


.shopping-cart-header {
  display: flex;
  align-items: center;
  padding: 16px;
  background: white;
  font-size: 10px;
  font-weight: 400;
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

.shopping-cart-content {
  padding: 16px;
  width: 60%;
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
    width: 100%;
  }
.shopping--cart-view-card{
  display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    background: #fafafa;
    width: 100%;
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
    padding: 20px;
    flex: 1;
  }

  .cart-description {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }
  .cart-description p {
    font-size: 18px;
    font-weight: 500;
  }
  .shopping--cart-each-price{
    width: 100%;
  }

  .shopping--cart-each-price h4 {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    font-size: 25px;
    align-items: center;
    gap: 14px;
    font-weight: 400;
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
.cart-footer-items{
  flex-grow: 1;
  height: 35vh;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.shopping--cart-all-total {
    display: flex;
    justify-content: space-between;
    padding: 16px;
    /* background-color: yellow; */
    background: #fafafa;
    width: 100%;
  }
  .shopping--cart-order-summary-title{
    width: 100%;
    border-bottom: 1px solid#aea6a6;
    padding: 10px;
  }
.shopping--cart-sub-total{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
}
.shopping--cart-sub-total h4{
  font-size: 16px;
}

.cart--total-value{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
}
.cart--total-value p{
  font-size: 16px;
}
.shopping--cart-each-product-delete{
  cursor: pointer;
}
.cart--all-checkbox{
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2px;
  margin-left: 10px;
}

.cart--total-amount-card{
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
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
    text-align: center;
    padding: 20px;
    font-size: 14px;
    color: #666;
  };

  @media (max-width: 768px) {
   
    .shopping-cart {
  flex-direction: column;
}
.shopping-cart-content {
  width: 100%;
}
 }

`
export default Container;