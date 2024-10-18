import Image from "next/image";
import { useState } from "react";

interface HeroBannerProps {
  src: string;
  alt: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ src, alt }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        quality={80}
        priority
        onLoadingComplete={() => setIsLoading(false)}
        className={`transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      />
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
    </div>
  );
};

export default HeroBanner;

