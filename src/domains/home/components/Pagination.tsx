interface PaginationProps {
  page: number;
  lastPage: number | undefined;
  prevPage: () => void;
  nextPage: () => void;
}
export const Pagination = ({
  page,
  lastPage,
  prevPage,
  nextPage,
}: PaginationProps) => {
  return (
    <div className="mt-4 grid place-items-center">
      <div className="flex">
        <button
          className="flex h-10 items-center justify-center rounded-lg border border-gray-300 bg-white px-4 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={prevPage}
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          className="ms-3 flex h-10 items-center justify-center rounded-lg border border-gray-300 bg-white px-4 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={nextPage}
          disabled={lastPage === page}
        >
          Next
        </button>
      </div>
    </div>
  );
};
