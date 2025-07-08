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

  const daysLeft = campaign ? calculateDaysLeft(campaign.deadline) : 0;

  return (
    <div className="py-8">
      {loading ? (
        <div className="text-center py-10">Loading...</div>
      ) : error || !campaign ? (
        <div className="text-center py-10">Campaign not found.</div>
      ) : (
        <>
          <CampaignHeader
            title={campaign.title}
            category={campaign.category}
            location={campaign.location}
          />
          <div className="flex">
            <div className="w-3/5 h-full">
              <CampaignMedia
                image={campaign.imageUrls}
                title={campaign.title}
              />
            </div>
            <div className="flex-1 space-y-5">
              <CampaignDescription description={campaign.detailDescription} />
              <CampaignProgress
                raised={campaign.raised}
                goal={campaign.goal}
                daysLeft={daysLeft}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Detail;
