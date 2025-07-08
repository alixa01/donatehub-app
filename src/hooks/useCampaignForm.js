import { useState } from "react";

export function useCampaignForm(onSubmit) {
  const [values, setValues] = useState({
    title: "",
    shortDescription: "",
    detailDescription: "",
    goal: "",
    deadline: "",
    location: "",
    category: "",
  });

  const [imageFiles, setImageFiles] = useState(null);
  const [errors, setErrors] = useState({});

  // INPUT TEXT
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = {};

    // VALIDASI
    if (!values.title.trim()) newErrors.title = "Judul wajib diisi.";
    if (!values.shortDescription.trim())
      newErrors.shortDescription = "Deskripsi singkat wajib diisi.";
    if (!values.detailDescription.trim())
      newErrors.detailDescription = "Deskripsi detail wajib diisi.";
    if (!values.category) newErrors.category = "Kategori wajib dipilih.";
    if (!values.goal) newErrors.goal = "Target donasi wajib diisi.";
    else if (parseFloat(values.goal) <= 0)
      newErrors.goal = "Target harus lebih dari 0.";
    if (!values.deadline) newErrors.deadline = "Deadline wajib diisi.";
    if (!values.location.trim()) newErrors.location = "Lokasi wajib diisi.";
    if (!imageFiles || imageFiles.length === 0)
      newErrors.images = "Minimal 1 gambar wajib diunggah.";
    else if (imageFiles.length > 5) newErrors.images = "Maksimal 5 gambar.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});

    if (onSubmit) {
      await onSubmit({ ...values, imageFiles });
    }
  };

  return {
    values,
    imageFiles,
    errors,
    handleChange,
    setCategory: (value) => setValues((prev) => ({ ...prev, category: value })), // Setter khusus untuk Select
    setImageFiles,
    handleSubmit,
  };
}
