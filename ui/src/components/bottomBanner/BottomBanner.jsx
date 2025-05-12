import { useNavigate } from "react-router-dom";
import Container from "./BottomBannerCSS";

const BottomBanner = () => {
  const navigate=useNavigate();
  return (
    <Container>
        <div className="bottom--banner">
            <h4>Interested? Shop This Plant Collection!</h4>
            <p>Give your farm or garden the best start with our premium seedlings! Whether you are a commercial farmer or a home gardener, our carefully nurtured seedlings are ready to thrive in your soil. From fruits and vegetables to trees and flowers, we offer a wide variety of high-quality seedlings to ensure strong growth and maximum yields. Shop now and take the first step towards a greener, more productive future.</p>
            <div className="shop-now-button">
                <button className="btn-shop btn-danger" onClick={()=>navigate('/shop/products')}>GO TO SHOP</button>
            </div>
        </div>
    </Container>
  )
}

export default BottomBanner;
