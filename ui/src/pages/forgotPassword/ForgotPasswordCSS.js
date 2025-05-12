 
  
  import styled from 'styled-components'

  const Container=styled.main`
  input {
    outline: none;
    border: none;
  }
  
  .forgot--pass--main--container {
    width: 100%;
    height: 100vh;
  }
  
  .container--forgot--pass {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  
  .wrap--forgot--pass{
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: space-between;
    flex-direction: row-reverse;
  }
  
  .forgot--pass--form-content {
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
  }

  
  .forgot--pass--form {
    width: 75%;
    /* height: 100%; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: .5rem;
    margin: 3rem auto;
    /* background-color: yellow; */
  }
  .forgot--pass--icon {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .forgot--pass--icon img {
    width: 220px;
  }
  .forgot--pass--form--title {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: .5rem;
    font-size: 17px;
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    color: #3F3D56;

  }

  .forgot--pass--form--title > span {
    color: #3F3D56;
    font-size: .7rem;
  }
  .group-wrap-input{
  margin-bottom: 1rem;
}
.email--wrap--input {
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
    border: 1.5px solid #e6e6e6;
    border-radius: var(--border-radius);
    transition: border 0.3s ease-in-out;

  }

  .email--wrap--input.focused {
    border: 1.5px solid var(--green);
  }
  .email--label--input {
    font-size: 16px;
    color: #999999;
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.3s ease-in-out;
    pointer-events: none;
    background: white;
    padding: 0 5px;
  }

  .email--label--input.focused {
    top: -3px;
    left: 12px;
    font-size: 15px;
    background: white;
    color: var(--green);
    padding: 0 5px;

  }

  .email-input {
    flex: 1;
    font-size: 16px;
    color: #555555;
    border: none;
    outline: none;
    background: transparent;
    width: 100%;
    height: 100%;
    padding: 14px 14px;
  }

.errors{
  color: #DF0404;
  font-size: 14px;
  padding-left: 1.2rem;
}
  
  
  input.input {
    height: 100%;
    padding-top: 10px;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
  }
  
  .focus-input {
    position: absolute;
    display: block;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    top: -1px;
    left: -1px;
    pointer-events: none;
    border: 1px solid #6675df;
    border-radius: 10px;
    visibility: hidden;
    opacity: 0;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
    -webkit-transform: scaleX(1.1) scaleY(1.3);
    -moz-transform: scaleX(1.1) scaleY(1.3);
    -ms-transform: scaleX(1.1) scaleY(1.3);
    -o-transform: scaleX(1.1) scaleY(1.3);
    transform: scaleX(1.1) scaleY(1.3);
  }
  
  .input:focus + .focus--input {
    visibility: visible;
    opacity: 1;
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
  
  .eff--focus--selection {
    visibility: visible;
    opacity: 1;
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
  
  .input:focus {
    height: 48px;
    padding-top: 0;
  }

  
  .input:focus ~ .label--input,
  .input ~ .label--input {
    top: 8px;
    font-size: 16px;
  }

  .disabled{
    cursor: not-allowed;
  }
  
  .forgot--pass--image {
    width: 45%;
  
    object-fit: cover;
  }
  .forgot--pass--image img {
    width: 100%;
    height: 100%;
  }
  
  .login--form--link {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    color: #3F3D56;
    gap: .5rem;
    font-weight: 700;
    font-size: 13px;
    padding: 0.3em;
    letter-spacing: var(--letter-spacing);

  }
  .login--form--link span {
      color: var(--primary-clr);
      cursor: pointer;
      text-decoration: underline;
    }

    .errors{
    color: #DF0404;
    font-size: 14px;
    padding-left: 1.2rem;
  }
    .auth--btn {
  width: 100%;
  border-radius: 5px;
  padding: 0.8em;
  outline: none;
  font-size: 17px;
}

  .forgot--pass-copyright {
    color: #4a4a4a;
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 12px;
    font-weight: 400;
  }
  
  @media (max-width: 992px) {
    .forgot--pass--form-content {
      width: 50%;
      padding-left: 2rem;
      padding-right: 2rem;
    }
  
    .forgot--pass--image {
      width: 50%;
    }
  }
  
  @media (max-width: 768px) {
    .forgot--pass--form-content {
      width: 100%;
    }
  
    .forgot--pass--image {
      display: none;
    }
  }

  
  `
  

export default Container;