"use client";
import Header from "@/app/components/Header";
import HeroBanner from "@/app/modules/chapter-01/HeroBanner";
import SecondBanner from "@/app/modules/chapter-01/SecondBanner";
import HomeInvitation from "../modules/home/HomeInvitation";
import TheStory from "../modules/chapter-01/TheStory";

const Chapter01 = () => {
  return (
    <div>
      <Header />
      <HeroBanner src="/images/chapter-01/1.1.png" alt="Chapter 1 Banner" />
      <SecondBanner />
      <HomeInvitation/>
      <TheStory/>
    </div>
  );
};

export default Chapter01;
