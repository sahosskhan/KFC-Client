import { createBrowserRouter } from "react-router-dom";
import Roots from "../Layout/Roots";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Blog from "../Pages/Blog";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ViewFetureFood from "../Components/ViewFetureFood";
import AllFood from "../Pages/AllFood";
import SingleFoodPage from "../Components/SingleFoodPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
        fetch(
          "http://localhost:5000/allfood/limited"
        ),
      },
      {
        path: "/allfooditems",
        element: <AllFood></AllFood>,
        loader: () =>
        fetch(
          "http://localhost:5000/allfood"
        ),
      },
      {
        path: "/limitedFoodDetails/:id",
        element: <ViewFetureFood></ViewFetureFood>,
        loader: ({params}) =>
        fetch(
          `http://localhost:5000/foodsingle/${params?.id}`
        ),
      },
      {
        path: "/singlefooditmes/:id",
        element: <SingleFoodPage></SingleFoodPage>,
        loader: ({params}) =>
        fetch(
          `http://localhost:5000/allsinglefood/${params?.id}`
        ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
     
    ],
  },
]);
export default router;
