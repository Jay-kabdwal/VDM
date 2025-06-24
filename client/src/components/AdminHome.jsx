// src/components/AdminHome.jsx
import { useEffect, useState } from "react";
import { useNavigate, Link, Outlet, useLocation } from "react-router-dom";
import { LogOut, Bell, HelpCircle, Search } from "lucide-react";
import { getUser, logoutUser } from "../utils/auth";

const AdminHome = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const location = useLocation(); // ✅ Added to highlight active route

    useEffect(() => {
        const loggedInUser = getUser();
        if (!loggedInUser) navigate("/");
        else setUser(loggedInUser);
    }, [navigate]);

    const handleLogout = () => {
        logoutUser();
        navigate("/");
    };

    const isActive = (path) => location.pathname === path;

    return (
        <div className="flex min-h-screen bg-white text-gray-800">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-50 p-6 flex flex-col justify-between border-r">
                <div>
                    <h2 className="text-2xl font-bold text-blue-600 mb-8">VDR</h2>
                    <nav className="space-y-4 font-medium">
                        <Link
                            to="/admin"
                            className={`flex items-center gap-2 ${isActive("/admin") ? "text-black font-bold" : "text-gray-600 hover:text-black"
                                }`}
                        >
                            <span className="material-icons">Dashboard</span> 
                        </Link>

                        {/* ✅ Added Create Deal link */}
                        <Link
                            to="/admin/deals/create"
                            className={`flex items-center gap-2 ${isActive("/admin/deals/create") ? "text-black font-bold" : "text-gray-600 hover:text-black"
                                }`}
                        >
                            <span className="material-icons">Create Deal</span> 
                        </Link>

                        {/* ✅ Added View Deals link */}
                        <Link
                            to="/admin/deals"
                            className={`flex items-center gap-2 ${isActive("/admin/deals") ? "text-black font-bold" : "text-gray-600 hover:text-black"
                                }`}
                        >
                            <span className="material-icons">View Deals</span> 
                        </Link>

                        <Link
                            to="/admin/chat"
                            className={`flex items-center gap-2 ${isActive("/admin/chat") ? "text-black font-bold" : "text-gray-600 hover:text-black"
                                }`}
                        >
                            <span className="material-icons">Chat</span> 
                        </Link>

                        <Link
                            to="/admin/documents"
                            className={`flex items-center gap-2 ${isActive("/admin/documents") ? "text-black font-bold" : "text-gray-600 hover:text-black"
                                }`}
                        >
                            <span className="material-icons">Documents</span> 
                        </Link>

                        <Link
                            to="/admin/payments"
                            className={`flex items-center gap-2 ${isActive("/admin/payments") ? "text-black font-bold" : "text-gray-600 hover:text-black"
                                }`}
                        >
                            <span className="material-icons">Payments</span> 
                        </Link>

                        <Link
                            to="/admin/settings"
                            className={`flex items-center gap-2 ${isActive("/admin/settings") ? "text-black font-bold" : "text-gray-600 hover:text-black"
                                }`}
                        >
                            <span className="material-icons">Settings</span> 
                        </Link>
                    </nav>
                </div>

                {/* Profile & Logout */}
                <div className="flex items-center gap-3">
                    <img src="https://i.pravatar.cc/40" alt="User" className="w-10 h-10 rounded-full" />
                    <div className="flex-1">
                        <p className="font-semibold">{user?.name || "Admin"}</p>
                        <p className="text-xs text-gray-500 capitalize">{user?.role}</p>
                    </div>
                    <LogOut className="w-5 h-5 text-gray-600 cursor-pointer" onClick={handleLogout} />
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-semibold capitalize">{user?.role} Panel</h1>
                    <div className="flex gap-4 items-center">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="border rounded-lg px-3 py-1.5 text-sm w-64"
                            />
                            <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
                        </div>
                        <Bell className="w-5 h-5 text-gray-600" />
                        <HelpCircle className="w-5 h-5 text-gray-600" />
                    </div>
                </div>

                {/* Content renders here */}
                {children || <Outlet />}
            </main>
        </div>
    );
};

export default AdminHome;
