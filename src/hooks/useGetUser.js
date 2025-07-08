import { useEffect, useState } from "react";
import api from "@/lib/api";
import { useAuth } from "@/context/AuthContext";

export function useGetUser() {
  const { token } = useAuth();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!token) {
      setLoading(false);
      return;
    }

    const fetchUser = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await api.get("/user");
        setUser(res.data);
      } catch (error) {
        console.error("Failed to fetch user's campaigns:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { user, loading, error };
}
