import { Navigate, useParams } from "react-router-dom";

import { useProduct } from "@shared/hooks/useProduct";
import { ImageGallery } from "../components/ImageGallery";

export const SingleProductPage = () => {
  const { productId } = useParams();
  const { product, isLoading } = useProduct(productId ?? "1");

  if (!productId) {
    return <Navigate to="/" />;
  }

  return (
    <section className="mx-auto grid max-w-screen-2xl grid-cols-1 px-5">
      {isLoading && <div>Loading...</div>}

      {product && (
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr,2fr]">
          <ImageGallery title={product.title} images={product.images} />

          <div className="flex flex-col gap-2 p-3 lg:gap-4">
            <h3 className="text-3xl font-bold dark:text-white">
              {product.title}
            </h3>
            <p className="dark:text-white">
              <span className="text-sm font-bold">Category</span>:{" "}
              {product.category.name}
            </p>
            <p className="dark:text-white">{product.description}</p>
            <p className="text-3xl font-extrabold dark:text-white">
              ${product.price}
            </p>
            <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 lg:w-max">
              Add to cart
            </button>
            I
          </div>
        </div>
      )}
    </section>
  );
};
