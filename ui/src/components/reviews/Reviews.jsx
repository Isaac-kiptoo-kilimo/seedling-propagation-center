import { useState, useEffect } from "react";
import testimonials from "../../utils/shop/Testimonials";
import ReviewsCard from "./ReviewsCard";
import Container from "./ReviewsCSS";

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex >= testimonials.length - 2 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <div className="carousel-container">
        <div className="review-header">
          <h6>Testimonials</h6>
        </div>
        <div className="testimonial-content-title">
          <h2>What Our Client Say</h2>
        </div>
        <div className="carousel-wrapper">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <ReviewsCard
                key={index}
                testimonial={testimonial.testimonial}
                title={testimonial.title}
                image={testimonial.image}
                reviewerName={testimonial.name}
                ratings={testimonial.rating}
                isActive={index === currentIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Reviews;
