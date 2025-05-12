import styled from 'styled-components'

const Container=styled.main`
.register--main--container {
  width: 100%;
  height: 100vh;
}

.container--register {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.wrap--register {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-between;
  flex-direction: row-reverse;
}

.register--form-content{
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  
}
.register--form {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: .1rem;
  margin: .5rem auto;
  background-color: white;
  padding: 1rem;

}
.register--icon{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.register--icon img{
  width: 200px;
}
.register--form--title {
  width: 100%;
  font-size: 1rem;
  font-weight: 400;
  color: var(--primary-clr);
  line-height: 1.2;
  text-align: center;
  margin-bottom: 1.2rem;
}

.register--form--title > span {
  color: #3F3D56;
}
.group-wrap-input{
  margin-bottom: 1rem;
}
.input-wrap {
    display: flex;
    align-items: center;
    position: relative;
    border: 1.5px solid #e6e6e6;
    border-radius: var(--border-radius);
    transition: border 0.3s ease-in-out;
    width: 100%;
  }

  .input-wrap.focused {
    border: 1.5px solid var(--green);
  }

  .input-label {
    font-size: 16px;
    color: #999;
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.3s ease-in-out;
    background: white;
    padding: 0 5px;
    pointer-events: none;
  }

  .input-wrap.focused .input-label {
    top: -3px;
    left: 12px;
    font-size: 15px;
    color: var(--green);
    background: white;
    padding: 0 5px;

  }

  .input-field {
    flex: 1;
    font-size: 16px;
    color: #555;
    background: transparent;
    width: 100%;
    height: 100%;
    padding: 14px;
    border: none;
    outline: none;
  }

.errors{
  color: #DF0404;
  font-size: 14px;
  padding-left: 1.2rem;
}

.login-link{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 0.3em;
}
.login--span{
  color: var(--primary-clr);
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
.back--home{
  height: 12px;
  padding: .5rem;
}
.back--home--icon{
  display: flex;
  flex-direction: row;
  align-items: center;
  color:var(--primary-clr);
  gap: .5rem;
  background-color: white;
  padding: 0%.5rem;
}
.back--home--icon:hover{
  font-size: .9rem;
}

@media (max-width: 992px) {
  .register--form-content{
    width: 50%;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .register--form {
  width: 85%;

}
}

@media (max-width: 768px) {
  .register--form-content{
    width: 100%;
    padding-left: .5rem;
    padding-right: .5rem;
  }
  .register--form {
  width: 100%;

}
}
`

export default Container;