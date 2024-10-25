"use client";

import React, { useEffect, useState } from "react";
import { ImageGallery } from "react-image-grid-gallery";

interface CloudinaryResource {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
}

interface Image {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}

const GalleryPage = () => {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await fetch(`/api/get-images`);
      const data = await response.json();
      console.log(data);
      const formattedImages = data.resources.map(
        (resource: CloudinaryResource) => ({
          src: resource.secure_url,
          alt: resource.public_id,
          caption: resource.public_id,
          width: resource.width,
          height: resource.height,
        })
      );
      setImages(formattedImages);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold font-svn-snell text-center text-blue-800 mb-8">
          Our Wedding Gallery
        </h1>
        {images.length > 0 && (
          <ImageGallery
            imagesInfoArray={images}
            columnCount={"auto"}
            columnWidth={230}
            gapSize={24}
          />
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
