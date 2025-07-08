import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "@/lib/api";

export function usePostCampaign() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const postCampaign = async (campaignData) => {
    const formData = new FormData();
    const { imageFiles, ...otherData } = campaignData;

    // Data
    for (const key in otherData) {
      formData.append(key, otherData[key]);
    }

    // Gambar
    if (imageFiles && imageFiles.length > 0) {
      for (let i = 0; i < imageFiles.length; i++) {
        formData.append("images", imageFiles[i]);
      }
    }

    setLoading(true);
    setError(null);

    try {
      await api.post("/campaign", formData);

      alert("Campaign berhasil diajukan");
      navigate("/");
    } catch (error) {
      console.error("Error creating campaign:", error);
      const msg =
        error?.response?.data?.message ||
        error.message ||
        "Gagal membuat campaign";
      setError(msg);
      alert(`Gagal membuat campaign: ${msg}`);
    } finally {
      setLoading(false);
    }
  };

  return { postCampaign, loading, error };
}
