import { useNavigate } from "react-router-dom";
import { MdCall } from "react-icons/md";
import { FaSquareFacebook, FaWhatsapp } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import FooterLinks from "./FooterLinks";
import Container from "./FooterCSS";
import logo from "../../assets/footerlogo.png";

const Footer = () => {
  const navigate = useNavigate();

  const scrollToTopAndNavigate = (path) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  return (
    <Container>
      <div className="footer">
        <div className="content">
          <div className="cards">
            <div className="card card--one">
              <img src={logo} alt="no-logo" />
              <div className="footer--header">
                <h4>Seedling Propagation</h4>
              </div>
              <div className="socials">
                <div className="social-ico">
                  <MdCall />
                </div>
                <div className="social-ico">
                  <a href="https://wa.me/message/MMJTDCPFLD44F1"><FaWhatsapp /></a>
                  
                </div>
                <div className="social-ico">
                  <a href="https://www.facebook.com/SeedlingPropagationCentre">
                  <FaSquareFacebook />
                  </a>
                </div>
                <div className="social-ico">
                  <BsInstagram />
                </div>
              </div>
            </div>

            <FooterLinks scrollToTopAndNavigate={scrollToTopAndNavigate} />

            <div className="card card--three">
              <div className="footer--header">
                <h4>Important Links</h4>
              </div>
              <span onClick={() => scrollToTopAndNavigate("/")}>
                Privacy Policy
              </span>
              <span onClick={() => scrollToTopAndNavigate("/")}>
                Shipping Details
              </span>
              <span onClick={() => scrollToTopAndNavigate("/shop/products")}>
                Terms & Conditions
              </span>
              <span onClick={() => scrollToTopAndNavigate("/")}>
                Media Kit
              </span>
            </div>
            <div className="card card--four">
              <div className="footer--header">
                <h4>
                  Get In Touch With Us For The Best Quality Plants & Seedlings
                </h4>
              </div>
             <div className="card__four__content">
             <p>Kiambu, Kenya</p>
              <p>Tel: +254 723 003 491</p>
              <p>WhatsApp: +254 723 003 491</p>
              <p>seedlingpropagation@gmail.com</p>
             </div>
            </div>
          </div>

          <div className="copyright-powered">
            <div className="copyright">
              <p>Copyright © 2025 Seedling Propagation Center.</p>
            </div>
            <div className="powered">
              <p>Powered by Seedling Propagation Center </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
