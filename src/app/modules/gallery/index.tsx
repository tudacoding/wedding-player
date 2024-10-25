"use client";

import React from "react";
import { ImageGallery } from "react-image-grid-gallery";

const imageData = [
  { src: "/images/wedding/image-1.5.png", alt: "Wedding Image 1" },
  { src: "/images/wedding/image-1.6.png", alt: "Wedding Image 2" },
  // Add more images as needed
];

const GalleryPage = () => {
  const images = imageData.map((image) => ({
    src: image.src,
    alt: image.alt,
    caption: image.alt,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold font-svn-snell text-center text-blue-800 mb-8">
          Our Wedding Gallery
        </h1>
        <ImageGallery
          imagesInfoArray={images}
          columnCount={"auto"}
          columnWidth={230}
          gapSize={24}
        />
      </div>
    </div>
  );
};

export default GalleryPage;
