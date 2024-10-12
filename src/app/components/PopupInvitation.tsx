import React, { useEffect, useState } from "react";
import Image from "next/image";

interface PopupInvitationProps {
  sender: string;
  message: string;
  isOpen: boolean;
  onClose: () => void;
  position: { x: number; y: number };
}

const PopupInvitation: React.FC<PopupInvitationProps> = ({
  sender,
  message,
  isOpen,
  onClose,
  position,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 overflow-auto bg-black transition-opacity duration-300 ${
        isOpen ? "bg-opacity-50" : "bg-opacity-0"
      } flex items-center justify-center`}
    >
      <div
        className={`bg-secondary p-8 max-w-screen w-[80vw] h-[90vh] absolute shadow-lg transition-all duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        style={{
          aspectRatio: "4/3",
          left: "50%",
          top: `${position.y - 500}px`,
          transform: "translateX(-50%)",
          marginTop: "-20px",
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors duration-200"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex flex-col p-24">
          <div className="flex">
            <div className="w-2/3 pr-4">
              <h2 className="text-4xl font-svn-snell text-primary mb-6">
                to: Ouỳnh Phương & Tiến Thịnh
              </h2>
              <p className="text-primary mb-8 font-eb-garamond text-lg text-justify">
                {message}
              </p>
              <p className="text-4xl font-svn-snell text-primary mt-20">
                from: {sender}
              </p>
            </div>
            <div className="w-1/3 pl-4">
              <div className="relative">
                <Image
                  src="/images/wedding/image-1.8.png"
                  alt="Wedding couple"
                  width={250}
                  height={188}
                  className="w-full h-auto"
                />
                <div className="absolute -bottom-10 -right-10 p-2">
                  <Image
                    src="/images/logo.svg"
                    alt="Logo"
                    width={50}
                    height={49}
                    className="w-auto h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="text-primary mt-8 font-manrope uppercase flex justify-between">
            <div>
              Thank you for your love and support. We are truly grateful.{" "}
            </div>
            <div>Download photo</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupInvitation;
