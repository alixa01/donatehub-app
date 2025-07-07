import { useEffect, useState } from "react";

export function useGetUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      setError(null);

      const token = localStorage.getItem("token");

      if (!token) {
        setLoading(false);
        setError(new Error("No token found. Please login."));
        return;
      }

      try {
        const res = await fetch("http://localhost:3000/user", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.error("Failed to fetch logged in user: ", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { user, loading, error };
}
