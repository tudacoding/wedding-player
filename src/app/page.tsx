"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

export default function WelcomePage() {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.body.style.cursor = 'wait';
    setTimeout(() => {
      router.push('/home');
    }, 300);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
      <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <Link href="/home" onClick={handleClick}>
          <div
            className="relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Image
              src="/images/logo-blue.png"
              alt="Logo"
              width={300}
              height={300}
              className={`cursor-pointer transition-all duration-500 ${
                isHovered ? "scale-110 brightness-110 rotate-3" : ""
              }`}
            />
            <div className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 rounded-full transition-all duration-300 ${
              isHovered ? "bg-opacity-40 scale-125" : ""
            }`}>
              <span className={`text-white text-3xl font-svn-snell opacity-0 transform translate-y-4 drop-shadow-2xl transition-all duration-300 ${
                isHovered ? "opacity-100 translate-y-0" : ""
              }`}>
                Enter Our Story
              </span>
            </div>
          </div>
        </Link>
      </div>
      <div className="absolute bottom-10 text-center">
        <p className="text-primary font-svn-snell text-4xl">Ouỳnh Phương & Tiến Thịnh</p>
        <p className="text-primary font-eb-garamond text-sm mt-2">17:00 - October 20th, 2024</p>
      </div>
    </div>
  );
}
