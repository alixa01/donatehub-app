import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useGetCampaigns } from "@/hooks/useGetCampaigns";
import { getStatusBadgeClasses } from "@/utils/uiHelper";
import { dateFormat } from "@/utils/format";
import { useUpdateStatusCampaign } from "@/hooks/useUpdateStatusCampaign";

const CampaignTable = () => {
  const { campaigns, loading, error, fetchCampaigns } =
    useGetCampaigns("PENDING");
  const { updateStatus } = useUpdateStatusCampaign();
  const [updatingId, setUpdatingId] = useState(null);

  const handleUpdate = async (campaignId, status) => {
    try {
      setUpdatingId(campaignId);
      await updateStatus(campaignId, status);
      alert(`Campaign ${status.toLowerCase()}!`);
      await fetchCampaigns();
    } catch (error) {
      alert(`Error: ${error.message}`);
    } finally {
      setUpdatingId(null);
    }
  };

  return (
    <div className="overflow-x-auto border rounded-md">
      {loading ? (
        <p className="text-center py-10">Loading campaigns...</p>
      ) : error ? (
        <p className="text-center py-10 text-red-600">{error.message}</p>
      ) : campaigns.length === 0 ? (
        <p className="text-center py-10 text-gray-500">No pending campaigns.</p>
      ) : (
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
            {campaigns.map((campaign) => {
              const bgClass = getStatusBadgeClasses(campaign.status);
              const isLoadingThis = updatingId === campaign.id;
              return (
                <tr key={campaign.id} className="border-t">
                  <td className="p-3 font-semibold">{campaign.title}</td>
                  <td className="p-3 font-semibold">
                    {campaign.creator.username}
                  </td>
                  <td className="p-3 font-semibold capitalize">
                    {campaign.category}
                  </td>
                  <td className="p-3 font-semibold">
                    ${campaign.goal.toLocaleString()}
                  </td>
                  <td className="p-3 font-semibold">
                    {dateFormat(campaign.createdAt)}
                  </td>
                  <td className="p-3">
                    <span
                      className={`inline-block px-2 py-0.5 text-xs font-medium rounded leading-none ${bgClass}`}>
                      {campaign.status}
                    </span>
                  </td>
                  <td className="p-3 space-x-2">
                    <Button
                      onClick={() => handleUpdate(campaign.id, "APPROVED")}
                      disabled={isLoadingThis}
                      size="sm"
                      className="bg-green-500 hover:bg-green-600 hover:scale-[1.02] text-white px-3 py-1 text-xs h-auto shadow-md transition">
                      {isLoadingThis ? "..." : "Approve"}
                    </Button>
                    <Button
                      onClick={() => handleUpdate(campaign.id, "REJECTED")}
                      disabled={isLoadingThis}
                      variant="destructive"
                      size="sm"
                      className="px-3 py-1 text-xs h-auto shadow-md hover:scale-[1.02] transition">
                      {isLoadingThis ? "..." : "Reject"}
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CampaignTable;
