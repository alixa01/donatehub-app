import { useEffect, useState } from "react";
import api from "@/lib/api";

export function useGetCampaigns(status) {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!status) {
      setLoading(false);
      return;
    }
    const fetchCampaignsByStatus = async () => {
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

    fetchCampaignsByStatus();
  }, [status]);

  return { campaigns, loading, error };
}
