// src/pages/CreateDeal.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateDeal = () => {
    const navigate = useNavigate();

    const [deal, setDeal] = useState({
        title: "",
        description: "",
        price: "",
        buyer: "",
    });

    const handleChange = (e) => {
        setDeal({ ...deal, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Normally, you'd send this to an API endpoint:
        console.log("Deal submitted:", deal);

        // Simulate success
        navigate("/admin/deals");
    };

    return (
        <div className="max-w-2xl mx-auto mt-10 bg-white p-8 rounded shadow-md">
            <h2 className="text-2xl font-bold mb-6">Create New Deal</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Deal Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        value={deal.title}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
                        placeholder="e.g. SaaS Partnership"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Description
                    </label>
                    <textarea
                        name="description"
                        value={deal.description}
                        onChange={handleChange}
                        rows="4"
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
                        placeholder="Brief summary of the deal..."
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Price ($)
                    </label>
                    <input
                        type="number"
                        name="price"
                        value={deal.price}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
                        placeholder="e.g. 15000"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Buyer Name
                    </label>
                    <input
                        type="text"
                        name="buyer"
                        value={deal.buyer}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
                        placeholder="Optional buyer (if known)"
                    />
                </div>

                <div className="pt-4">
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                    >
                        Create Deal
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateDeal;
