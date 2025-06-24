import React from "react";

const ChatScreen = () => {
    return (
        <div className="flex h-screen">
            {/* Sidebar with chats */}
            <div className="w-1/4 border-r bg-gray-50 p-4">
                <h2 className="text-xl font-semibold mb-4">Chat</h2>
                <input
                    type="text"
                    placeholder="Search chats..."
                    className="w-full p-2 mb-4 rounded-md border"
                />
                {/* Chat List */}
                <div className="space-y-2">
                    <div className="p-2 rounded-md bg-indigo-100">
                        <p className="font-semibold">Project Alpha</p>
                        <p className="text-xs text-gray-600">You: Thanks!</p>
                        <span className="text-xs text-gray-400 float-right">10:35 AM</span>
                    </div>
                    <div className="p-2 hover:bg-gray-100 rounded-md">
                        <p className="font-semibold">Acme Corp</p>
                        <p className="text-xs text-gray-600">Sarah: Meeting...</p>
                        <span className="text-xs text-gray-400 float-right">Yesterday</span>
                    </div>
                </div>
            </div>

            {/* Chat Area */}
            <div className="w-3/4 p-6">
                <div className="flex items-center space-x-4 mb-4">
                    <img
                        src="https://randomuser.me/api/portraits/women/1.jpg"
                        alt="Support"
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <p className="font-semibold">Globex Inc. Support</p>
                        <p className="text-sm text-gray-500">Support: How can I help you?</p>
                    </div>
                    <span className="ml-auto text-sm text-gray-400">Oct 24</span>
                </div>
            </div>
        </div>
    );
};

export default ChatScreen;
