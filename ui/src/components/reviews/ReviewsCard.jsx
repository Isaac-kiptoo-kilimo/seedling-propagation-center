import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Container from "./ReviewsCSS";

const ReviewsCard = ({ testimonial, title, image, reviewerName, ratings, isActive }) => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, i) => <FaStar key={`full-${i}`} className="star-icon" />)}
        {hasHalfStar && <FaStarHalfAlt className="star-icon" />}
        {[...Array(emptyStars)].map((_, i) => <FaRegStar key={`empty-${i}`} className="star-icon" />)}
      </>
    );
  };

  return (
    <Container>
      <div className={`review-card ${isActive ? "active" : ""}`}>
        <div className="testimonial-content-header">
          <h4>{title}</h4>
        </div>
        <div className="testimonials-content">
          <p>{testimonial}</p>
        </div>
        <div className="testimonials-content-footer">
          <div className="testimonial-img">
            <img src={image} alt={reviewerName} />
          </div>
          <div className="reviewer-name">
            <h6>{reviewerName}</h6>
          </div>
          <div className="review-ratings">{renderStars(ratings)}</div>
        </div>
      </div>
    </Container>
  );
};

export default ReviewsCard;
