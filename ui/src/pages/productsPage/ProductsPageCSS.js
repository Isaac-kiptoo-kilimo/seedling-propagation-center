import styled from "styled-components";

const Container=styled.main`
.shop--products-main{
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    background-color: white;
}
.shop--products--title{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    margin-bottom: 5px;
}
.product__banner{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  border: 2px solid #DDDDDD;
  width: 95%;
  margin: 2rem auto;
}
.products--filter-items{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    gap: 3rem;
}
.categories-card{
    width: 100%;
    background-color: white;
    padding: 1rem;
}
.inline__categories-card{
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
}
.products--items{
    display: flex;
    flex-direction: row;
    gap: 2rem;
    width: 95%;
    margin: 0 auto;
    border-top: 1px solid  #d1d5db;
    padding-top: 1rem;
}
.products--display{
    display: flex;
    flex-direction: column; 
    margin: 0 auto;
    width: 100%;
    padding: 1rem 2.2rem 0 2rem;
}
.category--names{
    display: flex;
    flex-direction: column;
    gap: .5rem;

}
.category-btns{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
.categories-items{
    font-size: 16px;
}
.products-cards{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    width: 100%;
    margin: 0 auto;

}
.shop--products--title p{
font-weight: 500;
font-size: 1rem;
color: #5D6167;
}

.categories-card {
  padding: 1.5rem;
  background-color: #f5f5f5;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
}

.categories-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #333;
}

.price-slider {
  width: 100%;
  appearance: none;
  height: 5px;
  border-radius: 4px;
  background: linear-gradient(to right, #16a34a 0%, #16a34a 50%, #d1d5db 50%, #d1d5db 100%);
  outline: none;
  margin: 1rem 0;
  transition: background 0.3s ease;
}

.price-slider::-webkit-slider-thumb {
  appearance: none;
  width: 22px;
  height: 22px;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid white;
  box-shadow: 0 0 2px rgba(0,0,0,0.3);
}
.inline-filters {
  display: flex;
  flex-direction: row;
  gap: 4rem;
  margin: 1.5rem auto;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem;
  width: 100%;
  background-color: #f5f5f5;
}

.products__contents{
  /* padding-top: 1rem; */
  /* margin-top: 1rem; */
}
.inline-filters select,
.inline-filters input {
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  width: 20rem;
}

.inline-filters .reset-btn {
  margin: 0;
}


.price-range-values {
  display: flex;
  justify-content: space-between;
  font-size: 0.95rem;
  margin-top: -0.5rem;
  color: #4b5563;
}

.reset-btn {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #f87171;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.reset-btn:hover {
  background-color: #dc2626;
}

@media (max-width: 768px) {
  .products--items{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 95%;
    margin: 0 auto;
}
.products--filter-items{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 1rem;
}
}


`
export default Container;