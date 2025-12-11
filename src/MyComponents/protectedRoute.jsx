import { Navigate } from "react-router-dom";

function ProtectedRoute({children}){
    const isUserLoggedIn = localStorage.getItem("loggedIn");

    if(!isUserLoggedIn){
        return <Navigate to="/login" replace />;
    }

    return children;
}

export default ProtectedRoute;