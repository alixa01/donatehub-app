import CampaignDescription from "@/components/CampaignDescription";
import CampaignHeader from "@/components/CampaignHeader";
import CampaignMedia from "@/components/CampaignMedia";
import CampaignProgress from "@/components/CampaignProgress";
import React from "react";

const Detail = () => {
  return (
    <div className="py-8">
      {" "}
      <CampaignHeader
        title="Clean Water for Rural Communities"
        category="environment"
        location="Padang"
      />
      <div className="flex">
        {" "}
        <div className="w-3/5">
          {" "}
          <CampaignMedia image="src/assets/cardImage.png" />
          <CampaignDescription description="Natural disasters often strike without warning, leaving behind devastation and disrupting access to essential services. In the midst of such emergencies, immediate medical assistance is crucial to save lives and prevent the spread of disease. This campaign aims to provide critical medical supplies such as medicines, bandages, antiseptics, first aid kits, and emergency medical support to the hardest-hit communities. With your donation, our team of volunteers can respond more quickly, reaching affected areas to deliver urgent care and support overwhelmed local health facilities. Your contribution not only helps victims survive during the crisis but also brings hope and humanity in times of despair. Together, we can make a real difference." />
        </div>
        <div className="flex-1">
          <CampaignProgress raised="9750" goal="15000" daysLeft="6" />
        </div>
      </div>
    </div>
  );
};

export default Detail;
