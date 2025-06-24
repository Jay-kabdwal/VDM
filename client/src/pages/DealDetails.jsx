import React from "react";
import { useParams } from "react-router-dom";

const DealDetails = () => {
    const { id } = useParams();

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Deal Details</h1>
            <p className="mb-2">Deal ID: {id}</p>

            {/* TODO: Replace mock data with real one */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 border rounded-md">
                    <h2 className="font-semibold text-lg mb-2">Summary</h2>
                    <p>Status: Active</p>
                    <p>Buyer: Acme Corp</p>
                    <p>Seller: Globex Inc</p>
                    <p>Value: $1,000,000</p>
                </div>

                <div className="bg-white p-4 border rounded-md">
                    <h2 className="font-semibold text-lg mb-2">Chat</h2>
                    <div className="space-y-2 text-sm">
                        <div className="bg-gray-100 p-2 rounded-md">Jane: Uploaded financials</div>
                        <div className="bg-blue-100 p-2 rounded-md text-right">You: Reviewing now</div>
                    </div>
                </div>
            </div>

            <div className="mt-6 bg-white p-4 border rounded-md">
                <h2 className="font-semibold text-lg mb-2">Documents</h2>
                <ul className="list-disc list-inside text-sm">
                    <li>NDA_Acme_Globex.pdf</li>
                    <li>TermSheet_ProjectAlpha.docx</li>
                </ul>
            </div>
        </div>
    );
};

export default DealDetails;
