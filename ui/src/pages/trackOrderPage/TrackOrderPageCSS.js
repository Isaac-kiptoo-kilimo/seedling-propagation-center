import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  background-color: #F4F4F4;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;

  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 32px;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 100%;
    max-width: 1200px;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }

  .left-side,
  .right-side {
    background-color: #F4F4F4;
    flex: 1;
    padding: 24px;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  label {
    display: block;
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 16px;
  }

  input {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-bottom: 16px;
    font-size: 1rem;
  }

  button {
    width: 100%;
    background-color: #374151;
    color: white;
    padding: 12px;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #1f2937; /* gray-800 */
  }

  .note {
    font-size: 0.875rem;
    color: #6b7280;
    margin-top: 8px;
  }

  .tracker-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  }

  .tracker-header h2 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .tracker-header span {
    font-size: 1.2rem;
    font-weight: 600;
  }

  .estimated-date {
    font-size: 0.9rem;
    color: #4b5563;
    margin-bottom: 16px;
  }

  .timeline {
    position: relative;
    margin-left: 16px;
    border-left: 2px solid #d1d5db;
  }

  .timeline-step {
    margin-left: 24px;
    margin-bottom: 48px;
    position: relative;
  }

  .timeline-step-icon {
    position: absolute;
    left: -40px;
    top: 0;
    background-color: var(--primary-clr);
    padding: 8px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .timeline-step h3 {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .timeline-step p {
    font-size: 0.95rem;
    color: #6b7280;
    margin-top: 4px;
  }

  .timeline-step small {
    font-size: 0.75rem;
    color: #9ca3af;
  }
`;

export default Container;
