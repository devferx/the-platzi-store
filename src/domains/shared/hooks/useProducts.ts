import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@shared/services/products";
import { useEffect, useState } from "react";

export const useProducts = (page: number) => {
  const [lastPage, setLastPage] = useState<undefined | number>(undefined);
  const { data: products, ...productsQuery } = useQuery({
    queryKey: ["products", { page }],
    queryFn: () => getProducts(page),
  });

  useEffect(() => {
    if (!products) return;

    if (products.length < 10) {
      setLastPage(page);
      return;
    }
  }, [products, page]);

  return {
    products,
    lastPage,
    ...productsQuery,
  };
};
