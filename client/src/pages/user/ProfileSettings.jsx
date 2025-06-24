import React from "react";

const ProfileSettings = () => {
    return (
        <div className="bg-white p-6 rounded shadow max-w-md">
            <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Full Name</label>
                    <input
                        type="text"
                        className="w-full border px-3 py-2 rounded"
                        placeholder="John Doe"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                        type="email"
                        className="w-full border px-3 py-2 rounded"
                        placeholder="user@example.com"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Save Changes
                </button>
            </form>
        </div>
    );
};

export default ProfileSettings;
