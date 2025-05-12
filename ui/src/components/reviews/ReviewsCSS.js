import styled from "styled-components";

const Container = styled.main`
  .carousel-container {
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
    background: #f9f9f9;
    gap: 2rem;
  }
.review-header{
    font-size: 28px;
    color: var(--primary-clr);
}
  .carousel-wrapper {
    width: 80%;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    gap: 3rem;
  }


  .carousel-track {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    transition: transform 1s ease-in-out;
    width: 100%;

  }
 .review-card {
    min-width: 380px;
    max-width: 450px;
    margin: 0 1.5%;
    background: white;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    flex-shrink: 0;
    opacity: 0.7;
    transition: transform 1s ease-in-out, opacity 1s ease-in-out;
  } 
  .testimonial-content-header h4{
    font-size: 18px;
  }
  .review-card.active {
    transform: scale(1.1);
    opacity: 1;
  }
  .testimonial-content-title{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: center;
  }

  .testimonial-content-title h4 {
    font-size: 24px;
    color: #333;
    margin-bottom: 10px;
  }

  .testimonials-content p {
    font-size: 16px;
    color: #555;
    margin-bottom: 15px;
    font-weight: 300;
  }

  .testimonials-content-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }

  .testimonial-img img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
  }

  .reviewer-name h6 {
    font-size: 18px;
    color: #777;
  }

  .review-ratings {
    display: flex;
    align-items: center;
    gap: 3px;
  }

  .star-icon {
    color: #ffcc00;
    font-size: 22px;
  }
`;

export default Container;
