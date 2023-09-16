import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import Result from "../components/Result";
import Revolution from "../pages/Home/Revolution";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/home",
            element: <Home />
          },
          {
            path: "/result",
            element: <Result />,
          },
          {
            path: "/revolution",
            element: <Revolution />,
          }
        ]
      }
]}
])