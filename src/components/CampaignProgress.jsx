import React from "react";
import { Progress } from "@/components/ui/progress";
import { IoTimeOutline } from "react-icons/io5";
import DonationForm from "./DonationForm";

const CampaignProgress = ({ raised, goal, daysLeft }) => {
  const percentage = Math.round((raised / goal) * 100);
  return (
    <div className="pr-20">
      <div className="bg-white shadow-md border rounded-lg p-6 space-y-4">
        {/* Progress */}
        <h1 className="text-2xl font-bold text-gray-800">Campaign Progress</h1>
        <Progress value={percentage}></Progress>

        {/* Funding */}
        <div className="flex justify-between items-baseline">
          <div className="flex flex-col">
            <span className="font-bold text-2xl text-gray-800">
              $ {raised.toLocaleString()}
            </span>
            <span className="text-sm text-muted-foreground">
              raised of $ {goal.toLocaleString()} goal
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-2xl text-gray-800">
              {percentage} %
            </span>
            <span className="text-sm text-muted-foreground">funded</span>
          </div>
        </div>

        {/* Deadline */}
        <div className="flex items-center gap-2 text-muted-foreground">
          <IoTimeOutline size={20} />
          <span className=""> {daysLeft} Days left</span>
        </div>
        <hr />
        <DonationForm />
      </div>
    </div>
  );
};

export default CampaignProgress;
