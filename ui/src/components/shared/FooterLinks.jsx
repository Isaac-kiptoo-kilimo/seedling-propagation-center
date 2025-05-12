const FooterLinks = ({ scrollToTopAndNavigate }) => {
    return (
      <div className="card card--two">
        <div className="footer--header">
          <h4>Quick Links</h4>
        </div>
        <span onClick={() => scrollToTopAndNavigate("/")}>Introduction</span>
        <span onClick={() => scrollToTopAndNavigate("/aboutUs")}>know more About Us</span>
        <span onClick={() => scrollToTopAndNavigate("/shop/products")}>Visit Store</span>
        <span onClick={() => scrollToTopAndNavigate("/contactUs")}>Let’s Connect</span>
      </div>
    );
  };
  
  export default FooterLinks;
  


