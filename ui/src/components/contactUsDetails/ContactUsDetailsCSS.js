import styled from "styled-components";

const Container = styled.main`
  .contact-main-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-x: hidden;
  }

  .hero-section {
    width: 100%;
    height: 60vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 3rem;
    font-weight: 700;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);
  }

  .contact-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 40px 5%;
    gap: 2rem;
    background: #f4f4f4;
    flex-wrap: wrap;
  }

  .contact-details {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    flex: 1;
    min-width: 300px;
    padding: 20px;
    border-radius: 10px;
  }

  .contact-sub-header {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: #333;
  }

  .contact-top-items {
    display: flex;
    flex-direction: row;
    gap: 3rem;
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .contact-item .icon {
    font-size: 1.6rem;
    color: var(--danger, #d32f2f);
    margin-top: 4px;
  }
  .contact-item-details{
    display: flex;
    flex-direction: column;
    gap: .5rem;
  }

  .contact-item-details h4 {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    color: #222;
  }

  .contact-item-details span {
    font-size: 0.95rem;
    color: #555;
  }

  .contact-form-container {
    flex: 1;
    min-width: 300px;
    /* background: white; */
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }

  .contact-form-container h4 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: #333;
  }

  .contact-form input,
  .contact-form textarea {
    width: 100%;
    padding: 14px;
    margin-bottom: 16px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 1rem;
    background-color: #fff;
    resize: vertical;
  }

  .contact-form textarea {
    min-height: 120px;
  }

  .btn-danger {
    background-color: var(--danger, #d32f2f);
    color: white;
    border: none;
    padding: 14px 36px;
    font-size: 1rem;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  .btn-danger:hover {
    background-color: #b71c1c;
  }

  @media (max-width: 768px) {
    .contact-container {
      flex-direction: column;
      padding: 20px;
    }

    .contact-details,
    .contact-form-container {
      width: 100%;
      margin-bottom: 20px;
    }

    .contact-item {
      justify-content: center;
      text-align: left;
    }

    .contact-item-details {
      text-align: left;
    }
  }
`;

export default Container;
