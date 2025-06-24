// Deals.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Deals = () => {
    const navigate = useNavigate();

    // Sample data (replace with real one)
    const deals = [
        {
            id: 1,
            name: "Project Alpha Acquisition",
            status: "Active",
            buyer: "Acme Corp",
            seller: "Globex Inc.",
            lastActivity: "2 hours ago",
        },
        {
            id: 2,
            name: "Project Phoenix Funding",
            status: "Pending",
            buyer: "Innovate Capital",
            seller: "Phoenix Labs",
            lastActivity: "Yesterday",
        },
    ];

    const handleViewClick = (id) => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user?.role === "seller") {
            navigate(`/admin/deals/${id}`);
        } else {
            navigate(`/user/deals/${id}`);
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold mb-4">Deals</h1>
            <table className="min-w-full bg-white border">
                <thead>
                    <tr className="bg-gray-100 text-left text-sm">
                        <th className="p-3">Deal Name</th>
                        <th className="p-3">Status</th>
                        <th className="p-3">Buyer</th>
                        <th className="p-3">Seller</th>
                        <th className="p-3">Last Activity</th>
                        <th className="p-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {deals.map((deal) => (
                        <tr key={deal.id} className="border-t text-sm">
                            <td className="p-3">{deal.name}</td>
                            <td className="p-3">
                                <span
                                    className={`px-2 py-1 rounded-full text-white text-xs ${deal.status === "Active"
                                            ? "bg-green-500"
                                            : deal.status === "Pending"
                                                ? "bg-orange-500"
                                                : "bg-gray-500"
                                        }`}
                                >
                                    {deal.status}
                                </span>
                            </td>
                            <td className="p-3">{deal.buyer}</td>
                            <td className="p-3">{deal.seller}</td>
                            <td className="p-3">{deal.lastActivity}</td>
                            <td className="p-3">
                                <button
                                    onClick={() => handleViewClick(deal.id)}
                                    className="bg-indigo-100 text-blue-600 px-3 py-1 rounded-md hover:bg-indigo-200"
                                >
                                    View
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Deals;
