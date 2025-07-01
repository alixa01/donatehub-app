import { campaigns } from "@/lib/campaign";
import React from "react";
import { Button } from "@/components/ui/button";

const getStatusBadge = (status) => {
  return (
    <span className="px-2 py-1 rounded text-xs font-semibold bg-[#EAB308] text-white shadow-md">
      {status}
    </span>
  );
};

const CampaignTable = () => {
  const pendingCampaigns = campaigns.filter((c) => c.status === "Pending");

  return (
    <div className="overflow-x-auto border rounded-md">
      <table className="w-full table-auto text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Title</th>
            <th className="p-3 text-left">Creator</th>
            <th className="p-3 text-left">Category</th>
            <th className="p-3 text-left">Goal Amount</th>
            <th className="p-3 text-left">Submitted Date</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {pendingCampaigns.map((campaign, index) => (
            <tr key={index} className="border-t">
              <td className="p-3 font-semibold">{campaign.title}</td>
              <td className="p-3 font-semibold">{campaign.creator}</td>
              <td className="p-3 font-semibold capitalize">
                {campaign.category}
              </td>
              <td className="p-3 font-semibold">
                ${campaign.goal.toLocaleString()}
              </td>
              <td className="p-3 font-semibold">{campaign.submitted_date}</td>
              <td className="p-3 font-semibold">
                {getStatusBadge(campaign.status)}
              </td>
              <td className="p-3 space-x-2">
                <Button className="bg-green-600 text-white px-2 py-1 text-xs">
                  Approve
                </Button>
                <Button variant="destructive" className="px-2 py-1 text-xs">
                  Reject
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CampaignTable;
