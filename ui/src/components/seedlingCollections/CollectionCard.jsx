import { useNavigate } from "react-router-dom"
import Container from "./SeedlingCollectionsCSS"

const CollectionCard = ({collectionimgSrc,collectionImgAlt,collectionDesc,collectionTitle,collectionButton}) => {
  const navigate=useNavigate();
    return (
    <Container>
        <div className="collection--card">
            <div className="collection--card-image">
                <img src={collectionimgSrc} alt={collectionImgAlt} />
            </div>
            <div className="collection--card-content">
                <div className="collection--card-title">
                    <h5>{collectionTitle}</h5>
                </div>
                <div className="collection--card-description">
                    <p>{collectionDesc}</p>
                 </div>
                 <div className="collection--card-btn">
                    <button onClick={()=>navigate('/shop/products')}>{collectionButton}</button>
                 </div>
            </div>
        </div>
    </Container>
  )
}

export default CollectionCard
