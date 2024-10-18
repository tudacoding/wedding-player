"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = ["/images/wedding/image-1.5.png", "/images/wedding/image-1.6.png"];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsTransitioning(false);
    }, 500);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden group">
      <Image
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
        src={images[currentIndex]}
        alt="Sliding image"
        fill
        sizes="100vw"
        quality={100}
        priority
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-3 transition-all duration-300 opacity-0 group-hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Previous image"
      >
        <FaChevronLeft className="text-white" size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-3 transition-all duration-300 opacity-0 group-hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Next image"
      >
        <FaChevronRight className="text-white" size={24} />
      </button>
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white scale-125"
                : "bg-white bg-opacity-50 hover:bg-opacity-75"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
