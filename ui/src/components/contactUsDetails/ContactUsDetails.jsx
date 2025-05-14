import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import bgImage from '../../assets/contactUs1.jpg';

import Container from "./ContactUsDetailsCSS";
const ContactUsDetails = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container>
   <div className="contact-main-container">
   <div className="hero-section" style={{ backgroundImage: `url(${bgImage})` }}>
        <h1>Contact Us</h1>
      </div>

      <div className="contact-container">
        <div className="contact-details">
          <h4 className="contact-sub-header">Contact Details</h4>
          <div className="contact-top-items">
            <div className="contact-item">
              <FaMapMarkerAlt className="icon" />
              <div className="contact-item-details">
                <h4>Our Location</h4>
                <span>123 Greenhouse Ave, Kiambu County, Kenya</span>
              </div>
            </div>
            <div className="contact-item">
              <FaPhoneAlt className="icon" />
              <div className="contact-item-details">
                <h4>Call Us</h4>
                <span>(+254) 723 003 491</span>
              </div>
            </div>
          </div>
          <div className="contact-item">
            <MdEmail className="icon" />
            <div className="contact-item-details">
              <h4>Our Email</h4>
              <span>Hello@seedlingcentre.com</span>
              {/* <span>support@seedlingstore.com</span> */}
            </div>
          </div>
        </div>
        <div className="contact-form-container">
          <h4>Send Us a Message</h4>
          <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
          <button type="submit" className="btn-danger">
            Send Message
          </button>
        </form>
        </div>
      </div>
   </div>
    </Container>
  );
};

export default ContactUsDetails;
