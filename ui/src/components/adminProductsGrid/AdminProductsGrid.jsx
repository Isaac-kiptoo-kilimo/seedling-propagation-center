import {
  AddProductModal,
  LoadingSpinner,
  ProductDetails,
  SingleProduct,
} from "../";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage, setPrevPage, setNextPage } from "../../features/products/productApi";
import Container from "./AdminProductsGridCSS";
import { useGetAllProductsQuery } from "../../features/products/productApi";
import { createPortal } from "react-dom";
import { toggleAddProductModal } from "../../features/configurations/configurationSlice";
import TablePages from "../tablePages/TablePages";
const AdminProductsGrid = ({ title }) => {
  const [searchQuery, setSearchQuery] = useState({});
  const dispatch = useDispatch();
  // const [page, setPage] = useState(1);
  const { page } = useSelector((store) => store.productPages);
  const { isAddProductModalOpen } = useSelector(
    (store) => store.configurations
  );

  const limit=12;
  const { data, isLoading, isError } = useGetAllProductsQuery({
    ...searchQuery,
    page,
  });
  const setPageNumber = (page) => {
    dispatch(setPage(page));
  };
  
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  if (!user) {
    return;
  }
  const { role, _id } = user;
  const isAdmin = role === "admin";
  return (
    <Container>
       <div className="create__product__btn">
        <button type="button" className="create__product--btn btn--primary"
         onClick={() => dispatch(toggleAddProductModal())}
        >
          Add Product
        </button>
      </div>
      <div className="products">
     
        {isLoading ? (
          <LoadingSpinner />
        ) : isError ? (
          <div className="products-error">
            <p className="products-error__text">something went wrong...</p>
          </div>
        ) : (
          <>
            <div className="products__grid--sm">
            <div className="products--sm">
                {data && data.products.length === 0 ? (
                  <div className="products-zero">
                    <p>No products found.</p>
                  </div>
                ) : (
                  data &&
                  data.products.map((product) => {
                    return (
                      <SingleProduct
                        key={product._id}
                        product={product}
                        isAdmin={isAdmin}
                      />
                    );
                  })
                )}
              </div>
              {data && data.totalPages > 1 && (
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
            <div className="products__grid--lg">
              <div className="products__heading">
                <h5 className="header__title">Product Image</h5>
                <h5 className="header__title">Product Name</h5>
                <h5 className="header__title">Category</h5>
                <h5 className="header__title">Description</h5>
                <h5 className="header__title">Price</h5>
                <h5 className="header__title">Discounted Price</h5>
                <h5 className="header__title">Quantity</h5>
                <h5 className="header__title">Actions</h5>
              </div>
              <div className="products__details">
                {data && data.products.length === 0 ? (
                  <div className="products-zero">
                    <p>No products found.</p>
                  </div>
                ) : (
                  data &&
                  data.products.map((product) => {
                    return (
                      <ProductDetails
                        key={product._id}
                        product={product}
                        isAdmin={isAdmin}
                      />
                    );
                  })
                )}
              </div>
              {data && data.totalPages > 1 && (
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
          </>
        )}
      </div>
      {isAddProductModalOpen &&
        createPortal(<AddProductModal />, document.body)}
    </Container>
  );
};

export default AdminProductsGrid;
