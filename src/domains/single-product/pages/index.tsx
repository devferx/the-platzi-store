import { useState } from "react";
import { flushSync } from "react-dom";
import { Navigate, useParams } from "react-router-dom";

import { useProduct } from "@shared/hooks/useProduct";

export const SingleProductPage = () => {
  const { productId } = useParams();
  const { product, isLoading } = useProduct(productId ?? "1");
  const [currImg, setCurrImg] = useState(0);

  if (!productId) {
    return <Navigate to="/" />;
  }

  const handleImgClick = (idx: number) => {
    document.startViewTransition(() => {
      flushSync(() => {
        setCurrImg(idx);
      });
    });
  };

  return (
    <section className="mx-auto grid max-w-screen-2xl grid-cols-1 px-5">
      {isLoading && <div>Loading...</div>}

      {product && (
        <div className="grid grid-cols-1 gap-10  lg:grid-cols-[1fr,2fr]">
          <div>
            <img
              className="single-prod-img"
              src={product.images[currImg]}
              alt={`${product.title} - photo ${currImg + 1}`}
            />

            <div className="mt-6 flex w-full justify-center gap-3">
              {product.images.map((img, idx) => (
                <button key={img} onClick={() => handleImgClick(idx)}>
                  <img
                    className="w-20"
                    src={img}
                    alt={`${product.title} - photo ${idx + 1}`}
                  />
                </button>
              ))}
            </div>
          </div>

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
          </div>
        </div>
      )}
    </section>
  );
};
