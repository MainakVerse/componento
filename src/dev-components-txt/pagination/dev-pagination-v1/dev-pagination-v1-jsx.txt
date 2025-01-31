"use client";
import { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const DevPaginationV1 = ({
  totalPages,
  initialPage = 1,
  onPageChange = () => {},
  maxVisiblePages = 7,
}) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pages = [];
    let startPage = 1;
    let endPage = totalPages;

    if (totalPages > maxVisiblePages) {
      const middlePoint = Math.floor(maxVisiblePages / 2);

      if (currentPage <= middlePoint) {
        endPage = maxVisiblePages - 2;
      } else if (currentPage >= totalPages - middlePoint) {
        startPage = totalPages - maxVisiblePages + 3;
      } else {
        startPage = currentPage - middlePoint + 2;
        endPage = currentPage + middlePoint - 2;
      }
    }

    // Add first page
    if (startPage > 1) {
      pages.push(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          className={`p-2 rounded-full ${
            currentPage === 1
              ? "bg-ACCENT !text-white"
              : "text-ACCENT hover:bg-ACCENT/40"
          }`}
        >
          1
        </button>
      );
      if (startPage > 2) {
        pages.push(
          <span key="start-ellipsis" className="px-2 py-1  text-ACCENT">
            ...
          </span>
        );
      }
    }

    // Add middle pages
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`p-2 rounded-full ${
            currentPage === i
              ? "bg-ACCENT !text-white"
              : "text-ACCENT hover:bg-ACCENT/40"
          }`}
        >
          {i}
        </button>
      );
    }

    // Add last page
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(
          <span key="end-ellipsis" className="px-2 py-1  text-ACCENT">
            ...
          </span>
        );
      }
      pages.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className={`p-2 rounded-full ${
            currentPage === totalPages
              ? "bg-ACCENT !text-white"
              : "text-ACCENT hover:bg-ACCENT/40"
          }`}
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="flex *:!select-none items-center gap-1 bg-LIGHT dark:bg-DARK rounded-full p-1 border border-ACCENT/10">
      <button
        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="p-2 text-2xl rounded-full text-ACCENT hover:bg-ACCENT/50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <BiChevronLeft />
      </button>
      <div
        className="md:grid flex flex-wrap gap-2 *:aspect-square"
        style={{
          gridTemplateColumns: `repeat(${maxVisiblePages}, minmax(0, 1fr))`,
        }}
      >
        {renderPageNumbers()}
      </div>
      <button
        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="p-2 text-2xl rounded-full text-ACCENT hover:bg-ACCENT/50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <BiChevronRight />
      </button>
    </div>
  );
};

export default DevPaginationV1;
