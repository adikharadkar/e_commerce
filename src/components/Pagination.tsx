import type { PaginationProps } from "../utils/types";

const Pagination = ({
  currentPage,
  onPageChange,
  numOfPages,
}: PaginationProps) => {
  return (
    <div className="pagination">
      <button
        onClick={() => onPageChange((prev) => prev - 1)}
        disabled={currentPage === 0}
        style={{
          cursor: currentPage === 0 ? "not-allowed" : "pointer",
        }}
      >
        Previous
      </button>
      {[...Array(numOfPages)].map((_, index) => (
        <button
          onClick={() => onPageChange(index)}
          style={{
            backgroundColor: currentPage === index ? "black" : "white",
            color: currentPage === index ? "white" : "black",
          }}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => onPageChange((prev) => prev + 1)}
        disabled={currentPage === numOfPages - 1}
        style={{
          cursor: currentPage === numOfPages - 1 ? "not-allowed" : "pointer",
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
