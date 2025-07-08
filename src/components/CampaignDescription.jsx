import React from "react";

const CampaignDescription = ({ description }) => {
  return (
    <div className="pr-20">
      <div className="bg-white rounded-lg border p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          About this campaign
        </h1>
        <span className="text-gray-600 leading-relaxed whitespace-pre-wrap">
          {description}
        </span>
      </div>
    </div>
  );
};

export default CampaignDescription;
