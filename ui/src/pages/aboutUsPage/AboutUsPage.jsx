import Container from "./AboutUsPageCSS";
import AboutImgn from "../../assets/aboutus.jpg";

const AboutUsPage = () => {
  return (
    <Container>
      {/* <Navbar /> */}
      <div className="about-us-container">
        <div className="about-header">
          <h2>About Seedling Propagation Centre</h2>
        </div>
        <div className="about-us-main-container">
          <div className="about-img">
            <img src={AboutImgn} alt={AboutImgn} />
          </div>
          <div className="main-content-about">
            <div className="about-us-header">
              <h4>Get To Know Us</h4>
            </div>
            <div className="about-us-content">
              <p>
                At Seedling Propagation Centre, we are committed to delivering
                top-quality seedlings that guarantee healthy growth and high
                yields. Our seedlings are carefully propagated to ensure
                superior quality, resilience, and adaptability to various
                environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutUsPage;
