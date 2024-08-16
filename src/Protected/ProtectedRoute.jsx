import { useContext } from "react";
import AuthContext from '../AuthProvider/AuthProvider'
import { Navigate, useLocation } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
    // const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    // if (loading) {
    //     return <span className="loading mx-auto loading-lg mt-48 loading-spinner text-info"></span>
    // }
    // if (user) {
    //     return children
    // }

    return <Navigate loading={location.pathname} to='/login'></Navigate>
};

export default ProtectedRoute;