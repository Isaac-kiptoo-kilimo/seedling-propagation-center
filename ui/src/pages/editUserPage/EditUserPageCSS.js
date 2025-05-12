import styled from "styled-components";

const Container=styled.main`
.edit__user__container {
  width: 100%;
}

.edit__user__content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 90%;
  margin: 2rem auto;
  padding: 1rem;
}
.edit__user__heading {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.edit__user__heading p {
  font-weight: 700;
  font-size: 30px;
}

.edit__user__heading span {
  color: #3f3d56;
  font-weight: 500;
  font-size: 25px;
}

.edit__user__form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.edit__user_name {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.disabled{
  cursor: not-allowed;
}
.edit__user__group__input {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.full__name__input,
.edit__user_email__input,
.edit__user_password__input,
.edit__user_no__input {
  width: 100%;
  padding: 1rem;
  background-color: #f5f5f5;
  color: #686868;
  font-size: 18px;
  font-family: Outfit;
  font-weight: 400;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 4px;
}

.full__name__input:focus,
.edit__user_email__input:focus,
.edit__user_password__input:focus,
.edit__user_no__input:focus {
  outline: 1.5px solid #c4c4c4;
}

.edit__user__group__input select::-ms-expand {
  display: none;
}

.full__name__label,
.edit__user_email__label,
.edit__user_password__label,
.edit__user__no__label {
  color: #3f3d56;
  font-weight: 500;
  letter-spacing: var(--letter-spacing);
  font-size: 14px;
  padding: 0.3rem;
}
.errors{
  color: #DF0404;
  font-size: 14px;
  padding-left: 1.2rem;
}

.edit__user__btn {
  width: 100%;
  display: flex;
  align-items: center;
}

.edit__user--btn {
  width: 100%;
  padding: 0.8rem 0;
  font-size: 16px;
  font-weight: 500;
  margin-top: 1rem;
}

.group__input--select {
  position: relative;
}

.custom-select-wrapper {
  position: relative;
  display: inline-block;
}



.custom-select option:hover {
  background-color: green;
  color: white;
}

.chevron {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  pointer-events: none;
  font-size: 2rem;
  color: #3f3d56;

}

.edit__user__group__input select option {
  padding: 10px;
}

@media (min-width: 992px) {
  .edit__user__content {
    width: 80%;
  }

  .edit__user__content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 90%;
    margin: 2rem auto;
    padding: 1rem;
  }
  .edit__user__heading {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .edit__user__heading p {
    font-weight: 700;
    font-size: 30px;
  }

  .edit__user__heading span {
    color: #3f3d56;
    font-weight: 500;
    font-size: 25px;
  }

  .edit__user__form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .edit__user_name {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .edit__user__group__input {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .full__name__input,
  .edit__user_email__input,
  .edit__user_password__input,
  .edit__user_no__input {
    width: 100%;
    padding: 1rem;
    background-color: #f5f5f5;
    color: #686868;
    font-size: 18px;
    font-weight: 400;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 4px;
  }

  .full__name__input:focus,
  .edit__user_email__input:focus,
  .edit__user_password__input:focus,
  .edit__user_no__input:focus {
    outline: 1.5px solid #c4c4c4;
  }

  .edit__user__group__input select::-ms-expand {
    display: none;
  }
  
  .full__name__label,
  .edit__user_email__label,
  .edit__user_password__label,
  .edit__user__no__label {
    color: #3f3d56;
    font-weight: 500;
    letter-spacing: var(--letter-spacing);
    font-size: 14px;
    padding: 0.3rem;
  }

  .edit__user__btn {
    width: 100%;
    display: flex;
    align-items: center;
  }

  .edit__user--btn {
    width: 100%;
    padding: 0.8rem 0;
    font-size: 16px;
    font-weight: 500;
    margin-top: 1rem;
  }
}
  @media (min-width: 768px) {
    .edit__user__content {
      width: 80%;
    }

    .edit__user__heading {
      align-items: start;
    }

    .edit__user_name {
      flex-direction: row;
      gap: 2rem;
    }
    .edit__user__btn {
      justify-content: flex-end;
    }

    .edit__user--btn {
      width: 35%;
    }
  }

`

export default Container;
