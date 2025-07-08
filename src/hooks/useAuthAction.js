import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "@/lib/api";

export function useAuthAction() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async ({ username, walletAddress }) => {
    if (!username || !walletAddress) {
      setError("Username and wallet are required!");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await api.post("/register", {
        username,
        walletAddress,
      });

      alert("Registration successful! Please login.");
      navigate("/login");
    } catch (error) {
      console.error("Failed to register", error);
      const errorMessage =
        error?.response?.data?.message ||
        error.message ||
        "Registration failed";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async ({ walletAddress, onSuccess }) => {
    if (!walletAddress) {
      setError("Wallet is required!");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await api.post("/login", { walletAddress });
      const data = res.data;

      if (onSuccess) {
        onSuccess({ token: data, user: data.user });
      }

      navigate("/");
    } catch (error) {
      console.error("Login failed", error);
      const errorMessage =
        error?.response?.data?.message || error.message || "Login failed";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { handleRegister, handleLogin, loading, error, setError };
}
