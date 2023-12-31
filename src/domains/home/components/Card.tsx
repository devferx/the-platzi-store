import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Product } from "@shared/models/product";
import { addProduct } from "@store/cart/cartSlice";

interface CardProps {
  product: Product;
}
export const Card = ({ product }: CardProps) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addProduct(product));
  };

  return (
    <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
      <Link to={`/product/${product.id}`}>
        <div className="w-full p-2">
          <img
            className="w-full rounded-lg"
            src={product.images[0]}
            alt="product image"
          />
        </div>
      </Link>
      <div className="px-5 pb-5">
        <Link
          to={`/product/${product.id}`}
          className="mt-1 block text-lg font-medium leading-tight text-black hover:underline dark:text-white"
        >
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {product.title}
          </h5>
        </Link>
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
          <button
            className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
