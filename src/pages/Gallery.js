import React from "react";
import PhotoCard from "../components/PhotoCard";
import { useGallery } from "../contexts/GalleryContext";

const Gallery = () => {
  const { photos } = useGallery();
  return (
    <div className="grid grid-cols-4 gap-5 px-8 py-10 lg:grid-cols-5">
      {photos.map((photo, index) => (
        <PhotoCard key={index} photo={photo} />
      ))}
    </div>
  );
};

export default Gallery;
