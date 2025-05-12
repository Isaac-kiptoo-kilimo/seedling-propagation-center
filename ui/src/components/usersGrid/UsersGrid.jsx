import Container from "./UsersGridCSS";
import { useGetAllUsersQuery } from "../../features/auth/userApi";
import { LoadingSpinner, PageButtons } from "../";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage, setPrevPage, setNextPage } from "../../features/auth/userApi";
import SingleUser from "../singleUser/SingleUser";
import UserDetails from "../userDetails/UserDetails";

const UsersGrid = ({ title }) => {
  const [searchQuery, setSearchQuery] = useState({});
  // const [page, setPage] = useState(1);
  const { page } = useSelector((store) => store.userPages);
  const dispatch = useDispatch();

  const { data, isLoading, isError } = useGetAllUsersQuery({
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
  const isAdmin= role==="admin"
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
                  data.users
                    .map((user) => {
                      return (
                        <SingleUser
                          key={user._id}
                          {...user}
                          isAdmin={isAdmin}
                        />
                      );
                    })}
              </div>
              {data && data.totalPages > 1 && (
                <PageButtons
                  userCount={data.totalUsers}
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
              <div
                className="employees__heading"
              >
                <h5 className="header__title">name</h5>
                <h5 className="header__title">role</h5>
                <h5 className="header__title">Email Address</h5>
                <h5 className="header__title">phone number</h5>
              </div>
              <div className="employees__details">
                {data &&
                  data.users
                    .map((user) => {
                      return (
                        <UserDetails
                          key={user._id}
                          {...user}
                          isAdmin={isAdmin}
                        />
                      );
                    })}
              </div>
              {data && data.totalPages > 1 && (
                <PageButtons
                  userCount={data.totalUsers}
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

export default UsersGrid;
