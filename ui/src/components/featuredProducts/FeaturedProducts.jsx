import FeaturedProductsCard from "./FeaturedProductsCard";
import Container from "./FeaturedProductsCSS";
import { useGetAllProductsQuery } from "../../features/products/productApi";
const FeaturedProducts = () => {
  const { data, isLoading, isError } = useGetAllProductsQuery();
  return (
    <Container>
      <div className="featured--products-main">
        <div className="featured--title">
          <h3>Featured Seedlings</h3>
          <p>Explore our top picks—healthy, thriving seedlings ready to grow in your space.</p>
        </div>
        <div className="featured-cards">
          {data && data.products.length === 0 ? (
            <div className="products-zero">
              <p>No products found.</p>
            </div>
          ) : (
            data &&
            data.products.map((product) => {
              return (
                <FeaturedProductsCard key={product._id} product={product} />
              );
            })
          )}
        </div>
      </div>
    </Container>
  );
};

export default FeaturedProducts;
