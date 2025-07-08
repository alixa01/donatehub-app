import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
const CampaignHeader = ({ title, category, location }) => {
  return (
    <div className="px-20 pb-4 w-full">
      <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
        {title}
      </h1>

      <div className="flex items-center gap-4 text-gray-500">
        <span className="bg-gray-100 text-gray-800 text-sm font-medium px-4 py-1 rounded-full">
          {category}
        </span>
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt />
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
};

export default CampaignHeader;
