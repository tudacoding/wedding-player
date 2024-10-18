"use client";
import Header from "@/app/components/Header";
import HeroBanner from "@/app/modules/chapter-01/HeroBanner";
import MainBanner from "@/app/modules/chapter-03/MainBanner";
import ContinueChapter from "./ContinueChapter";
const Chapter02 = () => {
  return (
    <div>
      <Header />
      <HeroBanner src="/images/chapter-03/banner.png" alt="Chapter 2 Banner" />
      <MainBanner />
      <ContinueChapter/>
    </div>
  );
};

export default Chapter02;
