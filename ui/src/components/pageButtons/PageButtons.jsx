import Container from "./PageButtonsCSS";
import { getPageNumbers } from "../../utils/helperFunctions";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useDispatch } from "react-redux";

const PageButtons = ({
  userCount,
  setPageNumber,
  setPrevPage,
  setNextPage,
  activePage,
  totalPages,
}) => {
  const pageSize = 10;
  const pageNumbers = getPageNumbers(userCount, pageSize, activePage);
  const dispatch = useDispatch();

  return (
    <Container>
      <button
        disabled={activePage === 1}
        style={{
          color: activePage === 1 ? "var(--gray-border)" : "var(--gray-text)",
          cursor: activePage === 1 ? "not-allowed" : "pointer",
        }}
        onClick={() => dispatch(setPrevPage())}
        className="prev__btn"
      >
        <FaArrowLeft />
        <span>previous</span>
      </button>

      <div className="numbered__buttons">
        {pageNumbers.map((pageNumber, index) => {
          if (pageNumber === "...") {
            return (
              <span key={`ellipsis-${index}`} className="ellipsis">
                ...
              </span>
            );
          }

          return (
            <button
              key={pageNumber}
              disabled={activePage === pageNumber}
              onClick={() => setPageNumber(pageNumber)}
              className={
                pageNumber === activePage
                  ? "page__btn page__btn--active"
                  : "page__btn"
              }
            >
              {pageNumber}
            </button>
          );
        })}
      </div>

      <button
        disabled={activePage === totalPages}
        style={{
          color:
            activePage === totalPages
              ? "var(--gray-border)"
              : "var(--gray-text)",
          cursor: activePage === totalPages ? "not-allowed" : "pointer",
        }}
        onClick={() => dispatch(setNextPage(totalPages))}
        className="next__btn"
      >
        <span>next</span>
        <FaArrowRight />
      </button>
    </Container>
  );
};

export default PageButtons;
