import { useState } from "react";

export function useCampaignForm(onSubmit) {
  const [title, setTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [detailDescription, setDetailDescription] = useState("");
  const [goal, setGoal] = useState(0);
  const [deadline, setDeadline] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState(null);

  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newErrors = {};
    if (!title.trim()) newErrors.title = "Judul campaign wajib diisi.";
    if (!shortDescription.trim())
      newErrors.shortDescription = "Deskripsi singkat wajib diisi.";
    if (!detailDescription.trim())
      newErrors.detailDescription = "Deskripsi detail wajib diisi.";
    if (!category) newErrors.category = "Kategori wajib dipilih.";
    if (!goal) newErrors.goal = "Target donasi wajib diisi.";
    if (parseFloat(goal) <= 0)
      newErrors.goal = "Target donasi harus lebih dari 0.";
    if (!deadline.trim()) newErrors.deadline = "Deadline wajib diisi.";
    if (!location.trim()) newErrors.location = "Lokasi wajib diisi.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    const campaignData = {
      title,
      shortDescription,
      detailDescription,
      goal: parseFloat(goal) || 0,
      deadline,
      location,
      category,
      imageUrl,
    };
    if (onSubmit) {
      await onSubmit(campaignData);
    }
  };

  return {
    values: {
      title,
      shortDescription,
      detailDescription,
      goal,
      deadline,
      location,
      category,
      imageUrl,
    },
    setters: {
      setTitle,
      setShortDescription,
      setDetailDescription,
      setGoal,
      setDeadline,
      setLocation,
      setCategory,
      setImageUrl,
    },
    handleSubmit,
    errors,
  };
}
