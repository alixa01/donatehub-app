import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../styles/gallery.css";

const CampaignMedia = ({ image, title }) => {
  const imageItems =
    Array.isArray(image) && image.length > 0
      ? image.map((imgUrl) => ({
          original: imgUrl,
          thumbnail: imgUrl,
          originalAlt: title,
          thumbnailAlt: title,
        }))
      : [];
  return (
    <div className="px-20 pb-4 w-full">
      <ImageGallery items={imageItems} showPlayButton={false} />
    </div>
  );
};

export default CampaignMedia;
