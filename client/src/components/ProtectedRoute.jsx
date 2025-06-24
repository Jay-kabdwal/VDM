import { Navigate } from "react-router-dom";
import { getUser } from "../utils/auth";

const ProtectedRoute = ({ children, role }) => {
    const user = getUser();
    if (!user || user.role !== role) return <Navigate to="/" />;
    return children;
};

export default ProtectedRoute;
