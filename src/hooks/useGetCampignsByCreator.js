import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import api from "@/lib/api";

export function useGetCampaignsByCreator() {
  const { token } = useAuth();
  const [myCampaignsCreated, setMyCampaignsCreated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!token) {
      setLoading(false);
      return;
    }
    const fetchCampaignsByCreator = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await api.get("/campaigns-created");
        setMyCampaignsCreated(res.data);
      } catch (error) {
        console.error("Failed to fetch user's campaigns:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCampaignsByCreator();
  }, [token]);

  return { myCampaignsCreated, loading, error };
}
