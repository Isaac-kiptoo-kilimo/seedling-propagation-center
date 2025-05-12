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
  .single-employee__profile {
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
  .single-employee__name {
    font-size: 0.85rem;
    color: #101828;
  }
  .single-employee__status p {
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

  .single-employee__status span {
    width: 5px;
    height: 5px;
    border-radius: 50%;
  }

  .single-employee__role,
  .single-employee__email,
  .single-employee__skills {
    text-transform: capitalize;
    letter-spacing: 0.5px;
    color: var(--gray-header);
    font-size: 0.85rem;
  }
  .single-employee__skills {
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
  .single-employee__skills:hover .skill-count {
    display: block;
  }
  .single-employee__actions {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .single-employee__delete,
  .single-employee__edit {
    background-color: transparent;
    font-size: 1rem;
  }
  .single-employee__edit {
    color: var(--primary-clr);
  }
  .single-employee__edit:hover {
    color: #006600;
  }
  .single-employee__delete {
    color: var(--danger);
  }
  .single-employee__delete:hover {
    color: var(--red-clr);
  }
`;

export default Container;
