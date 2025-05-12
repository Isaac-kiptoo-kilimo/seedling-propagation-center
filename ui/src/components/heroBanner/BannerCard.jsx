import Container from "./HeroBannerCSS";

const BannerCard = ({mainCardContent,subCardContent,cardIcon}) => {
  return (
    <Container>
       <div className="plants--collection">
                <div className="plants--icon">
                    {cardIcon}
                </div>
                <div className="plants--content">
                <p className="banner--main-content">{mainCardContent}</p>
                <span className="banner--sub-content">{subCardContent}</span>
                </div>
            </div>
    </Container>
  )
}

export default BannerCard;
