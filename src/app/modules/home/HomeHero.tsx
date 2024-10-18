"use client";
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { useState } from "react";
import SidebarQRCode from "@/app/components/SidebarQRCode";

const HomeHero = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen md:p-1 bg-primary md:gap-1">
      <div className="hidden md:block md:w-[7%] relative h-full">
        <Image
          src="/images/wedding/image-1.2.png"
          alt="Wedding couple"
          fill
          sizes="(max-width: 768px) 0vw, 7vw"
          style={{ objectFit: "cover" }}
          quality={100}
        />
      </div>
      <div className="hidden md:block w-full md:w-[33%] relative h-1/3 md:h-full">
        <Image
          priority
          src="/images/wedding/cd-cr.gif"
          alt="Wedding invitation"
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          style={{ objectFit: "cover" }}
          quality={100}
        />
      </div>
      <div className="w-full md:w-[60%] relative bg-white h-2/3 md:h-full">
        <div className="absolute top-4 left-4">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={50}
            height={50}
            className="md:w-[100px] md:h-[100px]"
          />
        </div>
        <div className="absolute top-4 right-4 text-primary">
          <button onClick={toggleSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col justify-center items-center text-primary mt-8 md:mt-0 h-full p-4 md:p-8">
          <div className="font-eb-garamond text-sm md:text-base">
            The Preface
          </div>
          <div className="text-3xl md:text-5xl font-svn-snell text-center">
            <p className="mb-2">When things are hard and you're tired</p>
            <p className="mb-2">I'll shine on you</p>
            <p className="mb-2">Smile brightly</p>
            <p>So we can be strength of each other</p>

            <div className="mt-10 md:mt-20">
              <div className="font-manrope text-xs mb-2 md:mb-4">
                SAVE THE DATE
              </div>
              <div className="flex flex-col md:flex-row justify-between font-eb-garamond text-sm md:text-lg">
                <div>OCTOBER 20</div>
                <div className="hidden md:block">-</div>
                <div className="text-center my-2 md:my-0">
                  CUNG VAN HOA HUU NGHI VIET - XO
                </div>
                <div className="hidden md:block">-</div>
                <div>17:30</div>
              </div>
            </div>
          </div>
        </div>
        <div className="block md:hidden w-full md:w-[33%] relative h-1/2 md:h-full">
          <Image
            priority
            src="/images/wedding/cd-cr.gif"
            alt="Wedding invitation"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{ objectFit: "cover" }}
            quality={100}
          />
        </div>
      </div>
      <SidebarQRCode
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </div>
  );
};

export default HomeHero;
