import CampaignTable from "@/components/CampaignTable";
import React from "react";

const PendingCampaigns = () => {
  return (
    <div className="px-20 pb-4 w-full">
      <h1 className="py-8 text-4xl font-semibold">Pending Campaigns</h1>
      <CampaignTable />
    </div>
  );
};

export default PendingCampaigns;
