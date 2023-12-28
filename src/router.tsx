import { Home } from "@home/pages";
import { MainLayout } from "@shared/components/MainLayout";
import { Navigate, createBrowserRouter } from "react-router-dom";
import { SingleProductPage } from "./domains/single-product/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:productId",
        element: <SingleProductPage />,
      },
      {
        path: "/product",
        element: <Navigate to="/" />,
      },
      {
        path: "/about",
        element: <div>About</div>,
      },
    ],
  },
]);
