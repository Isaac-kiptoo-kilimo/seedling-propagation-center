import styled from "styled-components";

const Container = styled.section`
  --gray-border: #e4e7ec;
  cursor: pointer;

  border-left: none;
  border-right: none;
  padding: 0.5rem 1rem;
  display: grid;
  gap: 2rem;
  grid-template-columns:
    1rem
    4rem
    6rem
    5rem
    1.5fr
    4rem
    4rem
    2rem
    4rem
    1rem;
  align-items: center;
  .single-order {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-weight: 500;
    letter-spacing: var(--letter-spacing);
  }
  .single-order__name {
    font-size: 0.85rem;
    color: #101828;
  }
  .single-order__status p {
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

  .single-order__status span {
    width: 5px;
    height: 5px;
    border-radius: 50%;
  }

  .single-order__name,
  .single-order__category,
  .single-order__description,
  .single-order__price,
  .single-order__offerprice,
  .single-order__quantity{
    text-transform: capitalize;
    letter-spacing: 0.5px;
    color: var(--gray-header);
    font-size: 0.85rem;
  }
  .single-order__quantity {
    position: relative;
    display: flex;
    gap: 0.25rem;
    flex-wrap: nowrap;
  }
 

  .single-order__quantity:hover {
    display: block;
  }
  .single-order__actions {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    position: relative;

  }
  .single-order__delete,
  .single-order__edit {
    background-color: transparent;
    font-size: 1rem;
  }
  .single-order__edit {
    color: var(--primary-clr);
  }
  .single-order__edit:hover {
    color: #006600;
  }
  .single-order__delete {
    color: var(--danger);
  }
  .single-order__delete:hover {
    color: var(--red-clr);
  }
  .action-menu-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  color: var(--primary-clr);
}

.action-modal {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  padding: 0.75rem 0;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  z-index: 20;
  min-width: 220px;
}

.action-modal button {
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  padding: 0.75rem 1rem;
  font-size: 0.95rem;
  width: 100%;
  transition: background 0.2s ease, color 0.2s ease;
  border-radius: 4px;
}

.action-modal button:hover {
  background-color: var(--primary-clr);
  color: white;
}


`;

export default Container;
