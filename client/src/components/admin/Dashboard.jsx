// src/components/admin/Dashboard.jsx

import { useNavigate } from "react-router-dom"; // ⬅️ added for navigation

const Dashboard = () => {
    const navigate = useNavigate(); // ⬅️ initialize navigator

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            {/* Top Stats */}
            <div className="bg-white p-6 rounded-xl shadow-sm border">
                <p className="text-gray-500 mb-1">Total Deals</p>
                <h2 className="text-3xl font-bold">124</h2>
                <p className="text-xs text-green-600 mt-1">+15% from last month</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border">
                <p className="text-gray-500 mb-1">Active Deals</p>
                <h2 className="text-3xl font-bold">12</h2>
                <p className="text-xs text-gray-400 mt-1">Currently in negotiation</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border">
                <p className="text-gray-500 mb-1">Revenue Generated</p>
                <h2 className="text-3xl font-bold">$1.2M</h2>
                <p className="text-xs text-gray-400 mt-1">Year-to-date earnings</p>
            </div>

            {/* Payments + Quick Actions + Notifications */}
            <div className="bg-white p-6 rounded-xl shadow-sm border col-span-1">
                <p className="text-gray-500 mb-1">Pending Payments</p>
                <h2 className="text-3xl font-bold">$50,000</h2>
                <p className="text-xs text-gray-400 mt-1">Awaiting settlement</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border col-span-1">
                <p className="text-gray-500 mb-4">Quick Actions</p>
                <div className="space-y-2">
                    <button
                        className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
                        onClick={() => navigate("/admin/deals/create")} // ⬅️ navigate to Create Deal
                    >
                        + Create New Deal
                    </button>
                    <button className="w-full bg-indigo-100 text-blue-700 px-4 py-2 rounded-lg text-sm hover:bg-indigo-200">
                        📄 Upload Document
                    </button>
                    <button className="w-full bg-indigo-100 text-blue-700 px-4 py-2 rounded-lg text-sm hover:bg-indigo-200">
                        🎥 Start Video Call
                    </button>
                </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border col-span-1">
                <p className="text-gray-500 mb-4">Recent Notifications</p>
                <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                        <span className="text-blue-600">💬</span>
                        <div>
                            <p>
                                New message from <strong>Jane Smith</strong>
                            </p>
                            <p className="text-xs text-gray-400">5 min ago</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-orange-600">📁</span>
                        <div>
                            <p>
                                Document <strong>'Contract_v2.pdf'</strong> uploaded
                            </p>
                            <p className="text-xs text-gray-400">1 hour ago</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-green-600">💰</span>
                        <div>
                            <p>Payment received for Deal #1023</p>
                            <p className="text-xs text-gray-400">Yesterday</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-blue-400">🔁</span>
                        <div>
                            <p>Deal #1025 status updated to 'Pending'</p>
                            <p className="text-xs text-gray-400">2 days ago</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
