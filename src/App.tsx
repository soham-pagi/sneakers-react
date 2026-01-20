import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";

import routes from "./Routes";
import { CartProvider } from "./context/CartProvider";

const router = createBrowserRouter(routes, {
  basename: "/sneakers-react",
});

export default function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}
