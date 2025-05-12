import { useState, useEffect } from "react";
import HeroBG1 from "../../assets/flowers_video.mp4";
import HeroBG2 from "../../assets/flowers3.mp4";
import HeroBG from "../../assets/vegetables_green_seedlings.png";
import Container from "./CarouselCSS";
import { useNavigate } from "react-router-dom";

const photoArray = [
  { type: "video", link: HeroBG1 },
  { type: "video", link: HeroBG2 },
  { type: "image", link: HeroBG },
];

const Carousel = () => {
  const navigate = useNavigate();
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const nextSlide = () => {
    setCurrentPhoto((prev) => (prev + 1) % photoArray.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 7000);
    return () => clearInterval(intervalId);
  }, [currentPhoto]);

  return (
    <Container>
      <div className="carousel-container">
        {photoArray.map((item, index) =>
          item.type === "video" ? (
            <video
              key={index}
              autoPlay
              loop
              muted
              className={`carousel-media ${
                index === currentPhoto ? "active" : ""
              }`}
            >
              <source src={item.link} type="video/mp4" />
            </video>
          ) : (
            <div
              key={index}
              className={`carousel-media ${
                index === currentPhoto ? "active" : ""
              }`}
              style={{ backgroundImage: `url(${item.link})` }}
            ></div>
          )
        )}
        <div className="hero-content">
          <div className="hero--content-card">
            <h2>Premium Quality Seedlings</h2>
            <p>Beautiful seedlings to bring life to your space</p>
          </div>
          <div className="btn-shop">
            <button
              className="btn-danger hero-btn"
              onClick={() => navigate("/shop/products")}
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Carousel;
