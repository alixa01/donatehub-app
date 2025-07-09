import api from "@/lib/api";
import { useState } from "react";

export function useUpdateStatusCampaign() {
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState(null);

  const updateStatus = async (campaignId, newStatus) => {
    console.log("Updating:", campaignId, newStatus);
    setIsUpdating(true);
    setError(null);

    try {
      await api.patch(`/campaign/${campaignId}`, { status: newStatus });
    } catch (error) {
      const errorMessage = error.response?.data?.error || "Update failed";
      console.error(errorMessage, error);
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsUpdating(false);
    }
  };

  return { updateStatus, isUpdating, error };
}
