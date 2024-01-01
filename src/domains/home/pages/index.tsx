import { Card } from "@home/components/Card";
import { Pagination } from "@home/components/Pagination";
import { SkeletonCard } from "@home/components/SkeletonCard";
import { usePagination } from "@home/hooks/usePagination";
import { useProducts } from "@shared/hooks/useProducts";

export const Home = () => {
  const { page, nextPage, prevPage } = usePagination();
  const { products, lastPage, isLoading } = useProducts(page);

  return (
    <section className="container mx-auto">
      <div className="mt-5 grid justify-center gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {isLoading &&
          new Array(10)
            .fill(1)
            .map((_, idx) => <SkeletonCard key={`sk-${idx}`} />)}
        {products &&
          products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
      </div>

      <Pagination
        page={page}
        lastPage={lastPage}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </section>
  );
};
