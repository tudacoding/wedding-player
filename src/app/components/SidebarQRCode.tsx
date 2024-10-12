import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface SidebarQRCodeProps {
  isOpen: boolean;
  onClose: () => void;
}

const SidebarQRCode: React.FC<SidebarQRCodeProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-end"
          onClick={onClose}
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-full sm:w-96 h-full bg-primary text-white p-4 sm:p-8 z-50 overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white p-2 z-60"
              style={{ touchAction: "manipulation" }}
            >
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-col items-center pt-12"
            >
              <h2 className="font-eb-garamond text-sm italic mb-4 text-center">
                Mừng cưới đến cô dâu
              </h2>
              <div className="mb-6 sm:mb-8 flex flex-col items-center">
                <p className="font-svn-snell text-2xl sm:text-3xl mb-2 text-center">
                  Dương Quỳnh Phương
                </p>
                <Image
                  className="mt-4"
                  src="/images/qrcode/quynhphuong.png"
                  alt="QR Code for Dương Quỳnh Phương"
                  width={150}
                  height={150}
                  sizes="(max-width: 640px) 150px, 200px"
                />
              </div>
              <div className="mb-6 sm:mb-8 flex flex-col items-center">
                <h2 className="font-eb-garamond text-sm italic mb-4 text-center">
                  Mừng cưới đến chú rể
                </h2>
                <p className="font-svn-snell text-2xl sm:text-3xl mb-2 text-center">
                  Nguyễn Tiến Thịnh
                </p>
                <Image
                  className="mt-4"
                  src="/images/qrcode/tienthinh.JPG"
                  alt="QR Code for Nguyễn Tiến Thịnh"
                  width={150}
                  height={150}
                  sizes="(max-width: 640px) 150px, 200px"
                />
              </div>
              <p className="font-eb-garamond text-sm mt-4 text-center">
                We are truly grateful.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SidebarQRCode;
