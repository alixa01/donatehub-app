import React from "react";

const CampaignHeader = ({ title, category, location }) => {
  return (
    <div className="px-20 pb-4 w-full">
      <h1 className="text-4xl font-semibold mb-2">{title}</h1>

      <div className="flex items-center gap-2 text-base text-gray-500">
        <span className="bg-gray-100 text-black text-sm px-2 py-1 rounded-full">
          {category}
        </span>
        <span>• {location}</span>
      </div>
    </div>
  );
};

export default CampaignHeader;
