import styled from "styled-components";

const Container=styled.main`
.delete-confirmation-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.delete--modal-main-card {
  display: flex;
  flex-direction: column;
  width: 39%;
  height: 27%;
  background: white;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
  border-radius: 20px;
  padding: 10px;
}
.close--modal-btn{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    height: 4vh;
    cursor: pointer;
}
.delete--confirmation-content{
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px 60px;
    gap: 30px;
   
}
.confirmation-modal-header{
    text-align: center;
    font-weight: 100;
}
.confirmation-modal-header p{
    font-weight: 200;
}
.confirm-delete-btns{
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    gap: 20px;
}
.yes-btn{
    width: 45%;
    padding: 10px;
    background-color: white;
    border: 1px solid black;
    border-radius: 20px;
}
.no-btn{
    width: 45%;
    padding: 10px;
    background-color: black;
    color: white;
    border-radius: 20px;
}
`
export default Container;