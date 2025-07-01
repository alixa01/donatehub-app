import React from "react";
import { Progress } from "./ui/progress";
import { IoTimeOutline } from "react-icons/io5";

const MyCampaigns = () => {
  return (
    <div className="w-full">
      <div className="shadow-md border border-slate-200 rounded-xl">
        <div className="px-5 py-2">
          <h1 className="font-semibold text-xl">My Campaigns</h1>
          <span className="text-gray-600 text-sm">
            View all your campaigns and stay updated on their impact
          </span>

          {/* CARD CAMPAIGNS */}
          <div className="border flex flex-row justify-between items-center rounded-lg px-2 py-2 mt-5 w-full">
            <div className="w-[75%] flex flex-col gap-y-1">
              <h1 className="font-semibold text-md">Clear Water Initiative</h1>
              <div className="flex justify-between">
                <span className="font-semibold">$9.750 Raised</span>
                <span className="text-gray-600 text-sm">65% of $15.000</span>
              </div>
              <Progress value={65}></Progress>
              <div className="flex flex-row items-center gap-x-1 text-gray-600 text-sm">
                <IoTimeOutline />
                <span>6 Days left</span>
              </div>
            </div>
            <div className="flex items-center h-5 mr-4 bg-green-200 text-black px-2 py-1 text-sm rounded">
              <span>Active</span>
            </div>
          </div>

          {/* DUMMY */}
          <div className="border flex flex-row justify-between items-center rounded-lg px-2 py-2 mt-5 w-full">
            <div className="w-[75%] flex flex-col gap-y-1">
              <h1 className="font-semibold text-md">Clear Water Initiative</h1>
              <div className="flex justify-between">
                <span className="font-semibold">$9.750 Raised</span>
                <span className="text-gray-600 text-sm">65% of $15.000</span>
              </div>
              <Progress value={65}></Progress>
              <div className="flex flex-row items-center gap-x-1 text-gray-600 text-sm">
                <IoTimeOutline />
                <span>6 Days left</span>
              </div>
            </div>
            <div className="flex items-center h-5 mr-4 bg-green-200 text-black px-2 py-1 text-sm rounded">
              <span>Active</span>
            </div>
          </div>
          <div className="border flex flex-row justify-between items-center rounded-lg px-2 py-2 mt-5 w-full">
            <div className="w-[75%] flex flex-col gap-y-1">
              <h1 className="font-semibold text-md">Clear Water Initiative</h1>
              <div className="flex justify-between">
                <span className="font-semibold">$9.750 Raised</span>
                <span className="text-gray-600 text-sm">65% of $15.000</span>
              </div>
              <Progress value={65}></Progress>
              <div className="flex flex-row items-center gap-x-1 text-gray-600 text-sm">
                <IoTimeOutline />
                <span>6 Days left</span>
              </div>
            </div>
            <div className="flex items-center h-5 mr-4 bg-slate-900 text-white px-2 py-1 text-sm rounded">
              <span>Withdraw</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCampaigns;
