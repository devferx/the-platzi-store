import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export const usePagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialPage = Number(searchParams.get("page")) || 1;
  const [page, setPage] = useState(initialPage ?? 1);

  const updatePageUrlParams = (page: number) => {
    setSearchParams(
      new URLSearchParams({
        ...searchParams,
        page: String(page),
      }),
    );
  };

  const nextPage = () => {
    updatePageUrlParams(page + 1);
    setPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    if (page === 1) return;

    updatePageUrlParams(page - 1);
    setPage((prevPage) => prevPage - 1);
  };

  return {
    page,
    nextPage,
    prevPage,
  };
};
