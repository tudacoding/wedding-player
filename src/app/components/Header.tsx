"use client";
import Image from "next/image";
import { useState } from "react";
import SidebarQRCode from "@/app/components/SidebarQRCode";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-white">
      <div className="logo">
        <Image
          src="/images/logo.svg"
          alt="Logo"
          width={50}
          height={50}
        />
      </div>
      <div className="menu">
        <button onClick={toggleSidebar} className="text-primary">
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
      <SidebarQRCode
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </header>
  );
};

export default Header;
