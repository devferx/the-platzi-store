import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@shared/services/products";

export const useProducts = (page: number) => {
  const { data: products, ...productsQuery } = useQuery({
    queryKey: ["products", { page }],
    queryFn: () => getProducts(page),
  });

  return {
    products,
    ...productsQuery,
  };
};
