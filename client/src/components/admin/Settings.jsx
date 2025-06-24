import { useState, useEffect } from "react";

const Settings = () => {
    const [user, setUser] = useState({ name: "", email: "", role: "" });
    const [tab, setTab] = useState("General");
    const [preview, setPreview] = useState("https://i.pravatar.cc/100");

    useEffect(() => {
        const savedUser = JSON.parse(localStorage.getItem("user"));
        if (savedUser) {
            setUser(savedUser);
        }
    }, []);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setPreview(imageUrl);
        }
    };

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        localStorage.setItem("user", JSON.stringify(user));
        alert("Profile saved!");
    };

    const isActive = (label) =>
        `px-4 py-2 rounded-lg cursor-pointer ${tab === label ? "bg-indigo-100 text-blue-600 font-semibold" : "text-gray-600"
        }`;

    return (
        <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-semibold">Settings</h2>

            <div className="flex gap-8">
                {/* Left Tab Panel */}
                <div className="w-1/4">
                    <div className="flex flex-col gap-2 text-sm">
                        {["General", "Security", "Notifications", "Billing"].map((label) => (
                            <div key={label} onClick={() => setTab(label)} className={isActive(label)}>
                                {label}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Content Panel */}
                <div className="flex-1 bg-gray-50 p-6 rounded-lg">
                    {tab === "General" && (
                        <>
                            <h3 className="text-xl font-semibold mb-4">General Settings</h3>

                            <div className="flex items-center gap-4 mb-6">
                                <img
                                    src={preview}
                                    alt="Profile"
                                    className="w-20 h-20 rounded-full border object-cover"
                                />
                                <label className="inline-flex items-center gap-2 text-sm text-blue-600 cursor-pointer">
                                    <input type="file" onChange={handleImageChange} hidden />
                                    <span className="bg-indigo-100 px-3 py-1 rounded-md text-sm font-medium">
                                        📤 Upload New
                                    </span>
                                </label>
                            </div>

                            <div className="space-y-4 text-sm">
                                <div>
                                    <label className="block mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={user.name}
                                        onChange={handleChange}
                                        className="w-full border px-3 py-2 rounded-lg"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={user.email}
                                        onChange={handleChange}
                                        className="w-full border px-3 py-2 rounded-lg"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-1">Role</label>
                                    <input
                                        type="text"
                                        value={user.role}
                                        disabled
                                        className="w-full border px-3 py-2 rounded-lg bg-gray-100"
                                    />
                                </div>
                            </div>

                            <div className="flex gap-4 mt-6">
                                <button
                                    onClick={handleSave}
                                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                                >
                                    Save Changes
                                </button>
                                <button
                                    onClick={() => window.location.reload()}
                                    className="bg-indigo-100 text-blue-600 px-6 py-2 rounded-lg"
                                >
                                    Cancel
                                </button>
                            </div>
                        </>
                    )}

                    {tab !== "General" && (
                        <div className="text-gray-500 text-sm italic">
                            {tab} section is under construction.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Settings;
