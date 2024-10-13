"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { motion } from "framer-motion";

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-100 px-4 py-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.95 }}
        transition={{ duration: 1 }}
      >
        <Link href="/home" onClick={handleClick}>
          <motion.div
            className="relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={300}
              height={300}
              quality={100}
              className="cursor-pointer w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80"
            />
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 rounded-full"
              animate={{
                backgroundColor: isHovered ? "rgba(0, 0, 0, 0.4)" : "rgba(0, 0, 0, 0)",
                scale: isHovered ? 1.1 : 1
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.span
                className="text-white text-xl sm:text-2xl md:text-3xl font-svn-snell drop-shadow-2xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
                transition={{ duration: 0.3 }}
              >
                Enter Our Story
              </motion.span>
            </motion.div>
          </motion.div>
        </Link>
      </motion.div>
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <p className="text-primary font-eb-garamond text-xl mb-4">
          Chạm vào biểu tượng trên <br/> để khám phá câu chuyện của chúng tôi
        </p>
        <div className="flex justify-center items-center my-4">
          <div className="w-16 h-px bg-primary mx-2"></div>
          <div className="w-2 h-2 rounded-full bg-primary"></div>
          <div className="w-16 h-px bg-primary mx-2"></div>
        </div>
        <p className="text-primary font-svn-snell text-2xl sm:text-3xl md:text-4xl">Quỳnh Phương & Tiến Thịnh</p>
        <p className="text-primary font-eb-garamond text-xl mt-2">17:00 - October 20th, 2024</p>
      </motion.div>
    </div>
  );
}
