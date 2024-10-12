"use client";

import React, { useState } from "react";
import Image from "next/image";

const HomeSendMessage = () => {
  const [name, setName] = useState("");
  const [wishes, setWishes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() === "" || wishes.trim() === "") {
      alert("Please fill in all fields");
      return;
    }
    // Here you would typically send the data to a server
    console.log("Sending message:", { name, wishes });
    // Reset form after submission
    setName("");
    setWishes("");
  };

  return (
    <div className="bg-secondary py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-secondary overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 relative">
              <Image
                src="/images/wedding/image-1.8.png"
                alt="Wedding couple"
                width={500}
                height={500}
                className="w-full h-auto"
                quality={100}
              />
            </div>
            
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-sm font-manrope text-primary uppercase mb-10">
                WORDS OF LOVE
              </h2>
              <p className="text-xl text-primary font-svn-snell text-center">
                Your presence is the greatest gift we could ask for
              </p>
              <h3 className="text-5xl font-svn-snell text-primary mb-10 text-center">
                Sending us your wishes
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="your name"
                    className="w-full px-0 py-2 border-b border-gray-300 focus:outline-none focus:border-primary transition duration-300 font-eb-garamond text-gray-700 bg-secondary italic"
                    required
                  />
                </div>
                <div>
                  <textarea
                    id="wishes"
                    value={wishes}
                    onChange={(e) => setWishes(e.target.value)}
                    rows={2}
                    placeholder="your wishes to us"
                    className="w-full px-0 py-2 border-b border-gray-300 focus:outline-none focus:border-primary transition duration-300 font-eb-garamond text-gray-700 resize-none bg-secondary italic"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white font-manrope py-3 px-6 uppercase hover:bg-primary-dark transition duration-300"
                >
                  Send →
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSendMessage;
