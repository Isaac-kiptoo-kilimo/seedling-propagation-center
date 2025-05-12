import { LoadingSpinner, PageButtons, SingleStaff, StaffDetails } from "../";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setPage,
  setPrevPage,
  setNextPage,
  useGetAllStaffQuery,
} from "../../features/auth/userApi";
import Container from "./StaffGridCSS";
const StaffGrid = ({ title }) => {
  const [searchQuery, setSearchQuery] = useState({});
  // const [page, setPage] = useState(1);
  const { page } = useSelector((store) => store.userPages);
  const dispatch = useDispatch();

  const { data, isLoading, isError } = useGetAllStaffQuery({
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
      <div className="employees">
        {isLoading ? (
          <LoadingSpinner />
        ) : isError ? (
          <div className="employees-error">
            <p className="employees-error__text">something went wrong...</p>
          </div>
        ) : (
          <>
            <div className="employees__grid--sm">
              <div className="employees--sm">
                {data &&
                  data.staff.map((oneStaff) => {
                    return (
                      <SingleStaff
                        key={oneStaff._id}
                        {...oneStaff}
                        isAdmin={isAdmin}
                      />
                    );
                  })}
              </div>
              {data && data.totalPages > 1 && (
                <PageButtons
                  userCount={data.totalStaff}
                  setPageNumber={setPageNumber}
                  setSearchQuery={setPage}
                  setPrevPage={setPrevPage}
                  setNextPage={setNextPage}
                  activePage={page}
                  totalPages={data.totalPages}
                />
              )}
         
            </div>
            <div className="employees__grid--lg">
              <div className="employees__heading">
                <h5 className="header__title">name</h5>
                <h5 className="header__title">role</h5>
                <h5 className="header__title">email</h5>
                <h5 className="header__title">Phone Number</h5>
              </div>
              <div className="employees__details">
                {data &&
                  data.staff.map((oneStaff) => {
                    return (
                      <StaffDetails
                        key={oneStaff._id}
                        {...oneStaff}
                        isAdmin={isAdmin}
                      />
                    );
                  })}
              </div>

              {data && data.totalPages > 1 && (
                <PageButtons
                  userCount={data.totalStaff}
                  setPageNumber={setPageNumber}
                  setSearchQuery={setPage}
                  setPrevPage={setPrevPage}
                  setNextPage={setNextPage}
                  activePage={page}
                  totalPages={data.totalPages}
                />
              )}
            </div>
          </>
        )}
      </div>
    </Container>
  );
};

export default StaffGrid;
