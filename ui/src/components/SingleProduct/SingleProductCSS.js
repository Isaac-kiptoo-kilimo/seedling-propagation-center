import styled from "styled-components";

const Container = styled.article`
  --gray-checkbox: #d0d5dd;
  --gray-header: #475467;
  --gray-status: #344054;
  --role-bg: #eff0f6;
  --gray-border: #e4e7ec;
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  box-shadow: var(--shadow-1);
  border-radius: var(--border-radius);
  padding: 1.5rem;

  .single-product {
    display: flex;
    align-items: center;
    gap: .5rem;
    width: 100%;
    border: 1px solid var(--gray-border);
    border-radius: 10px;
    padding: 10px;

  }

  .product__placeholder img {
    width: 120px;
    height: 120px;
    object-fit: cover;
  }

  .single-product__info {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: .5rem;
    border-right: 1px solid var(--gray-border);
    height: 100%;
    padding: 0 10px;
  }

  .single__product__group {
    flex: 1;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: .5rem;
    border-right: 1px solid var(--gray-border);
    height: 100%;
    padding: 0 10px;
  }

  .header__title {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--gray-header);
  }

  .single-product__name {
    font-size: 0.85rem;
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
  }

  .product-buttons {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    align-items: flex-end;
  }

  .single-product__edit,
  .single-product__delete {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    cursor: pointer;
  }

  .single-product__edit {
    border: 1px solid var(--primary-clr);
    background-color: transparent;
    color: var(--primary-clr);
  }

  .single-product__edit:hover {
    background-color: var(--primary-clr);
    color: var(--white);
  }

  .single-product__delete {
    border: 1px solid var(--danger);
    background-color: transparent;
    color: var(--danger);
  }

  .single-product__delete:hover {
    background-color: var(--danger);
    color: var(--white);
  }
`;

export default Container;
