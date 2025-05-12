import BannerCard from "./BannerCard";
import Container from "./HeroBannerCSS";
import { MdLocalShipping } from "react-icons/md";
import { PiArrowsClockwiseBold } from "react-icons/pi";
import { GiPlantSeed } from "react-icons/gi";


const HeroBanner = () => {
  return (
    <Container>
        <div className="hero--banner">
            <BannerCard cardIcon={<GiPlantSeed/>} mainCardContent={"400+ Varieties"} subCardContent={"Any seedlings for your space"}/>
            <BannerCard cardIcon={<MdLocalShipping/>} mainCardContent={"Quick Delivery"} subCardContent={"Deliver seedlings products to you"} />
            <BannerCard cardIcon={<PiArrowsClockwiseBold/>} mainCardContent={"100% Money Back"} subCardContent={"If the item didn't suit you"} />
        </div>
    </Container>
  )
}

export default HeroBanner;
