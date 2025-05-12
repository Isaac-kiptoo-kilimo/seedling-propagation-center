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

  .single-order {
    display: flex;
    align-items: center;
    gap: .5rem;
    width: 100%;
    border: 1px solid var(--gray-border);
    border-radius: 10px;
    padding: 10px;

  }
  .single-order__info {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: .5rem;
    border-right: 1px solid var(--gray-border);
    height: 100%;
    padding: 0 10px;
  }

  .single__order__group {
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

  .single-order__name {
    font-size: 0.85rem;
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
  }

  .order-buttons {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    align-items: flex-end;
  }

  .single-order__edit,
  .single-order__delete {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    cursor: pointer;
  }

  .single-order__edit {
    border: 1px solid var(--primary-clr);
    background-color: transparent;
    color: var(--primary-clr);
  }

  .single-order__edit:hover {
    background-color: var(--primary-clr);
    color: var(--white);
  }

  .single-order__delete {
    border: 1px solid var(--danger);
    background-color: transparent;
    color: var(--danger);
  }

  .single-order__delete:hover {
    background-color: var(--danger);
    color: var(--white);
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
