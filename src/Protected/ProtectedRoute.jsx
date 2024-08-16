import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
const ProtectedRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <span className="loading  ml-[50%] mr-[50%] loading-lg mt-48 loading-spinner text-info"></span>
    }
    if (user) {
        return children
    }

    return <Navigate loading={location.pathname} to='/login'></Navigate>
};

export default ProtectedRoute;