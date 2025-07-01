import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCampaignForm } from "@/hooks/useCampaignForm";

const CampaignForm = ({ onSubmit }) => {
  const { values, setters, handleSubmit, errors } = useCampaignForm(onSubmit);

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {/* Title */}
      <div>
        <label className="block text-sm font-medium mb-1">Campaign Title</label>
        <Input
          name="title"
          value={values.title}
          onChange={(e) => setters.setTitle(e.target.value)}
          placeholder="Enter campaign title"
        />
        {errors.title && (
          <p className="text-sm text-red-500 mt-1">{errors.title}</p>
        )}
      </div>

      {/* Detail Description */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Detail Description
        </label>
        <Textarea
          name="detailDescription"
          value={values.detailDescription}
          onChange={(e) => setters.setDetailDescription(e.target.value)}
          placeholder="Detailed description of your campaign"
        />
        {errors.detailDescription && (
          <p className="text-sm text-red-500 mt-1">
            {errors.detailDescription}
          </p>
        )}
      </div>

      {/* Short Description */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Short Description
        </label>
        <Input
          name="shortDescription"
          value={values.shortDescription}
          onChange={(e) => setters.setShortDescription(e.target.value)}
          placeholder="Brief summary of your campaign"
        />
        {errors.shortDescription && (
          <p className="text-sm text-red-500 mt-1">{errors.shortDescription}</p>
        )}
      </div>

      {/* Category */}
      <div>
        <label className="block text-sm font-medium mb-1">Category</label>
        <Select onValueChange={setters.setCategory} value={values.category}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="education">Education</SelectItem>
            <SelectItem value="environment">Environment</SelectItem>
            <SelectItem value="health">Health</SelectItem>
            <SelectItem value="disaster">Disaster Relief</SelectItem>
          </SelectContent>
        </Select>
        {errors.category && (
          <p className="text-sm text-red-500 mt-1">{errors.category}</p>
        )}
      </div>

      {/* Goal */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Goal Amount (USD)
        </label>
        <Input
          name="goal"
          type="number"
          value={values.goal}
          onChange={(e) => setters.setGoal(e.target.value)}
          placeholder="e.g., 1000"
        />
        {errors.goal && (
          <p className="text-sm text-red-500 mt-1">{errors.goal}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Deadline</label>
        <Input
          name="deadline"
          type="date"
          value={values.deadline}
          onChange={(e) => setters.setDeadline(e.target.value)}></Input>{" "}
        {errors.deadline && (
          <p className="text-sm text-red-500 mt-1">{errors.deadline}</p>
        )}
      </div>

      {/* Location */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Campaign Location
        </label>
        <Input
          name="location"
          value={values.location}
          onChange={(e) => setters.setLocation(e.target.value)}
          placeholder="Enter campaign location"
        />
        {errors.location && (
          <p className="text-sm text-red-500 mt-1">{errors.location}</p>
        )}
      </div>

      {/* Campaign Image */}
      <div>
        <label className="block text-sm font-medium mb-1">Campaign Image</label>
        <Input
          name="imageUrl"
          type="file"
          accept="image/*"
          onChange={(e) => setters.setImageUrl(e.target.files[0])}
        />
      </div>

      {/* Submit */}
      <Button
        type="submit"
        className="w-full bg-slate-900 text-white hover:bg-slate-700 cursor-pointer">
        Submit Campaign
      </Button>
    </form>
  );
};

export default CampaignForm;
