"use client";

import { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause, FaStepForward, FaStepBackward } from "react-icons/fa";
import Image from "next/image";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const updateTime = () => setCurrentTime(audio.currentTime);
      const updateDuration = () => {
        if (audio.duration && !isNaN(audio.duration)) {
          setDuration(audio.duration);
        }
      };

      audio.addEventListener("timeupdate", updateTime);
      audio.addEventListener("loadedmetadata", updateDuration);
      audio.addEventListener("durationchange", updateDuration);

      return () => {
        audio.removeEventListener("timeupdate", updateTime);
        audio.removeEventListener("loadedmetadata", updateDuration);
        audio.removeEventListener("durationchange", updateDuration);
      };
    }
  }, []);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        event.preventDefault();
        togglePlay();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      setIsPlaying(!isPlaying);
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  };

  const handleBackward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime -= 10;
    }
  };

  const handleForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime += 10;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 text-white p-6 rounded-xl shadow-2xl">
      <div className="flex items-center space-x-4 mb-6">
        <div className="relative w-20 h-20 rounded-lg shadow-md overflow-hidden">
          <Image
            src="/images/1R6A2920.JPG"
            alt="Album cover"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div>
          <h3 className="text-2xl font-bold">Em dạo này</h3>
          <p className="text-lg text-gray-200">Quỳnh Phương</p>
        </div>
      </div>
      <div className="mb-6">
        <div className="w-full bg-white/20 rounded-full h-2 mb-2">
          <div
            className="bg-white h-2 rounded-full"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-sm">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
      <div className="flex justify-center items-center space-x-8">
        <button
          onClick={handleBackward}
          className="text-white/80 hover:text-white transition-colors"
        >
          <FaStepBackward size={24} />
        </button>
        <button
          onClick={togglePlay}
          className="bg-white text-purple-600 rounded-full p-4 hover:bg-opacity-90 transition-all transform hover:scale-105"
        >
          {isPlaying ? (
            <FaPause size={24} />
          ) : (
            <FaPlay size={24} className="ml-1" />
          )}
        </button>
        <button
          onClick={handleForward}
          className="text-white/80 hover:text-white transition-colors"
        >
          <FaStepForward size={24} />
        </button>
      </div>
      <audio ref={audioRef} src="/audio/emdaonay.mp3" />
    </div>
  );
}
