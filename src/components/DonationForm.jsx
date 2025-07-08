import React from "react";
import { FaEthereum } from "react-icons/fa";
import { Button } from "./ui/button";

const DonationForm = () => {
  return (
    <form className="">
      {/* Form */}
      <div className="flex flex-col pb-4">
        <label
          htmlFor="donation-amount"
          className="text-sm font-medium text-gray-700">
          Donation Amount
        </label>
        <div className="mt-1 flex items-center border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-primary">
          <span className="px-3 text-gray-500">
            <FaEthereum />
          </span>
          <input
            id="donation-amount"
            type="number"
            placeholder="Enter amount"
            className="flex-1 px-3 py-2 text-sm focus:outline-none"
          />
        </div>
      </div>

      {/* Button Submit */}
      <Button
        type="submit"
        className="w-full  bg-gray-900 text-white rounded-md shadow-md py-1 ease-in-out duration-300 hover:bg-gray-700 hover:cursor-pointer">
        Donate Now
      </Button>
    </form>
  );
};

export default DonationForm;
