import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
const CampaignMedia = ({ image, title }) => {
  const imageItems = [
    {
      original: image,
      thumbnail: image,
      originalAlt: title,
      thumbnailAlt: title,
    },
  ];
  return (
    <div className="px-20 pb-4 w-full">
      <ImageGallery items={imageItems} originalHeight={25} originalWidth={25} />
    </div>
  );
};

export default CampaignMedia;
