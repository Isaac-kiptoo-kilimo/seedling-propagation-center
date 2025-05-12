import styled from "styled-components";

const Container = styled.section`
  --gray-border: #e4e7ec;
  cursor: pointer;

  border-left: none;
  border-right: none;
  padding: 0.5rem 1rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(8, 1fr);
  align-items: center;
  .single-product {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-weight: 500;
    letter-spacing: var(--letter-spacing);
    .product__img,
    .product__placeholder {
      width: 60px;
      height: 40px;
      /* border-radius: 50%; */
    }
    .product__placeholder {
      background-color: var(--primary-clr);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--white);
      text-transform: uppercase;
    }
  }
  .single-product__name {
    font-size: 0.85rem;
    color: #101828;
  }
  .single-product__status p {
    display: flex;
    align-items: center;
    gap: 5px;
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    font-size: 0.75rem;
    color: var(--gray-status);
    font-weight: 500;
    border: 1px solid var(--gray-checkbox);
    padding: 0.125rem 0.5rem;
    border-radius: 5px;
    width: max-content;
  }

  .single-product__status span {
    width: 5px;
    height: 5px;
    border-radius: 50%;
  }

  .single-product__name,
  .single-product__category,
  .single-product__description,
  .single-product__price,
  .single-product__offerprice,
  .single-product__quantity{
    text-transform: capitalize;
    letter-spacing: 0.5px;
    color: var(--gray-header);
    font-size: 0.85rem;
  }
  .single-product__quantity {
    position: relative;
    display: flex;
    gap: 0.25rem;
    flex-wrap: nowrap;
  }
 

  .single-product__quantity:hover {
    display: block;
  }
  .single-product__actions {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .single-product__delete,
  .single-product__edit {
    background-color: transparent;
    font-size: 1rem;
  }
  .single-product__edit {
    color: var(--primary-clr);
  }
  .single-product__edit:hover {
    color: #006600;
  }
  .single-product__delete {
    color: var(--danger);
  }
  .single-product__delete:hover {
    color: var(--red-clr);
  }
`;

export default Container;
