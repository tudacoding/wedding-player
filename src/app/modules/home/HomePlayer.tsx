"use client";
import Image from "next/image";
import { useState, useCallback } from "react";
import { FaPlay, FaPause, FaStepBackward, FaStepForward } from "react-icons/fa";
import { IoMdShuffle } from "react-icons/io";
import { IoRepeat } from "react-icons/io5";

const songs = [
  { id: 1, title: "Love story", artist: "Taylor Swift" },
  { id: 2, title: "Together", artist: "Martin Garrix" },
  { id: 3, title: "Home", artist: "Michael Bublé" },
  { id: 4, title: "Until I found you", artist: "Stephen Sanchez" },
  { id: 5, title: "How deep is your love", artist: "Bee Gees" },
  { id: 6, title: "A thousand years", artist: "Christina Perri" },
  { id: 7, title: "All of me", artist: "John Legend" },
];

const HomePlayer = () => {
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(240); // Assuming 4 minutes duration

  const handlePlayPause = useCallback(() => {
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const handleNextSong = useCallback(() => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % songs.length;
    setCurrentSong(songs[nextIndex]);
    setCurrentTime(0);
  }, [currentSong]);

  const handlePrevSong = useCallback(() => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
    setCurrentSong(songs[prevIndex]);
    setCurrentTime(0);
  }, [currentSong]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="flex flex-col md:flex-row bg-primary text-white">
      {/* Left side: Song list and current song (40%) */}
      <div className="w-full md:w-2/5 p-20 flex flex-col justify-between items-center">
        <div className="overflow-y-auto text-center mb-8">
          <h2 className="text-2xl italic font-thin font-eb-garamond mb-6">
            Tracklist
          </h2>
          <ul className="font-svn-snell text-3xl">
            {songs.map((song) => (
              <li
                key={song.id}
                className={`mb-4 cursor-pointer transition-all duration-300 hover:text-yellow-300 ${
                  currentSong.id === song.id
                    ? "text-white-300 underline underline-offset-4"
                    : ""
                }`}
                onClick={() => setCurrentSong(song)}
              >
                {song.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full max-w-md text-center justify-center">
          <div className="relative w-full h-1 bg-white/30 rounded-full mb-4">
            <div
              className="absolute top-0 left-0 h-full bg-yellow-300 rounded-full"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            ></div>
            <div
              className="absolute top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full"
              style={{ left: `${(currentTime / duration) * 100}%` }}
            ></div>
          </div>

          {/* Time display */}
          <div className="flex justify-between text-xs mb-4">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>

          {/* Control buttons */}
          <div className="flex items-center justify-center space-x-6">
            <button className="text-xl hover:text-yellow-300 transition-colors duration-300">
              <IoMdShuffle />
            </button>
            <button
              className="text-xl hover:text-yellow-300 transition-colors duration-300"
              onClick={handlePrevSong}
            >
              <FaStepBackward />
            </button>
            <button
              className="text-4xl bg-white text-primary rounded-full p-4 hover:bg-white transition-colors duration-300"
              onClick={handlePlayPause}
            >
              {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
            </button>
            <button
              className="text-xl hover:text-yellow-300 transition-colors duration-300"
              onClick={handleNextSong}
            >
              <FaStepForward />
            </button>
            <button className="text-xl hover:text-yellow-300 transition-colors duration-300">
              <IoRepeat />
            </button>
          </div>
        </div>
      </div>

      {/* Right side: Album art and player controls (60%) */}
      <div className="w-full md:w-3/5 p-8 flex flex-col items-center justify-center">
        <div className="relative w-64 h-64 md:w-96 md:h-96 mb-8">
          {/* Vinyl record image */}
          <Image
            src="/images/wedding/image-1.3.png"
            alt="Vinyl record"
            layout="fill"
            objectFit="contain"
            className={`rounded-full ${isPlaying ? "animate-spin" : ""}`}
            style={{ animationDuration: "4s" }}
          />
          {/* Album cover image */}
          <div className="absolute top-1/2 left-1/2 ml-20 md:ml-28 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48">
            <Image
              src="/images/wedding/image-1.4.png"
              alt="Album cover"
              layout="fill"
              objectFit="cover"
              className="rounded-sm shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePlayer;
