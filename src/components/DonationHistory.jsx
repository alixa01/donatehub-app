import React from "react";

const DonationHistory = () => {
  return (
    <div className="w-full">
      <div className="shadow-md border border-slate-200 rounded-xl flex flex-col h-[70vh]">
        <div className="px-5 py-2">
          <h1 className="font-semibold text-xl">Donation History</h1>
          <span className="text-gray-600 text-sm">
            View all your past donations and their status
          </span>

          {/* Card Donation History */}
          <div className="border flex flex-row justify-between items-center rounded-lg p-3 mt-5">
            <div>
              <h1 className="font-semibold text-md">Clear Water Initiative</h1>
              <span className="text-gray-600 text-sm">
                $200 Donated on May 15, 2025
              </span>
            </div>
            <div className="flex items-center h-5 mr-4 bg-green-200 text-black px-2 py-1 text-sm rounded">
              <span>Completed</span>
            </div>
          </div>

          {/* DUMMY */}
          <div className="border flex flex-row justify-between items-center rounded-lg px-2 py-2 mt-5">
            <div>
              <h1 className="font-semibold text-md">Clear Water Initiative</h1>
              <span className="text-gray-600 text-sm">
                $200 Donated on May 15, 2025
              </span>
            </div>
            <div className="flex items-center h-5 mr-4 bg-green-200 text-black px-2 py-1 text-sm rounded">
              <span>Completed</span>
            </div>
          </div>
          <div className="border flex flex-row justify-between items-center rounded-lg px-2 py-2 mt-5">
            <div>
              <h1 className="font-semibold text-md">Clear Water Initiative</h1>
              <span className="text-gray-600 text-sm">
                $200 Donated on May 15, 2025
              </span>
            </div>
            <div className="flex items-center h-5 mr-4 bg-green-200 text-black px-2 py-1 text-sm rounded">
              <span>Completed</span>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default DonationHistory;
