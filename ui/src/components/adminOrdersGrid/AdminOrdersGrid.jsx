import { LoadingSpinner, OrderDetails, SingleOrder } from "../";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage, setPrevPage, setNextPage } from "../../features/orders/orderApi";
import Container from "./AdminOrdersGridCSS";
import { useGetAllOrdersQuery } from "../../features/orders/orderApi";
import TablePages from "../tablePages/TablePages";
const AdminOrdersGrid = ({ title }) => {
  const [searchQuery, setSearchQuery] = useState({});
  const { page } = useSelector((store) => store.orderPages);
  const dispatch = useDispatch();

  const { data, isLoading, isError } = useGetAllOrdersQuery({
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
  const isStaff = role === "staff";
  const isAdmin = role === "admin"
  const isManage = role === "admin" || role === "staff";
  return (
    <Container>
      <div className="orders">
        {isLoading ? (
          <LoadingSpinner />
        ) : isError ? (
          <div className="orders-error">
            <p className="orders-error__text">something went wrong...</p>
          </div>
        ) : (
          <>
            <div className="orders__grid--sm">
              <div className="orders--sm">
                  {data && data.orders.length === 0 ? (
                    <div className="products-zero">
                      <p>No orders found.</p>
                    </div>
                  ) : (
                    data &&
                    data.orders.map((order) => {
                      return (
                        <SingleOrder
                          key={order._id}
                          {...order}
                          isManage={isManage}
                          isAdmin={isAdmin}
                          isStaff={isStaff}
                        />
                      );
                    })
                  )}
              </div>
              {data && data.totalPages > 1 && (
              <TablePages
                tableEntries={data.totalOrders}
                activePage={page}
                setPrevPage={setPrevPage}
                setNextPage={setNextPage}
                setPageNumber={setPageNumber}
              />
            )}
            </div>
            <div className="orders__grid--lg">
              <div className="orders__heading">
                <h5 className="header__title">#</h5>
                <h5 className="header__title">Order Date</h5>
                <h5 className="header__title">Order Number</h5>
                <h5 className="header__title">Customer Name</h5>
                <h5 className="header__title">Product Name</h5>
                <h5 className="header__title">Payment Status</h5>
                <h5 className="header__title">Order Status</h5>
                <h5 className="header__title">Subtotal</h5>
                <h5 className="header__title">Fulfillment Status</h5>
                {
                  !isAdmin && (
                    <h5 className="header__title">Actions</h5>
                  )
                }
              </div>
              <div className="orders__details">
                {data && data.orders.length === 0 ? (
                  <div className="products-zero">
                    <p>No orders found.</p>
                  </div>
                ) : (
                  data &&
                  data.orders.map((order, index) => (
                    <OrderDetails
                      key={order._id}
                      {...order}
                      isManage={isManage}
                      isAdmin={isAdmin}
                      isStaff={isStaff}
                      index={index}
                    />
                  ))
                )}
              </div>
              {data && data.totalPages > 1 && (
              <TablePages
                tableEntries={data.totalOrders}
                activePage={page}
                setPrevPage={setPrevPage}
                setNextPage={setNextPage}
                setPageNumber={setPageNumber}
              />
            )}
            </div>
          </>
        )}
      </div>
    </Container>
  );
};

export default AdminOrdersGrid;
