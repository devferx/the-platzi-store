import { RouterProvider } from "react-router-dom";

import { TanStackProvider } from "@shared/plugins/TanStackProvider";
import { router } from "./router";

export const App = () => {
  return (
    <TanStackProvider>
      <RouterProvider router={router} />;
    </TanStackProvider>
  );
};
