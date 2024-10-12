import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import DownloadInvitation from "./DownloadInvitation";
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
  const contentRef = useRef<HTMLDivElement>(null);

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
        className={`bg-secondary p-4 sm:p-8 max-w-screen w-[95vw] sm:w-[80vw] h-[95vh] sm:h-[90vh] absolute shadow-lg transition-all duration-300 ${
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
          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-700 transition-colors duration-200"
        >
          <svg
            className="h-4 w-4 sm:h-6 sm:w-6"
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
        <div className="flex flex-col p-4 sm:p-24" ref={contentRef}>
          <div className="flex flex-col sm:flex-row">
            <div className="w-full sm:w-2/3 pr-0 sm:pr-4 mb-4 sm:mb-0">
              <h2 className="text-3xl sm:text-4xl font-svn-snell text-primary mb-4 sm:mb-6">
                to: Ouỳnh Phương & Tiến Thịnh
              </h2>
              <p className="text-primary mb-4 sm:mb-8 font-eb-garamond text-base sm:text-lg text-justify">
                {message}
              </p>
              <p className="text-3xl sm:text-4xl font-svn-snell text-primary mt-8 sm:mt-20">
                from: {sender}
              </p>
            </div>
            <div className="w-full sm:w-1/3 pl-0 sm:pl-4">
              <div className="relative">
                <Image
                  src="/images/wedding/image-1.8.png"
                  alt="Wedding couple"
                  width={250}
                  height={188}
                  className="w-full h-auto"
                />
                <div className="absolute -bottom-4 -right-4 sm:-bottom-10 sm:-right-10 p-1 sm:p-2">
                  <Image
                    src="/images/logo.svg"
                    alt="Logo"
                    width={30}
                    height={29}
                    className="w-auto h-auto sm:w-[50px] sm:h-[49px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="text-primary mt-4 sm:mt-8 font-manrope uppercase flex flex-col sm:flex-row justify-between text-xs sm:text-base">
            <div className="mb-2 sm:mb-0 text-center sm:text-left">
              Thank you for your love and support. We are truly grateful.{" "}
            </div>
            <DownloadInvitation name={sender} message={message} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupInvitation;
