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
  const {
    values,
    imageFiles,
    errors,
    handleChange,
    setCategory,
    setImageFiles,
    handleSubmit,
  } = useCampaignForm(onSubmit);

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {/* Title */}
      <div>
        <label htmlFor="title" className="block text-sm font-medium mb-1">
          Campaign Title
        </label>
        <Input
          id="title"
          name="title"
          value={values.title}
          onChange={handleChange}
          placeholder="Enter campaign title"
        />
        {errors.title && (
          <p className="text-sm text-red-500 mt-1">{errors.title}</p>
        )}
      </div>

      {/* Detail Description */}
      <div>
        <label htmlFor="detailDesc" className="block text-sm font-medium mb-1">
          Detail Description
        </label>
        <Textarea
          id="detailDesc"
          name="detailDescription"
          value={values.detailDescription}
          onChange={handleChange}
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
        <label htmlFor="shortDesc" className="block text-sm font-medium mb-1">
          Short Description
        </label>
        <Input
          id="shortDesc"
          name="shortDescription"
          value={values.shortDescription}
          onChange={handleChange}
          placeholder="Brief summary of your campaign"
        />
        {errors.shortDescription && (
          <p className="text-sm text-red-500 mt-1">{errors.shortDescription}</p>
        )}
      </div>

      {/* Category */}
      <div>
        <label htmlFor="category" className="block text-sm font-medium mb-1">
          Category
        </label>
        <Select
          id="category"
          onValueChange={setCategory}
          value={values.category}>
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
        <label htmlFor="goal" className="block text-sm font-medium mb-1">
          Goal Amount (USD)
        </label>
        <Input
          id="goal"
          name="goal"
          type="number"
          value={values.goal}
          onChange={handleChange}
          placeholder="e.g., 1000"
        />
        {errors.goal && (
          <p className="text-sm text-red-500 mt-1">{errors.goal}</p>
        )}
      </div>

      {/* Deadline */}
      <div>
        <label htmlFor="deadline" className="block text-sm font-medium mb-1">
          Deadline
        </label>
        <Input
          id="deadline"
          name="deadline"
          type="date"
          value={values.deadline}
          onChange={handleChange}></Input>
        {errors.deadline && (
          <p className="text-sm text-red-500 mt-1">{errors.deadline}</p>
        )}
      </div>

      {/* Location */}
      <div>
        <label htmlFor="location" className="block text-sm font-medium mb-1">
          Campaign Location
        </label>
        <Input
          id="location"
          name="location"
          value={values.location}
          onChange={handleChange}
          placeholder="Enter campaign location"
        />
        {errors.location && (
          <p className="text-sm text-red-500 mt-1">{errors.location}</p>
        )}
      </div>

      {/* Campaign Image */}
      <div>
        <label htmlFor="image" className="block text-sm font-medium mb-1">
          Campaign Image
        </label>
        <Input
          id="image"
          name="images"
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => setImageFiles(e.target.files)}
        />
        {errors.images && (
          <p className="text-sm text-red-500 mt-1">{errors.images}</p>
        )}
        {imageFiles && imageFiles.length > 0 && (
          <div className="mt-2 text-sm text-gray-600">
            <p className="font-medium">Selected files:</p>
            <ul className="list-disc pl-5">
              {Array.from(imageFiles).map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Submit */}
      <Button
        onClick={handleSubmit}
        className="w-full bg-slate-900 text-white hover:bg-slate-700 cursor-pointer">
        Submit Campaign
      </Button>
    </form>
  );
};

export default CampaignForm;
