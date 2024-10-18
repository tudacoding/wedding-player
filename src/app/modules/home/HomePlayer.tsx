"use client";
import Image from "next/image";
import { useState, useCallback, useRef, useEffect } from "react";
import { FaPlay, FaPause, FaStepBackward, FaStepForward } from "react-icons/fa";
import { IoMdShuffle } from "react-icons/io";
import { IoRepeat } from "react-icons/io5";

const songs = [
  { id: 1, title: "Hẹn gặp em dưới ánh trăng", artist: "Hiền Hồ", file: "hengapemduoianhtrang.mp4" },
  { id: 2, title: "Ngày đầu tiên", artist: "Đức Phúc", file: "ngaydautien.mp4" },
  { id: 3, title: "Home", artist: "Michael Bublé", file: "home.mp4" },
  { id: 4, title: "Util I found you", artist: "Michael Bublé", file: "utilifoundyou.mp4" },
  { id: 5, title: "Yes I Do", artist: "98 Degrees", file: "yesido.mp4" },
  { id: 6, title: "A thousand years", artist: "98 Degrees", file: "athousandyears.mp4" },
  { id: 7, title: "Một nhà", artist: "98 Degrees", file: "motnha.mp4" },

];

const HomePlayer = () => {
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      const audio = audioRef.current;
      const handleLoadedMetadata = () => {
        setDuration(audio.duration);
      };
      const handleTimeUpdate = () => {
        setCurrentTime(audio.currentTime);
      };

      audio.addEventListener('loadedmetadata', handleLoadedMetadata);
      audio.addEventListener('timeupdate', handleTimeUpdate);

      return () => {
        audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
        audio.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }
  }, [currentSong]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.error("Error playing audio:", error);
        setIsPlaying(false);
      });
      setIsPlaying(true);
    }
  }, [currentSong]);

  const handlePlayPause = useCallback(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.error("Error playing audio:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);

  const handleNextSong = useCallback(() => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % songs.length;
    setCurrentSong(songs[nextIndex]);
  }, [currentSong]);

  const handlePrevSong = useCallback(() => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
    setCurrentSong(songs[prevIndex]);
  }, [currentSong]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="flex flex-col md:flex-row bg-primary text-white">
      {/* Left side: Song list and current song (40% on desktop, 100% on mobile) */}
      <div className="w-full md:w-2/5 p-4 md:p-20 flex flex-col justify-between items-center">
        <div className="overflow-y-auto text-center mb-8 w-full">
          <h2 className="text-xl md:text-2xl italic font-thin font-eb-garamond mb-4 md:mb-6">
            Tracklist
          </h2>
          <ul className="font-svn-snell text-2xl md:text-3xl">
            {songs.map((song) => (
              <li
                key={song.id}
                className={`mb-2 md:mb-4 cursor-pointer transition-all duration-300 hover:text-blue-300 ${
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
              className="absolute top-0 left-0 h-full bg-blue-300 rounded-full"
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
          <div className="flex items-center justify-center space-x-4 md:space-x-6">
            <button className="text-lg md:text-xl hover:text-blue-300 transition-colors duration-300">
              <IoMdShuffle />
            </button>
            <button
              className="text-lg md:text-xl hover:text-blue-300 transition-colors duration-300"
              onClick={handlePrevSong}
            >
              <FaStepBackward />
            </button>
            <button
              className="text-3xl md:text-4xl bg-white text-primary rounded-full p-3 md:p-4 hover:bg-white transition-colors duration-300"
              onClick={handlePlayPause}
            >
              {isPlaying ? <FaPause size={16} /> : <FaPlay size={16} />}
            </button>
            <button
              className="text-lg md:text-xl hover:text-blue-300 transition-colors duration-300"
              onClick={handleNextSong}
            >
              <FaStepForward />
            </button>
            <button className="text-lg md:text-xl hover:text-blue-300 transition-colors duration-300">
              <IoRepeat />
            </button>
          </div>
        </div>
      </div>

      {/* Right side: Album art and player controls (60% on desktop, 100% on mobile) */}
      <div className="w-full md:w-3/5 p-4 md:p-8 flex flex-col items-center justify-center">
        <div className="relative w-48 h-48 md:w-96 md:h-96 mb-4 md:mb-8">
          {/* Vinyl record image */}
          <Image
            src="/images/wedding/image-1.3.png"
            alt="Vinyl record"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={`rounded-full ${isPlaying ? "animate-spin" : ""}`}
            style={{ animationDuration: "4s" }}
          />
          {/* Album cover image */}
          <div className="absolute top-1/2 left-1/2 ml-14 md:ml-28 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-48 md:h-48">
            <Image
              src="/images/wedding/image-1.4.png"
              alt="Album cover"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="rounded-sm shadow-lg"
            />
          </div>
        </div>
      </div>
      <audio
        ref={audioRef}
        src={`/audio/${currentSong.file}`}
        onEnded={handleNextSong}
      />
    </div>
  );
};

export default HomePlayer;
