import styled from "styled-components";

const Container= styled.main`
.payment-methodcard{
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 2rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    padding: 16px;
}
.payment--method-content{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
}
.payment--method-name{
    display: flex;
    flex-direction: column;
    gap: 5px;
}
.payment--method-paybill,.payment--on-delivery{
    display: flex;
    flex-direction: row;
    gap: 2rem;
    align-items: center;
    width: 100%;
}
.mpesa-accounts{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-grow: 1;
}
.personal-info-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background: #f7f7f7; */
  padding: 1rem;
  border-radius: 10px;
  font-size: 16px;
}

.edit-icon {
  color: #ccc;
  cursor: pointer;
  font-size: 20px;
  transition: transform 0.2s ease;
}

.edit-icon:hover {
  transform: scale(1.1);
}

/* .payment-option {
  display: none;
} */

.payment-option:checked + .payment-method-name {
  font-weight: bold;
  color: green;
}

.payment-option.selected {
  border: 2px solid green;
}

.payment-radio-btn {
  margin-right: 10px;
}

`
export default Container;