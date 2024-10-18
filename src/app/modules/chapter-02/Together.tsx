import Image from "next/image";
import { useState, useEffect } from "react";

const Together = () => {
  const [loadedImages, setLoadedImages] = useState<boolean[]>(
    new Array(5).fill(false)
  );
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const desktopImage = "/images/chapter-02/story.png";
  const mobileImages = [
    "/images/chapter-02/together-1.1.png",
    "/images/chapter-02/together-1.2.png",
    "/images/chapter-02/together-1.3.png",
    "/images/chapter-02/together-1.4.png",
  ];

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => {
      const newLoadedImages = [...prev];
      newLoadedImages[index] = true;
      return newLoadedImages;
    });
  };

  return (
    <div className="bg-secondary py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-svn-snell text-center text-primary mb-8">
        Together
      </h2>
      <div className="max-w-4xl mx-auto">
        {!isMobile ? (
          <div className="relative h-screen">
            <Image
              src={desktopImage}
              alt="Together story"
              fill
              sizes="100vw"
              style={{ objectFit: "contain" }}
              quality={100}
              onLoadingComplete={() => handleImageLoad(0)}
              className={`transition-opacity duration-300 ${
                loadedImages[0] ? "opacity-100" : "opacity-0"
              }`}
            />
            {!loadedImages[0] && (
              <div className="absolute inset-0 bg-secondary animate-pulse" />
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {mobileImages.map((src, index) => (
              <div key={index} className="relative aspect-square">
                <Image
                  src={src}
                  alt={`Together image ${index + 1}`}
                  fill
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                  quality={100}
                  onLoadingComplete={() => handleImageLoad(index + 1)}
                  className={`transition-opacity duration-300 ${
                    loadedImages[index + 1] ? "opacity-100" : "opacity-0"
                  }`}
                />
                {!loadedImages[index + 1] && (
                  <div className="absolute inset-0 bg-secondary animate-pulse" />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Together;
