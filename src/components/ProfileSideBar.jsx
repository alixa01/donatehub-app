import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useGetUser } from "@/hooks/useGetUser";
import { shortenAddress } from "@/utils/format";
import { useAuth } from "@/context/AuthContext";

const ProfileSideBar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  const { user, loading, error } = useGetUser();

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (error || !user) {
    return <div className="text-center py-10">User not found.</div>;
  }

  return (
    <div className="w-[40%]">
      {" "}
      <div className="flex items-center shadow-md border border-slate-200 rounded-xl h-full ">
        <div className="flex items-center flex-col py-10 w-full">
          <FaUserCircle className="w-20 h-20 mb-5 text-gray-500" />
          {/* HEADER PROFILE */}
          <div className="flex flex-col items-center gap-y-1">
            <h1 className="font-semibold text-2xl">{user.username}</h1>
            <span className="text-gray-600 text-sm">
              {shortenAddress(user.walletAddress)}
            </span>
            <span className="flex items-center gap-2 text-gray-600 text-sm">
              <SlCalender />
              Joined at {new Date(user.createdAt).toLocaleDateString()}
            </span>
          </div>
          {/* DETAIL */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 pt-6 w-full px-6 text-center">
            <div className="flex flex-col text-gray-600">
              <span className="text-2xl font-semibold text-black">4</span>
              <span className="text-sm">Donation Made</span>
            </div>
            <div className="flex flex-col text-gray-600">
              <span className="text-2xl font-semibold text-black">$1000</span>
              <span className="text-sm">Total Donated</span>
            </div>
            <div className="flex flex-col text-gray-600 col-span-full lg:col-span-2">
              <span className="text-2xl font-semibold text-black">3</span>
              <span className="text-sm">Campaign Created</span>
            </div>
          </div>
          {/*  */}
          <div className="w-full pt-5 flex flex-col items-center gap-y-4">
            <Button
              onClick={handleLogout}
              variant="destructive"
              className="w-[60%] bg-gray-800 text-white hover:bg-gray-700 hover:text-white">
              Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSideBar;
