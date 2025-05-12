
import styled from 'styled-components'

const Container=styled.main`

input {
  outline: none;
  border: none;
}

.reset--main--container {
  width: 100%;
  height: 100vh;
}

.container--reset {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.wrap--reset {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-between;
  flex-direction: row-reverse;
}

.reset--form-content {
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
}

.reset--form {
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.1rem;
  margin: 3rem auto;
}
.reset--icon {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.reset--icon img {
  width: 200px;
}
.reset--form--title {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: .8rem;
  font-size: 17px;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: #3F3D56;
  
}

.group-wrap-input{
  margin-bottom: 1rem;
}

.reset--form--title > span {
  color: #3F3D56;
  font-size: .7rem;
}

.disabled{
  cursor: not-allowed;
}

.reset--image {
  width: 45%;
  object-fit: cover;
}
.reset--image img {
  width: 100%;
  height: 100%;
}

.errors{
  color: #DF0404;
  font-size: 14px;
  padding-left: 1.2rem;
}

.reset-form-forgot {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: .5rem;
  letter-spacing: var(--letter-spacing);
  font-weight: 700;
  font-size: 13px;
  padding: 0.3em;
}
.reset-form-forgot span {
    color: var(--primary-clr);
    cursor: pointer;
    text-decoration: underline;
  }
.auth--btn {
  width: 100%;
  border-radius: 5px;
  padding: 0.6em;
  outline: none;
  font-size: 17px;
}

.reset-copyright {
  color: #4a4a4a;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 12px;
  font-weight: 400;
}

@media (max-width: 992px) {
  .reset--form-content {
    width: 50%;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .reset--image {
    width: 50%;
  }
}

@media (max-width: 768px) {
  .reset--form-content {
    width: 100%;
  }

  .reset--image {
    display: none;
  }
}
`

export default Container;
