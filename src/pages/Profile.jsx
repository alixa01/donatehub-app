import React, { useState } from "react";
import ProfileSideBar from "@/components/ProfileSideBar";
import DonationHistory from "@/components/DonationHistory";
import MyCampaigns from "@/components/MyCampaigns";
import { Button } from "@/components/ui/button";
import { useGetUser } from "@/hooks/useGetUser";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { walletAddress } = useParams();
  const { user, loading, error } = useGetUser(walletAddress);
  const [activeTab, setActiveTab] = useState("donation");

  return (
    <div className="px-6 lg:px-20 py-8 flex flex-row gap-8">
      {loading ? (
        <div className="text-center py-10">Loading...</div>
      ) : error || !user ? (
        <div className="text-center py-10">User not found.</div>
      ) : (
        <>
          {" "}
          <ProfileSideBar />
          <div className="flex-1">
            {/* Tabs */}
            <div className="flex justify-between bg-slate-100 rounded-xl border shadow-sm mb-4">
              <Button
                variant="ghost"
                onClick={() => setActiveTab("donation")}
                className={`w-[50%] rounded-full px-4 py-1 text-sm font-medium transition ${
                  activeTab === "donation"
                    ? "bg-white text-black shadow-sm"
                    : "text-gray-600"
                }`}>
                Donation History
              </Button>
              <Button
                variant="ghost"
                onClick={() => setActiveTab("campaign")}
                className={`w-[50%] rounded-full px-4 py-1 text-sm font-medium transition ${
                  activeTab === "campaign"
                    ? "bg-white text-black shadow-sm"
                    : "text-gray-600"
                }`}>
                My Campaigns
              </Button>
            </div>

            {/* Tab Content */}
            {activeTab === "donation" && <DonationHistory />}
            {activeTab === "campaign" && <MyCampaigns />}
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
