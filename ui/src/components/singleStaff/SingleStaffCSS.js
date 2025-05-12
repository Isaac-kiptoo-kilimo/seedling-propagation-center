import styled from "styled-components";

const Container = styled.article`
  --gray-checkbox: #d0d5dd;
  --gray-header: #475467;
  --gray-status: #344054;
  --role-bg: #eff0f6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--white);
  box-shadow: var(--shadow-1);
  border-radius: var(--border-radius);
  padding: 2rem;
  .single-staff__profile {
    cursor: pointer;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .single-staff__img,
  .single-staff__placeholder-profile {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  .single-staff__placeholder-profile {
    background-color: var(--primary-clr);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    text-transform: uppercase;
  }
  .single-staff__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
  }
  .single-staff__name {
    font-size: 1rem;
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
  }

  .single-staff__role {
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
  .staff-buttons {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .single-staff__edit,
  .single-staff__delete {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .single-staff__edit {
    padding: 0.25rem;
    font-size: 0.85rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--primary-clr);
    background-color: transparent;
    color: var(--primary-clr);
  }
  .single-staff__edit:hover {
    background-color: var(--primary-clr);
    color: var(--white);
  }
  .single-staff__delete {
    border: 1px solid var(--danger);
    background-color: transparent;
    color: var(--danger);
  }
  .single-staff__delete:hover {
    background-color: var(--danger);
    color: var(--white);
  }
`;

export default Container;
