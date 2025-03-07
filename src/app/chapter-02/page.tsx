"use client";
import Header from "@/app/components/Header";
import HeroBanner from "@/app/modules/chapter-01/HeroBanner";
import Together from "../modules/chapter-02/Together";
import Message from "../modules/chapter-02/Message";
const Chapter02 = () => {
  return (
    <div>
      <Header />
      <HeroBanner src="/images/chapter-02/banner.png" alt="Chapter 2 Banner" />
      <Together />
      <HeroBanner src="/images/chapter-02/final.png" alt="final 2 banner" />
      <Message />
    </div>
  );
};

export default Chapter02;
