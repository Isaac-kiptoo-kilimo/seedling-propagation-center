import { useState, useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useGetAllProductsQuery } from "../../features/products/productApi";
import {
  setPage,
  setPrevPage,
  setNextPage,
} from "../../features/products/productApi";
import FeaturedProductsCard from "../../components/featuredProducts/FeaturedProductsCard";
import BannerCard from "../../components/heroBanner/BannerCard";
import TablePages from "../../components/tablePages/TablePages";
import { LoadingSpinner } from "../../components";
import { GiPlantSeed } from "react-icons/gi";
import { MdLocalShipping } from "react-icons/md";
import { PiArrowsClockwiseBold } from "react-icons/pi";
import Container from "./ProductsPageCSS";
import { useGetAllCategoriesQuery } from "../../features/categories/categoryApi";

const ProductsPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { page } = useSelector((store) => store.productPages);
  const { authenticatedUser: user } = useSelector((store) => store.userProfile);
  const isAuthenticated = !!user;

  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search")?.toLowerCase() || "";

  const limit = 12;
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 100000]);

  const setPageNumber = (page) => {
    dispatch(setPage(page));
  };

  const {
    isLoading: categoryLoading,
    isError: categoryError,
    data: categoryData,
  } = useGetAllCategoriesQuery();

  const { data, isLoading, isError } = useGetAllProductsQuery(
    useMemo(() => {
      const query = {
        page,
        limit,
        search: searchQuery || undefined,
        sortBy: "price",
        sortOrder: "asc",
        category: selectedCategory !== "All" ? selectedCategory : undefined,
      };

      return Object.fromEntries(
        Object.entries(query).filter(([_, v]) => v !== undefined)
      );
    }, [searchQuery, selectedCategory, page])
  );

  const allProducts = data?.products || [];

  const minPrice = useMemo(
    () => Math.min(...allProducts.map((p) => p.price), 0),
    [allProducts]
  );

  const maxPrice = useMemo(
    () => Math.max(...allProducts.map((p) => p.price), 0),
    [allProducts]
  );

  useEffect(() => {
    if (allProducts.length) {
      setPriceRange([minPrice, maxPrice]);
    }
  }, [minPrice, maxPrice]);

  const categorizedProducts = useMemo(() => {
    const result = {
      All: { name: "All", products: [...allProducts] },
    };

    allProducts.forEach((product) => {
      const id = product.category?._id;
      const name = product.category?.name;
      if (id) {
        if (!result[id]) result[id] = { name, products: [] };
        result[id].products.push(product);
      }
    });

    return result;
  }, [allProducts]);

  const categories = useMemo(() => {
    if (!categoryData?.categories) return [];
    return categoryData.categories;
  }, [categoryData]);

  const handlePriceChange = (e) => {
    const value = Number(e.target.value);
    setPriceRange([minPrice, value]);
  };

  const filteredProducts = useMemo(() => {
    const source =
      selectedCategory === "All"
        ? allProducts
        : categorizedProducts[selectedCategory]?.products || [];

    return source.filter((p) => {
      const matchesSearch =
        !searchQuery ||
        p.productName.toLowerCase().includes(searchQuery) ||
        p.productDescription.toLowerCase().includes(searchQuery);
      const inRange = p.price >= priceRange[0] && p.price <= priceRange[1];
      return matchesSearch && inRange;
    });
  }, [selectedCategory, categorizedProducts, allProducts, searchQuery, priceRange]);

  return (
    <Container>
      <div className="shop--products-main">
        <div
          className="shop--products--title"
          style={{ marginTop: isAuthenticated ? "3rem" : "0" }}
        >
          {!isAuthenticated && (
            <div className="product__banner">
              <BannerCard cardIcon={<GiPlantSeed />} mainCardContent="400+ Varieties" subCardContent="Any seedlings for your space" />
              <BannerCard cardIcon={<MdLocalShipping />} mainCardContent="Quick Delivery" subCardContent="Deliver seedlings products to you" />
              <BannerCard cardIcon={<PiArrowsClockwiseBold />} mainCardContent="100% Money Back" subCardContent="If the item didn't suit you" />
            </div>
          )}
        </div>

        <div className="products--items">
          {!isAuthenticated && (
            <div className="products--filter-items">
              <div className="categories-card">
                <h4>Shop by Category</h4>
                <div className="category-btns">
                  <button
                    className={`categories-items ${selectedCategory === "All" ? "active" : ""}`}
                    onClick={() => setSelectedCategory("All")}
                  >
                    All
                  </button>
                  <p>({categorizedProducts["All"]?.products.length || 0})</p>
                </div>
                {categories.map((category) => (
                  <div className="category-btns" key={category._id}>
                    <button
                      className={`categories-items ${selectedCategory === category._id ? "active" : ""}`}
                      onClick={() => setSelectedCategory(category._id)}
                    >
                      {category.name}
                    </button>
                    <p>({categorizedProducts[category._id]?.products.length || 0})</p>
                  </div>
                ))}
              </div>

              <div className="categories-card">
                <h4>Shop by Price</h4>
                <input
                  type="range"
                  min={minPrice}
                  max={maxPrice}
                  value={priceRange[1]}
                  onChange={handlePriceChange}
                  className="price-slider"
                />
                <div className="price-range-values">
                  <span>KES {minPrice}</span>
                  <span>KES {priceRange[1]}</span>
                </div>
                <button className="reset-btn" onClick={() => setPriceRange([minPrice, maxPrice])}>
                  RESET
                </button>
              </div>
            </div>
          )}

          <div className="products--display">
            {isAuthenticated && (
              <div className="inline-filters">
                <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                  <option value="All">All ({categorizedProducts["All"]?.products.length || 0})</option>
                  {categories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name} ({categorizedProducts[category._id]?.products.length || 0})
                    </option>
                  ))}
                </select>

                <div className="inline__categories-card">
                  <input
                    type="range"
                    min={minPrice}
                    max={maxPrice}
                    value={priceRange[1]}
                    onChange={handlePriceChange}
                    className="price-slider"
                  />
                  <div className="price-range-values">
                    <span>KES {minPrice}</span>
                    <span>KES {priceRange[1]}</span>
                  </div>
                  <button onClick={() => setPriceRange([minPrice, maxPrice])} className="reset-btn">
                    RESET
                  </button>
                </div>
              </div>
            )}

            <div className="products__contents">
              <div className="products--heading">
                <h2>
                  {selectedCategory === "All"
                    ? "All Products"
                    : categorizedProducts[selectedCategory]?.name}
                </h2>
              </div>

              <div className="products-cards">
                {isLoading ? (
                  <LoadingSpinner />
                ) : isError ? (
                  <div className="products-error">
                    <p className="products-error__text">Something went wrong...</p>
                  </div>
                ) : filteredProducts.length === 0 ? (
                  <div className="products-zero"><p>No products found.</p></div>
                ) : (
                  filteredProducts.map((product) => (
                    <div className="products-card" key={product._id}>
                      <FeaturedProductsCard product={product} />
                    </div>
                  ))
                )}
              </div>

              {data?.totalPages > 1 && (
                <TablePages
                  tableEntries={data.totalProducts}
                  activePage={page}
                  setPrevPage={setPrevPage}
                  setNextPage={setNextPage}
                  setPageNumber={setPageNumber}
                  limit={limit}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductsPage;
