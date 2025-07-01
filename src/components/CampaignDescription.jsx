import React from "react";

const CampaignDescription = ({ description }) => {
  return (
    <div className="px-20 w-full ">
      <div className="bg-white shadow-md border rounded-md py-2 px-4">
        <h1 className="text-xl font-semibold">About this campaign</h1>
        <span className="">{description}</span>
      </div>
    </div>
  );
};

export default CampaignDescription;
