import { useEffect, useState } from "react";
import { Link, useNavigate, Outlet, useLocation } from "react-router-dom";
import { getUser, logoutUser } from "../utils/auth";

const UserHome = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    // ✅ On mount, check if buyer is logged in
    useEffect(() => {
        const currentUser = getUser();
        if (!currentUser || currentUser.role !== "buyer") {
            navigate("/"); // redirect to login if not buyer
        } else {
            setUser(currentUser);
        }
    }, [navigate]);

    // ✅ Logout handler
    const handleLogout = () => {
        logoutUser();
        navigate("/");
    };

    // ✅ Check if link is active
    const isActive = (path) => location.pathname === path;

    return (
        <div className="min-h-screen bg-gray-100">
            {/* ✅ Navbar */}
            <nav className="bg-white shadow px-6 py-3 flex justify-between items-center">
                <div className="text-xl font-bold text-blue-600">User Dashboard</div>

                <ul className="flex gap-6 font-medium text-sm items-center">
                    <li>
                        <Link
                            to="/user"
                            className={isActive("/user") ? "text-black font-semibold" : "text-gray-600 hover:text-black"}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/user/profile"
                            className={isActive("/user/profile") ? "text-black font-semibold" : "text-gray-600 hover:text-black"}
                        >
                            Profile Settings
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/user/chat"
                            className={isActive("/user/chat") ? "text-black font-semibold" : "text-gray-600 hover:text-black"}
                        >
                            Chat
                        </Link>
                    </li>
                    <li>
                        <button
                            onClick={handleLogout}
                            className="text-red-500 hover:underline"
                        >
                            Logout
                        </button>
                    </li>
                </ul>
            </nav>

            {/* ✅ Page content */}
            <main className="p-6">
                <Outlet />
            </main>
        </div>
    );
};

export default UserHome;
