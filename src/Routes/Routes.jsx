import { createBrowserRouter } from "react-router-dom";
import Roots from "../Layout/Roots";
import Error from "../Pages/Error";
import Home from "../Pages/Home";


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
    //   {
    //     path: "/blog",
    //     element: <Home></Home>,
    //   },
     
    ],
  },
]);
export default router;
