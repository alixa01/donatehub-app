import { useState, useEffect } from "react";
import api from "@/lib/api";

export function useGetCampaign(id) {
  const [campaign, setCampaign] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    const fetchCampaign = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await api.get(`/campaign/${id}`);
        setCampaign(res.data);
      } catch (err) {
        console.error("Failed to fetch campaign: ", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCampaign();
  }, [id]);

  return { campaign, loading, error };
}
