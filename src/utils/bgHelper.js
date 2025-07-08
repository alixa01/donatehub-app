import React from "react";

export const getStatusBadgeClasses = (status) => {
  switch (status) {
    case "PENDING":
      return "bg-yellow-100 text-yellow-800";
    case "REJECTED":
      return "bg-red-100 text-red-800";
    case "ACTIVE":
      return "bg-blue-100 text-blue-800";
    case "SUCCESSFUL":
      return "bg-green-100 text-green-800";
    case "COMPLETED":
      return "bg-purple-100 text-purple-800";
    case "FAILED":
      return "bg-gray-100 text-gray-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};
