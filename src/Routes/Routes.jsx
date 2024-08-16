
import {
    createBrowserRouter,
  } from "react-router-dom";
import Register from "../components/Register";
import Login from "../components/Login";
import ProtectedRoute from "../Protected/ProtectedRoute";
import Home from "../pages/Home";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute><Home></Home></ProtectedRoute>,
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