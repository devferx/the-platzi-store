import { Card } from "@home/components/Card";
import { Pagination } from "@home/components/Pagination";
import { usePagination } from "@home/hooks/usePagination";
import { useProducts } from "@shared/hooks/useProducts";

export const Home = () => {
  const { page, nextPage, prevPage } = usePagination();
  const { products, isLoading } = useProducts(page);

  return (
    <section className="container mx-auto">
      {isLoading && <p>Loading...</p>}

      {products && (
        <>
          <div className="mt-5 grid gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {products.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>

          <Pagination page={page} nextPage={nextPage} prevPage={prevPage} />
        </>
      )}
    </section>
  );
};
