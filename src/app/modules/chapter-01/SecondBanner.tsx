import Image from "next/image";
import { useState, useEffect } from "react";

const SecondBanner = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust this breakpoint as needed
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-secondary">
      <div className="relative w-full h-full max-w-4xl max-h-[80vh] mx-auto">
        <Image
          src={isMobile ? "/images/chapter-01/1.2-mobile.png" : "/images/chapter-01/1.2.png"}
          alt="Chapter 1 Second Banner"
          layout="fill"
          objectFit="contain"
          quality={100}
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
    </div>
  );
};

export default SecondBanner;
