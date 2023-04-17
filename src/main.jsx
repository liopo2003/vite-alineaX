
import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter,RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout";
import ErrorPage from "./Page/error-page";
import Pagina2 from "./Page/Pagina2";
import Pagina1 from "./Page/Pagina1";
import Pagina3 from './Page/Pagina3';

const router = createHashRouter([
  {
    path: "/",
    element: (
      <Layout/>
    ),
    errorElement: <ErrorPage />,
    children: [
      { path: "/Pagina1", element: <Pagina1/> },
      { path: "/vite-alineaX/Pagina2", element: <Pagina2 /> },
      { path: "/vite-alineaX/Pagina3", element: <Pagina3 /> }
    ]

  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);