import { Container } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Products from "./pages/products";
import NotFound from "./pages/not-found";
import Product from "./pages/product";
import Cart from "./pages/cart";
import Order from "./pages/order";

import Layout from "./components/layout";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/order",
    element: <Order />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <Container maxWidth="lg" className="App">
      <RouterProvider router={router}></RouterProvider>
    </Container>
  );
}

export default App;
