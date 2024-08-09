import PropTypes from "prop-types";
import "./index.css";

const Paginate = ({ postsPerPage, totalPosts, paginate, previousPage, nextPage, currentPage }) => {
  const pageNumbers = [];
  const totalPageCount = Math.ceil(totalPosts / postsPerPage);
  const maxPageNumbersToShow = 3;

  // Calculate the start and end page numbers
  let startPage = Math.max(1, currentPage - Math.floor(maxPageNumbersToShow / 2));
  let endPage = Math.min(totalPageCount, startPage + maxPageNumbersToShow - 1);

  // Adjust startPage if endPage is at the upper limit
  if (endPage === totalPageCount) {
    startPage = Math.max(1, endPage - maxPageNumbersToShow + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  const handlePaginate = (pageNumber) => {
    paginate(pageNumber);
    window.scrollTo(0, 0);
  };

  const handlePrevPage = () => {
    previousPage();
    window.scrollTo(0, 0);
  };

  const handleNextPage = () => {
    nextPage();
    window.scrollTo(0, 0);
  };

  return (
    <ul className="page-numbers">
      <li onClick={handlePrevPage} className="page-number">
        Prev
      </li>
      {pageNumbers.map((number) => (
        <li
          key={number}
          onClick={() => handlePaginate(number)}
          className={`page-number ${currentPage === number ? "active" : ""}`}
        >
          {number}
        </li>
      ))}
      <li onClick={handleNextPage} className="page-number">
        Next
      </li>
    </ul>
  );
};

Paginate.propTypes = {
  postsPerPage: PropTypes.number.isRequired,
  totalPosts: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Paginate;
