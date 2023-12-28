interface PaginationProps {
  page: number;
  prevPage: () => void;
  nextPage: () => void;
}
export const Pagination = ({ page, prevPage, nextPage }: PaginationProps) => {
  return (
    <div className="mt-4 grid place-items-center">
      <div className="flex">
        <button
          className="flex h-10 items-center justify-center rounded-lg border border-gray-300 bg-white px-4 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 disabled:opacity-90 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={prevPage}
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          className="ms-3 flex h-10 items-center justify-center rounded-lg border border-gray-300 bg-white px-4 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};
