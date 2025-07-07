import React from "react";

const CampaignDescription = ({ description }) => {
  return (
    <div className="pr-20">
      <div className="bg-white shadow-md border rounded-md p-4">
        <h1 className="text-xl font-semibold pb-2">About this campaign</h1>
        <span className="">{description}</span>
      </div>
    </div>
  );
};

export default CampaignDescription;
