import styled from "styled-components";

const Container = styled.section`
  --gray-border: #e4e7ec;
  cursor: pointer;

  border-left: none;
  border-right: none;
  padding: 0.5rem 1rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(4, 1fr) 100px;
  align-items: center;
  .single-staff__profile {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-weight: 500;
    letter-spacing: var(--letter-spacing);
    .profile__img,
    .profile__placeholder {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    .profile__placeholder {
      background-color: var(--primary-clr);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--white);
      text-transform: uppercase;
    }
  }
  .single-staff__name {
    font-size: 0.85rem;
    color: #101828;
  }
  .single-staff__status p {
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

  .single-staff__status span {
    width: 5px;
    height: 5px;
    border-radius: 50%;
  }

  .single-staff__role,
  .single-staff__email,
  .single-staff__phone__no {
    text-transform: capitalize;
    letter-spacing: 0.5px;
    color: var(--gray-header);
    font-size: 0.85rem;
  }
  .single-staff__phone__no {
    position: relative;
    display: flex;
    gap: 0.25rem;
    flex-wrap: nowrap;
  }
  .skill {
    border: 1.5px solid var(--primary-clr);
    padding: 0.25rem 0.5rem;
    border-radius: 100vw;
    font-size: 0.75rem;
  }
  .skill-count {
    position: absolute;
    right: 20%;
    top: 0.5rem;
    white-space: nowrap;
    /* background-color: #353535; */
    background-color: #353535;
    border: 1px solid #353535;
    color: var(--smoky-white);
    box-shadow: var(--shadow-1);
    padding: 0.25rem 1rem;
    /* border-radius: 100vw; */
    border-radius: 10px;
    letter-spacing: var(--letter-spacing);
    display: none;
  }
  .single-staff__phone__no:hover .skill-count {
    display: block;
  }
  .single-staff__actions {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .single-staff__delete,
  .single-staff__edit {
    background-color: transparent;
    font-size: 1rem;
  }
  .single-staff__edit {
    color: var(--primary-clr);
  }
  .single-staff__edit:hover {
    color: #006600;
  }
  .single-staff__delete {
    color: var(--danger);
  }
  .single-staff__delete:hover {
    color: var(--red-clr);
  }
`;

export default Container;
