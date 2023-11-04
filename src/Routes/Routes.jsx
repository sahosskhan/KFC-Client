import { createBrowserRouter } from "react-router-dom";
import Roots from "../Layout/Roots";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Blog from "../Pages/Blog";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
     
    ],
  },
]);
export default router;
