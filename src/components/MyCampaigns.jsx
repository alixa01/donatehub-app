import React from "react";
import { Link } from "react-router-dom";
import { Progress } from "./ui/progress";
import { IoTimeOutline } from "react-icons/io5";
import { calculateDaysLeft } from "@/utils/format";
import { useGetCampaignsByCreator } from "@/hooks/useGetCampignsByCreator";
import { getStatusBadgeClasses } from "@/utils/uiHelper";
import { Button } from "./ui/button";

const MyCampaigns = () => {
  const { myCampaignsCreated, loading, error } = useGetCampaignsByCreator();

  return (
    <div className="w-full">
      <div className="shadow-md border border-slate-200 rounded-xl flex flex-col h-[70vh]">
        <div className="px-5 py-4 border-b">
          <h1 className="font-semibold text-xl">My Campaigns</h1>
          <span className="text-gray-600 text-sm">
            View all your campaigns and stay updated on their impact
          </span>
        </div>

        {/* Card My Campaigns */}
        <div className="flex-1 overflow-y-auto p-5">
          <div className="flex flex-col gap-y-4">
            {loading ? (
              <p className="text-center py-10">Loading campaigns...</p>
            ) : error ? (
              <p className="text-center py-10 text-red-600">{error.message}</p>
            ) : myCampaignsCreated.length === 0 ? (
              <p className="text-center py-10 text-gray-500">
                You haven't created any campaigns yet.
              </p>
            ) : (
              myCampaignsCreated.map((campaign) => {
                const percentage =
                  campaign.goal > 0
                    ? Math.round((campaign.raised / campaign.goal) * 100)
                    : 0;
                const daysLeft = calculateDaysLeft(campaign.deadline);
                const bgClass = getStatusBadgeClasses(campaign.status);

                const cardContent = (
                  <div className="border flex flex-row justify-between rounded-lg p-3 w-full shadow-sm hover:shadow-md transition">
                    <div className="w-[75%] flex flex-col gap-y-1">
                      <h1 className="font-semibold text-md">
                        {campaign.title}
                      </h1>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">
                          ${campaign.raised.toLocaleString()} Raised
                        </span>
                        <span className="text-gray-500 text-sm">
                          of ${campaign.goal.toLocaleString()}
                        </span>
                      </div>
                      <Progress value={percentage} className="mt-1" />
                      <div className="flex flex-row items-center gap-x-1 text-gray-500 text-sm mt-1">
                        <IoTimeOutline />
                        <span>{daysLeft} Days left</span>
                      </div>
                    </div>

                    {/* Status */}
                    <div className="flex flex-col items-center m-auto gap-y-5">
                      <div
                        className={`flex items-center h-5 text-black font-semibold px-2 py-1 text-sm rounded ${bgClass}`}>
                        <span>{campaign.status}</span>
                      </div>

                      {campaign.status === "APPROVED" && (
                        <Button className="flex items-center h-5 text-black bg-green-500 hover:bg-green-600 hover:cursor-pointer hover:scale-[1.02] font-normal px-2 py-1 text-sm transition">
                          <span>Deploy Now</span>
                        </Button>
                      )}
                    </div>
                  </div>
                );

                return (
                  <div key={campaign.id}>
                    {campaign.status === "ACTIVE" ? (
                      <Link
                        to={`/campaign/${campaign.id}`}
                        className="block hover:opacity-90 transition cursor-pointer">
                        {cardContent}
                      </Link>
                    ) : (
                      cardContent
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCampaigns;
