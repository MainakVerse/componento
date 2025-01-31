import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const DevPaginationV2 = ({
  currentPage = 1,
  onPageChange,
  itemsPerPage,
  totalItems
}) => {
  const currentCount = Math.min(currentPage * itemsPerPage, totalItems);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="flex *:!select-none items-center bg-LIGHT dark:bg-DARK rounded-full p-1 border border-ACCENT/10 gap-2">
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="p-2 text-2xl rounded-full text-ACCENT hover:bg-ACCENT/50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <BiChevronLeft />
      </button>
      <p className="flex items-center gap-2 font-medium">
        <span className="text-ACCENT">{currentCount}</span>
        <span className="opacity-80">of</span>
        <span className="text-ACCENT">{totalItems}</span>
      </p>
      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="p-2 text-2xl rounded-full text-ACCENT hover:bg-ACCENT/50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <BiChevronRight />
      </button>
    </div>
  );
};

export default DevPaginationV2;