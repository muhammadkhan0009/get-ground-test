import { createBrowserRouter, redirect } from "react-router-dom";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    loader: () => {
      return redirect("/home/0");
    },
  },
  {
    path: "/home/:page?",
    element: <Home />,
  },
]);
