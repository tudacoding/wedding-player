"use client";

import React, { useState, useRef, useEffect } from 'react';
import Header from '@/app/components/Header';
import HomeSendMessage from '../modules/home/HomeSendMessage';

interface Wish {
  content: string;
  sender: string;
}

const WishesPage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogPosition, setDialogPosition] = useState({ x: 0, y: 0 });
  const [wishes, setWishes] = useState<Wish[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const openDialog = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;
      setDialogPosition({
        x: window.innerWidth / 2,
        y: rect.top + scrollY - 700
      });
    }
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (isDialogOpen && buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        const scrollY = window.scrollY || window.pageYOffset;
        setDialogPosition({
          x: window.innerWidth / 2,
          y: rect.top + scrollY
        });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isDialogOpen]);

  useEffect(() => {
    fetch('/api/wishes')
      .then(response => response.json())
      .then(data => setWishes(data))
      .catch(error => console.error('Error fetching wishes:', error));
  }, []);

  return (
    <>
      <Header />
      <div className="px-4 py-12 bg-gradient-to-br from-white to-blue-100 min-h-screen">
        <h1 className="text-5xl font-bold font-svn-snell mb-12 text-center text-blue-800 font-cursive animate-pulse">Lời chúc yêu thương</h1>
        <div className="flex flex-wrap justify-center gap-10">
          {wishes.map((wish, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-2 max-w-sm w-full backdrop-blur-sm bg-opacity-80 hover:scale-105"
              style={{
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                transform: `rotate(${Math.random() * 6 - 3}deg)`,
              }}
            >
              <div className="mb-6 h-1 w-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-auto"></div>
              <p className="text-gray-800 text-2xl font-handwriting leading-relaxed mb-6">
                &ldquo;{wish?.content}&rdquo;
              </p>
              <p className="text-blue-700 text-xl font-eb-garamond font-semibold mt-6 text-right">
                {wish?.sender}
              </p>
              <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mt-6 flex items-center justify-center animate-spin-slow">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <button
            ref={buttonRef}
            onClick={openDialog}
            className="text-blue-600 hover:underline uppercase text-sm"
          >
            Send your wishes →
          </button>
        </div>
      </div>

      {isDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div 
            className="bg-white rounded-lg shadow-xl w-full max-w-2xl"
            style={{
              position: 'absolute',
              left: `${dialogPosition.x}px`,
              top: `${dialogPosition.y}px`,
              transform: 'translate(-50%, 0)'
            }}
          >
            <div className="p-6">
              <button
                onClick={closeDialog}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <HomeSendMessage />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WishesPage;
