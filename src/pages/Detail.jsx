import CampaignDescription from "@/components/CampaignDescription";
import CampaignHeader from "@/components/CampaignHeader";
import CampaignMedia from "@/components/CampaignMedia";
import CampaignProgress from "@/components/CampaignProgress";
import { useGetCampaign } from "@/hooks/useGetCampaign";
import { calculateDaysLeft } from "@/utils/daysLeft";
import React from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const { campaign, loading, error } = useGetCampaign(id);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (error || !campaign) {
    return <div className="text-center py-10">Campaign not found.</div>;
  }
  const daysLeft = calculateDaysLeft(campaign.deadline);

  return (
    <div className="py-8">
      {" "}
      <CampaignHeader
        title={campaign.title}
        category={campaign.category}
        location={campaign.location}
      />
      <div className="flex">
        {" "}
        <div className="w-3/5">
          {" "}
          <CampaignMedia image={campaign.imageUrl} />
          <CampaignDescription description={campaign.detailDescription} />
        </div>
        <div className="flex-1">
          <CampaignProgress
            raised={campaign.raised}
            goal={campaign.goal}
            daysLeft={daysLeft}
          />
        </div>
      </div>
    </div>
  );
};

export default Detail;
