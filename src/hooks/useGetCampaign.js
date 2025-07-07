import { useState, useEffect } from "react";

export function useGetCampaign(id) {
  const [campaign, setCampaign] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;
    const fetchCampaign = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`http://localhost:3000/campaign/${id}`);
        if (!res.ok) {
          throw new Error("Network response error");
        }

        const data = await res.json();
        setCampaign(data);
      } catch (error) {
        console.error("Failed to fetch campaigns: ", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCampaign();
  }, [id]);

  return { campaign, loading, error };
}
