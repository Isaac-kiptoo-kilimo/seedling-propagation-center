import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Container from "./TablePagesCSS";
import { getPageNumbers } from "../../utils";
import { useDispatch } from "react-redux";

const TablePages = ({
  setPrevPage,
  setPageNumber,
  setNextPage,
  tableEntries,
  activePage,
  limit,
}) => {
  const pageSize = limit || 10;
  const totalPages = Math.ceil(tableEntries / pageSize);
  const pageNumbers = getPageNumbers(tableEntries, pageSize);
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
        {pageNumbers.map((pageNumber) => {
          return (
            <button
              key={pageNumber}
              onClick={() => dispatch(setPageNumber(pageNumber))}
              disabled={activePage === pageNumber}
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
        onClick={() => dispatch(setNextPage(pageNumbers.length))}
        className="next__btn"
      >
        <span>next</span>
        <FaArrowRight />
      </button>
    </Container>
  );
};

export default TablePages;
