import React from "react";
import { Link } from "react-router-dom";
import CampaignCard from "@/components/CampaignCard";
import { Button } from "@/components/ui/button";
import { campaigns } from "@/lib/campaign";
import { useAuth } from "@/context/AuthContext";

const Home = () => {
  const { user } = useAuth();
  return (
    <div>
      <div className="px-20">
        <div className="flex justify-start items-center gap-5 py-8">
          <h1 className="text-4xl font-semibold">Campaigns</h1>
          {user?.role === "ADMIN" ? (
            <Link to="/pending-campaign">
              <Button
                variant="outline"
                className=" bg-slate-900 text-white hover:bg-slate-700 hover:text-white hover:cursor-pointer">
                Pending campaign
              </Button>
            </Link>
          ) : user?.role === "USER" ? (
            <Link to="/create-campaign">
              <Button
                variant="outline"
                className=" bg-slate-900 text-white hover:bg-slate-700 hover:text-white hover:cursor-pointer">
                Create campaign
              </Button>
            </Link>
          ) : null}
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {campaigns.map((c, i) => (
            <CampaignCard key={i} {...c} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
