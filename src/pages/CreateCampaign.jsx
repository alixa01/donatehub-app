import CampaignForm from "@/components/CampaignForm";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

const CreateCampaignPage = () => {
  const { token } = useAuth();
  const navigate = useNavigate();

  const handleCreateCampaign = async (campaignData) => {
    const data = new FormData();
    const { imageFiles, ...otherData } = campaignData;

    for (const key in otherData) {
      data.append(key, otherData[key]);
    }

    if (imageFiles) {
      for (let i = 0; i < imageFiles.length; i++) {
        data.append("images", imageFiles[i]);
      }
    }

    try {
      const res = await fetch("http://localhost:3000/campaign", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: data,
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to create campaign");
      }

      alert("Campaign berhasil diajukan");
      navigate("/");
    } catch (error) {
      console.error("Error creating campaign", error);
      alert(`Gagal membuat campaign: ${error.message}`);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Create New Campaign</h1>
      <CampaignForm onSubmit={handleCreateCampaign} />
    </div>
  );
};

export default CreateCampaignPage;
