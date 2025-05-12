import styled from "styled-components";

const Container = styled.main`
  max-width: 1200px;
  margin: 3rem auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  .products-error {
    grid-column: span 2;
    text-align: center;
    padding: 2rem;
  }
  
  .products-error__text {
    font-size: 1.2rem;
    color: #666;
  }
  
  .single__product__img {
    position: relative;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: #f9f9fb;
    border-radius: 8px;
    padding: 2rem;
  }
  
  .single__product__img img {
    max-width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  .offer-card {
    position: absolute;
    top: 1.5rem;
    left: 1.5rem;
    background: white;
    color: var(--primary-clr);
    text-transform: capitalize;
    padding: 0.25rem 1rem;
    border-radius: 20px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    animation: popUp 0.8s ease-in-out infinite alternate;
  }
  
  .offer-card-content {
    font-size: 0.9rem;
    font-weight: 600;
    margin: 0;
  }
  
  @keyframes popUp {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
  }
  
  .single__product__page__content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .single__product__page__name h4 {
    margin: 0;
    font-size: 2.5rem;
    font-weight: 600;
    color: #333;
    line-height: 1.2;
  }
  
  .single__product__page__desc {
    margin-bottom: 1rem;
  }
  
  .single__product__page__desc p {
    font-size: 1rem;
    line-height: 1.6;
    color: #666;
    margin: 0;
  }
  
  .single__product__page__price__quality {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    /* margin-top: auto; */
  }
  
  .single__product__page__amount {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .single__product__page__amount-active {
    font-size: 1.8rem;
    font-weight: 600;
  }
  
  .single__product__page__placeholder {
    margin: 0;
    color: #333;
  }
  
  .single__product__page__amount-past {
    text-decoration: line-through;
    font-size: 1.2rem;
    color: #888;
  }
  
  .single__product__page__add__to__cart {
    width: 100%;
  }
  
  .single__product__page__add__to__cart__btn {
    width: 100%;
    padding: 1rem;
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .single__product__out_ofStock__btn{
    width: 100%;
    padding: 1rem;
    font-size: 1rem;
    font-weight: 600;
    background-color: #888;
    text-transform: uppercase;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .single__product__page__add__to__cart__btn:hover {
    background-color: #ff5252;
  }
  
  /* Responsive styles */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    
    .products-error {
      grid-column: span 1;
    }
    
    .single__product__img {
      padding: 1.5rem;
    }
    
    .single__product__img img {
      max-height: 400px;
    }
    
    .single__product__page__name h4 {
      font-size: 2rem;
    }
  }
  
  @media (max-width: 480px) {
    margin: 2rem auto;
    padding: 0 1rem;
    
    .single__product__img {
      padding: 1rem;
    }
    
    .single__product__img img {
      max-height: 300px;
    }
    
    .single__product__page__name h4 {
      font-size: 1.8rem;
    }
    
    .single__product__page__amount-active {
      font-size: 1.5rem;
    }
    
    .single__product__page__amount-past {
      font-size: 1rem;
    }
    
    .single__product__page__add__to__cart__btn {
      padding: 0.8rem;
    }
  }
`;

export default Container;