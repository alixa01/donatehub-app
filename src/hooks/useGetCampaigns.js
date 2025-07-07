import { useEffect, useState } from "react";

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
        const res = await fetch(
          `http://localhost:3000/campaigns?status=${status.toUpperCase()}`,
          {
            method: "GET",
            header: { "Content-Type": "application-json" },
          }
        );
        if (res.status === 404) {
          throw new Error("Campaigns not found");
        }
        if (!res.ok) {
          throw new Error("Network response error");
        }

        const data = await res.json();
        setCampaigns(data);
      } catch (error) {
        console.error("Failed to fetch campaigns: ", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCampaignsByStatus();
  }, [status]);
  return { campaigns, loading, error };
}
