import React from "react";

const PaymentsScreen = () => {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-6">Payments</h2>

            {/* Payment Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                    <p className="text-gray-500">Total Revenue</p>
                    <h3 className="text-xl font-bold">$1.2M</h3>
                    <p className="text-sm text-gray-400">From all completed deals</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                    <p className="text-gray-500">Pending Payments</p>
                    <h3 className="text-xl font-bold">$50,000</h3>
                    <p className="text-sm text-gray-400">Awaiting settlement</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                    <p className="text-gray-500">Successful Transactions</p>
                    <h3 className="text-xl font-bold">110</h3>
                    <p className="text-sm text-gray-400">Completed this month</p>
                </div>
            </div>

            {/* Refunds */}
            <div className="mb-6">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                    <p className="text-gray-500">Refunds Issued</p>
                    <h3 className="text-xl font-bold">$2,500</h3>
                    <p className="text-sm text-gray-400">Last 30 days</p>
                </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="flex justify-between mb-4">
                    <h4 className="text-lg font-semibold">Recent Transactions</h4>
                    <button className="text-blue-600 text-sm">View All</button>
                </div>
                <ul className="space-y-2">
                    <li className="flex justify-between">
                        <span>Deal #1023 Payment</span>
                        <span className="text-green-500">+$15,000</span>
                    </li>
                    <li className="flex justify-between">
                        <span>Deal #1025 Deposit</span>
                        <span className="text-orange-500">+$5,000</span>
                    </li>
                    <li className="flex justify-between">
                        <span className="line-through text-gray-400">Refund for Deal #1020</span>
                        <span className="text-gray-400">-$500</span>
                    </li>
                    <li className="flex justify-between">
                        <span>Deal #1022 Final Payment</span>
                        <span className="text-green-500">+$20,000</span>
                    </li>
                    <li className="flex justify-between">
                        <span>Deal #1024 Initial Payment</span>
                        <span className="text-green-500">+$10,000</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default PaymentsScreen;
