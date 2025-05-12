import { useSelector } from "react-redux";
import { BottomBanner, Carousel, FeaturedProducts, HeroBanner, Map, Reviews, SeedlingCollections } from "../../components";
import Container from "./HomeCSS.JS";

// const Home = () => {
//   const { authenticatedUser: user } = useSelector((store) => store.userProfile);
//   const isAuthenticated = !!user;

//   return (
//     <Container>
//       {
//         isAuthenticated ? null :
//         <>
//         <div className="home-page">
//         <Carousel/>
//         <HeroBanner/>
//         <SeedlingCollections/>
//         <FeaturedProducts/>
//         <Reviews/>
//         <BottomBanner/>
//         <Map/>
//       </div>
//         </>
//       }
//     </Container>
//   );
// };
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { authenticatedUser: user } = useSelector((store) => store.userProfile);
  const isAuthenticated = !!user;
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  return (
    <Container>
      <div className="home-page">
        <Carousel/>
        <HeroBanner/>
        <SeedlingCollections/>
        <FeaturedProducts/>
        <Reviews/>
        <BottomBanner/>
        <Map/>
      </div>
    </Container>
  );
};


export default Home;
