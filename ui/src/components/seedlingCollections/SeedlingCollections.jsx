import CollectionCard from "./CollectionCard"
import Container from "./SeedlingCollectionsCSS"
import PlantGroup1 from '../../assets/Tomatoes Seedlings.jpeg'
import PlantGroup2 from '../../assets/plants-group.jpg'
import PlantGroup3 from '../../assets/plants.jpg'


const SeedlingCollections = () => {
  return (
    <Container>
     <div className="collections-container">
     <CollectionCard collectionimgSrc={PlantGroup1} collectionImgAlt={"card image"} collectionTitle={"Vegetables"} collectionDesc={"Luctus nec ullamcorper mattis, pulvinar dapibus leo."}  collectionButton={"SEE COLLECTIONS"}/>
      <CollectionCard collectionimgSrc={PlantGroup2} collectionImgAlt={"card image"} collectionTitle={"Herbs and spices"} collectionDesc={"Luctus nec ullamcorper mattis, pulvinar dapibus leo."} collectionButton={"SEE COLLECTIONS"}/>
      <CollectionCard collectionimgSrc={PlantGroup3} collectionImgAlt={"card image"} collectionTitle={"Flowers"} collectionDesc={"Luctus nec ullamcorper mattis, pulvinar dapibus leo."} collectionButton={"VISIT THE STORE"}/>
      <CollectionCard collectionimgSrc={PlantGroup3} collectionImgAlt={"card image"} collectionTitle={"Fruits"} collectionDesc={"Luctus nec ullamcorper mattis, pulvinar dapibus leo."} collectionButton={"VISIT THE STORE"}/>
      {/* <CollectionCard collectionimgSrc={PlantGroup3} collectionImgAlt={"card image"} collectionTitle={"Forestry"} collectionDesc={"Luctus nec ullamcorper mattis, pulvinar dapibus leo."} collectionButton={"VISIT THE STORE"}/> */}
     </div>
    </Container>
  )
}

export default SeedlingCollections
