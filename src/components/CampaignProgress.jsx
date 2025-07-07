import React from "react";
import { Progress } from "@/components/ui/progress";
import { IoTimeOutline } from "react-icons/io5";
import DonationForm from "./DonationForm";

const CampaignProgress = ({ raised, goal, daysLeft }) => {
  const percentage = Math.round((raised / goal) * 100);
  return (
    <div className="pr-20">
      <div className="bg-white shadow-md border rounded-md p-4">
        {" "}
        <h1 className="text-xl font-semibold pb-2">Campaign Progress</h1>
        {/* PROGRESS */}
        <Progress value={percentage}></Progress>
        {/* FUNDING */}
        <div className="flex justify-between pt-4">
          <div className="flex flex-col">
            <span className="text-2xl font-semibold">
              $ {raised.toLocaleString()}
            </span>
            <span className="text-gray-500">
              raised of $ {goal.toLocaleString()} goal
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-semibold">{percentage} %</span>
            <span className="text-gray-500">funded</span>
          </div>
        </div>
        <div className="flex items-center gap-1 text-gray-500 text-sm py-4">
          <IoTimeOutline /> <span className=""> {daysLeft} Days left</span>
        </div>
        <hr />
        <DonationForm />
      </div>
    </div>
  );
};

export default CampaignProgress;
