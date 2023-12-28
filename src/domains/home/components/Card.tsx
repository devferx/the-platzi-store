import { Product } from "@shared/models/product";

interface CardProps {
  product: Product;
}
export const Card = ({ product }: CardProps) => {
  return (
    <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
      <a href="#">
        <div className="w-full p-2">
          <img
            className="w-full rounded-lg"
            src={product.images[0]}
            alt="product image"
          />
        </div>
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {product.title}
          </h5>
        </a>
        <div className="mb-5 mt-2.5">
          <span className=" text-gray-700 dark:text-gray-200">
            {product.description.length > 50
              ? product.description.substring(0, 50) + "..."
              : product.description}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${product.price}
          </span>
          <a
            href="#"
            className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};
