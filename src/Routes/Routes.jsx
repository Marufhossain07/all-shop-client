
import {
    createBrowserRouter,
  } from "react-router-dom";
import Register from "../components/Register";
import Login from "../components/Login";
import Products from "../pages/Products";
import ProtectedRoute from "../Protected/ProtectedRoute";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute><Products></Products></ProtectedRoute>,
    },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/register',
      element: <Register></Register>
    }
  ]);

export default router;