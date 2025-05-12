import styled from "styled-components";

const Container = styled.main`
  .checkout-container-page {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    font-family: "Poppins", sans-serif;
  }

  .checkout-card {
    display: flex;
    flex-direction: row;
    width: 95%;
    background: #ffffff;
    gap: 1.5rem;
    padding: 20px;
    border-radius: 12px;
    /* box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); */
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
.checkout-information{
  width: 60%;
}
  .checkout-card-content {
    width: 100%;
    background: #f9f9f9;
    padding: 20px;
    border-radius: 12px;
  }

  .checkout-details-form-title h4 {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 15px;
  }

  .checkout-details-form label {
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 5px;
    color: #333;
    display: block;
  }

  .checkout-details-form input,
  .checkout-details-form select {
    width: 100%;
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #ddd;
    outline: none;
    font-size: 16px;
    margin-bottom: 15px;
    &:focus {
    border: 1.5px solid #c4c4c4;
  }
  }
  .order-header{
    font-size: 18px;
    font-weight: 550;
  }
.order-edit-items{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 15px 15px;
}
.edit-order-items-btn{
  font-size: 15px;
  font-size: 500;
  border: 1px solid #ddd;
  background-color: white;
  padding: 10px 15px;
}
 .cart-bottom-btns{
    width: 100%;
   margin: 20px 0;
 }
 .btn-place-order{
    width: 100%;
    font-size: 16px;
    padding: 16px 0;
    font-weight: bold;
 }
 .btn-place-order-disabled{
  background-color: #ccc;
  cursor: not-allowed
               
 }

  .phone-group-number-input {
    display: flex;
    gap: 10px;
  }
  .area--code-input{
    width: 20%;
  }
  .phone-number-input{
    flex-grow: 1;
  }
  .phone-group-number-input input {
    width: 100%;
  }
  .asterisk {
  color: var(--danger);
  font-size: 16px;
  font-weight: bold;
}

.checkout-order{
  width: 40%;
}
  .order-card-items {
    width: 100%;
    background: #ffffff;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  .order--cart-view-card {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px;
    background: #f5f5f5;
    border-radius: 8px;
    margin-bottom: 15px;
  }

  .order--cart-img img {
    width: 90px;
    height: 90px;
    border-radius: 6px;
  }

  .cart-description p {
    font-size: 16px;
    font-weight: 500;
  }

  .order--total-amount-card {
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #f9f9f9;
    border-radius: 8px;
  }
 
  .order--all-total {
    display: flex;
    justify-content: space-between;
    padding: 16px;
    background: #fafafa;
    width: 100%;
  }

.order--sub-total,.order--shipping-fee{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
}
.order--sub-total p{
  font-size: 16px;
}
.order--sub-total h4{
  font-size: 20px;
  font-weight: 400;
}
.order--shipping-fee p{
  font-size: 14px;
}
.order--shipping-fee h4{
  font-size: 16px;
}

.order--total-value{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  font-weight: 600;
  color: #000;
}
.order--total-value p{
  font-size: 20px;
  font-weight: 600;
}
.order--total-value h4{
  font-size: 28px;
  font-weight: 600;
}

 .county-detail-input{
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 10px;
    /* background-color: yellow; */
 }
 .sub-county-select-input{
    width: 100%;
    /* background-color: green; */
 }
 .ward-select-input{
    width: 100%;
    /* background-color: red; */
 }
 .submit-btn-container{
    width: 100%;
    display: flex;
    justify-content: center;
 }
  .submit-btn {
    width: 70%;
    padding: 14px;
    background: black;
    color: #ffffff;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;
  }

  /* .checkout--cart-btn:hover {
    background: #007f00;
  } */
  .mpesa-input {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.mpesa-input label {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
}

.mpesa-input input {
  padding: 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

.mpesa-input input:focus {
  border-color: var(--primary-clr);
  outline: none;
}
.prompt-btn{
  display: flex;
  flex-direction: row;
  justify-content: end;
  width: 100%;
}
.mpesa-input button {
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  box-sizing: border-box;
}
.spinner-icon {
  animation: spin 1s linear infinite;
  margin-right: 0.5rem;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}

.errors{
  color: #DF0404;
  font-size: 14px;
  padding-left: .8rem;
}
@media (max-width: 768px) {
   
  .checkout-card {
    flex-direction: column;
  }
  .checkout-information{
  width: 100%;
}
.checkout-order{
  width: 100%;
}
}
`;

export default Container;
