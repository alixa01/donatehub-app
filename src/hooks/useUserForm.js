import { useState } from "react";

export function useUserForm(onSubmit) {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setError("");
    if (!username.trim()) {
      setError("Username tidak boleh kosong");
      return;
    }
    try {
      await onSubmit({ username });
    } catch (error) {
      setError(error.message || "Terjadi kesalahan");
    }
  };
  return {
    username,
    setUsername,
    error,
    handleSubmit,
  };
}
