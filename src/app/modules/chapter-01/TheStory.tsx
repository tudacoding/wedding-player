import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
const TheStory = () => {
  const [loadedImages, setLoadedImages] = useState<boolean[]>(new Array(6).fill(false));
  const [leafLoaded, setLeafLoaded] = useState(false);

  const images = [
    "/images/chapter-01/story-1.1.png",
    "/images/chapter-01/story-1.2.png",
    "/images/chapter-01/story-1.3.png",
    "/images/chapter-01/story-1.4.png",
    "/images/chapter-01/story-1.5.png",
    "/images/chapter-01/story-1.6.png",
  ];

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => {
      const newLoadedImages = [...prev];
      newLoadedImages[index] = true;
      return newLoadedImages;
    });
  };

  return (
    <div className="bg-secondary py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-24 h-auto">
        <Image
          src="/images/chapter-01/theleaf.png"
          alt="Decorative leaf"
          width={96}
          height={96}
          quality={100}
          onLoadingComplete={() => setLeafLoaded(true)}
          className={`transition-opacity duration-300 ${
            leafLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
        {!leafLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
      </div>
      <h2 className="text-3xl font-svn-snell text-center text-primary mb-8">
        The Story
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {images.map((src, index) => (
          <div key={index} className="relative aspect-square" style={{ width: '100%' }}>
            <Image
              src={src}
              alt={`Story image ${index + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
              quality={100}
              onLoadingComplete={() => handleImageLoad(index)}
              className={`transition-opacity duration-300 ${
                loadedImages[index] ? "opacity-100" : "opacity-0"
              }`}
            />
            {!loadedImages[index] && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse" />
            )}
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <p className="text-primary font-svn-snell text-xl md:text-2xl lg:text-3xl leading-relaxed">
          tôi gửi tình yêu cho em qua từng con chữ,<br />
          gửi tình yêu cho em qua những tiếng thầm thì,<br />
          gửi tình yêu cho em qua vạn con sóng,<br />
          gửi cho em yêu thương nơi tôi
        </p>
        <div className="mt-16">
          <Link href="/chapter-02" className="text-primary font-manrope text-sm sm:text-sm hover:underline">
            NEXT CHAPTER →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TheStory;
