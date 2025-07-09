import { useEffect, useState } from "react";
import api from "@/lib/api";

export function useGetCampaigns(status) {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCampaigns = async () => {
    if (!status) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await api.get(`/campaigns?status=${status.toUpperCase()}`);
      setCampaigns(res.data);
    } catch (error) {
      console.error("Failed to fetch user's campaigns:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCampaigns();
  }, [status]);

  return { campaigns, loading, error, fetchCampaigns };
}
