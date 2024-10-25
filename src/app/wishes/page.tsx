import React from 'react';
import Header from '@/app/components/Header';
import fs from 'fs';
import path from 'path';

const WishesPage = () => {
  const wishesContent = fs.readFileSync(path.join(process.cwd(), 'src', 'app', 'modules', 'wishes', 'listwishes.txt'), 'utf8');
  const wishes = wishesContent.split('-').map(wish => {
    const lines = wish.trim().split('\n');
    if (lines.length >= 2) {
      const nameLine = lines[0];
      const wishLine = lines.slice(1).join('\n');
      return {
        sender: nameLine.replace('Name: ', '').trim(),
        content: wishLine.replace('Wishes: ', '').trim()
      };
    }
    return null;
  }).filter(wish => wish !== null && wish.sender && wish.content);

  return (
    <>
      <Header />
      <div className="px-4 py-12 bg-gradient-to-br from-blue-100 via-pink-100 to-primary min-h-screen">
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
              <div className="mb-6 h-1 w-16 bg-gradient-to-r from-primary to-blue-400 rounded-full mx-auto"></div>
              <p className="text-gray-800 text-2xl font-handwriting leading-relaxed mb-6">&ldquo;{wish?.content}&rdquo;</p>
              <p className="text-blue-700 text-xl font-eb-garamond font-semibold mt-6 text-right">- {wish?.sender}</p>
              <div className="w-6 h-6 bg-gradient-to-br from-primary to-blue-400 rounded-full mx-auto mt-6 flex items-center justify-center animate-spin-slow">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WishesPage;
