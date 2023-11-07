import { createBrowserRouter } from "react-router-dom";
import Roots from "../Layout/Roots";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Blog from "../Pages/Blog";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

import AllFood from "../Pages/AllFood";
import SingleFoodPage from "../Components/SingleFoodPage";
import AddFood from "../Pages/AddFood";
import MyaddedFood from './../Pages/MyaddedFood';
import PrivateRoute from './PrivateRoute';

import OrderingPage from './../Pages/OrderingPage';
import MyCart from "../Pages/MyCart";


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
      },
      {
        path: "/myaddedfood",
        element:<PrivateRoute> <MyaddedFood></MyaddedFood></PrivateRoute>,
        loader: () =>
        fetch(
          "http://localhost:5000/myaddfood"
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
        path: "/singleordering/:id",
        element:<PrivateRoute> <OrderingPage></OrderingPage></PrivateRoute>,
        loader: ({params}) =>
        fetch(
          `http://localhost:5000/allsinglefood/${params?.id}`
        ),
      },

      {
        path: "/mycart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
      },

      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/addfood",
        element: <PrivateRoute> <AddFood></AddFood> </PrivateRoute>,
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
