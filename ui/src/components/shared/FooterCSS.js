import styled from "styled-components";

export const Container = styled.main`
  .footer {
    display: flex;
    justify-content: center;
    font-family: "Futura Std";
    width: 100%;
    padding: 0 1rem;
    border-top: 1px solid #e5e5e5;
    background-color: #fafafa;
  }

  .content {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 3%;
    width: 100%;
    max-width: 1400px;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }

  .card {
    display: flex;
    flex-direction: column;
    color: #6f6f74;
    padding: 10px;

    h4 {
      color: #2B2F38;
      font-size: 17px;
      margin-bottom: 1rem;
      font-weight: 600;
    }
  }

  .card--one img {
    width: 80px;
    height: auto;
    margin-bottom: 10px;
  }

  .card span {
    display: block;
    margin-bottom: 12px;
    cursor: pointer;
    color: #6f6f74;
    transition: color 0.3s ease;
    font-size: 15px;
    line-height: 1.4;
  }

  .card span:hover {
    color: var(--primary-clr);
  }
  
  .card p {
    font-size: 15px;
    line-height: 1.4;
    margin-bottom: 8px;
  }

  .copyright-powered {
    margin-top: 3%;
    padding: 1.5rem 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-top: 1px solid #EAEAEA;
  }

  .copyright, .powered {
    color: #6f6f74;
    font-size: 14px;
  }

  .socials {
    display: flex;
    gap: 0.8rem;
    margin-top: 1rem;
  }
  
  .social-ico {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #5D6167;
    width: 40px;
    height: 40px;
    border-radius: 3px;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .social-ico:hover {
    background-color: var(--primary-clr);
  }

  .footer--header h4 {
    font-size: 17px;
  }

  @media (max-width: 1024px) {
    .cards {
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }
  }

  @media (max-width: 767px) {
    .cards {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    
    .copyright-powered {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
    
    .copyright {
      margin-bottom: 0.5rem;
    }
  }

  @media (max-width: 480px) {
    .socials {
      gap: 0.6rem;
    }
    
    .social-ico {
      width: 38px;
      height: 38px;
    }
  }
`;

export default Container;