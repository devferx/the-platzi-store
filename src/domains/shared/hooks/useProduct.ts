import { getProduct } from "@shared/services/products";
import { useQuery } from "@tanstack/react-query";

export const useProduct = (id: string) => {
  const { data: product, ...productQuery } = useQuery({
    queryKey: ["product", { id }],
    queryFn: () => getProduct(id),
  });

  return {
    product,
    ...productQuery,
  };
};
