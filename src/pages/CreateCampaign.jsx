import CampaignForm from "@/components/CampaignForm";
import { usePostCampaign } from "@/hooks/usePostCampaign";

const CreateCampaignPage = () => {
  const { postCampaign, loading, error } = usePostCampaign();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Create New Campaign</h1>
      <CampaignForm onSubmit={postCampaign} disabled={loading} />
      {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
    </div>
  );
};

export default CreateCampaignPage;
