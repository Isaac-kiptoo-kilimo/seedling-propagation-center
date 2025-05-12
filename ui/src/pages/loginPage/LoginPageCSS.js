import styled from 'styled-components'

const Container=styled.main`

.login--main--container {
  width: 100%;
  height: 100vh;
}

.container--login {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #FAFAFA;
}
.wrap--login {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-between;
  flex-direction: row-reverse;
}

.login--form-content{
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  
}
.login--form {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: .1rem;
  margin: 2rem auto;
  background-color: white;
  padding: 2rem;

}
.login--icon{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.login--icon img{
  width: 200px;
}
.login--form--title {
  width: 100%;
  font-size: 1rem;
  font-weight: 400;
  color: var(--primary-clr);
  line-height: 1.2;
  text-align: center;
  margin-bottom: 1.2rem;
}

.login--form--title > span {
  color: #3F3D56;
}
.forgot__pass__btn{
  background-color: white;
  color: var(--primary-clr);
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
.login--image {
  width: 45%;
  object-fit: cover;
}
.login--image img {
  width: 100%;
  height: 100%;
}

.login-form-forgot {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 0.3em;
  color: var(--primary-clr);
  cursor: pointer;
  text-decoration: underline;
}
.auth--btn {
  width: 100%;
  border-radius: 5px;
  padding: 0.6em;
  outline: none;
  font-size: 20px;
}

.disabled:hover{
  opacity: 0.5;
  cursor: not-allowed;
}
.login-copyright{
 color: #4A4A4A;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 font-size: 14px;
 font-weight: 400;
}
.terms{
  color: var(--green);
  text-decoration: underline;
}
.new--account-home{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: .5rem 1rem;
}
.back--home{
  display: flex;
  flex-direction: row;
  align-items: center;
  color:var(--primary-clr);
  gap: .5rem;
  background-color: white;
  padding: 0%.5rem;
}
.back--home:hover{
  font-size: .9rem;
}

.new--account{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 0.3em;
}
.login--span{
  color: var(--primary-clr);
  text-decoration: underline;
}



@media (max-width: 992px) {
  .login--form-content{
    width: 50%;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .login--form {
  width: 85%;

}
  .login--image {
    width: 50%;
  }
}

@media (max-width: 768px) {
  .login--form-content{
    width: 100%;
    padding-left: .5rem;
    padding-right: .5rem;
  }
   .login--form {
  width: 100%;

}
 
  .login--image {
    display: none;
  }
}
`

export default Container;