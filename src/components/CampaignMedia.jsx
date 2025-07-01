import React from "react";

const CampaignMedia = ({ image }) => {
  return (
    <div className="px-20 pb-4 w-full">
      <img
        src={image}
        alt=""
        className="rounded-md shadow-md w-full h-96 object-cover mx-auto"
      />
      <div className="grid grid-cols-3 gap-3 pt-3">
        <img src={image} alt="" className="rounded-md shadow-md" />
        <img src={image} alt="" className="rounded-md shadow-md" />
        <img src={image} alt="" className="rounded-md shadow-md" />
      </div>
    </div>
  );
};

export default CampaignMedia;
