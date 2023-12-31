import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import { TanStackProvider } from "@shared/plugins/TanStackProvider";
import { router } from "./router";
import { store } from "./store";

export const App = () => {
  return (
    <Provider store={store}>
      <TanStackProvider>
        <RouterProvider router={router} />;
      </TanStackProvider>
    </Provider>
  );
};
