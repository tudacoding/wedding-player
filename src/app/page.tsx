import HomeHero from "@/app/modules/home/HomeHero";
import HomePlayer from "@/app/modules/home/HomePlayer";
import HomeChapter from "@/app/modules/home/HomeChapter";
export default function Home() {
  return (
    <div>
      <HomeHero />
      <HomePlayer />
      <HomeChapter />
      {/* <h1 className="text-4xl font-svn-snell font-bold">
        Xin chào từ SVN-Snell Bold!
      </h1>
      <p className="text-lg font-eb-garamond">
        Đây là văn bản sử dụng EB Garamond.
      </p>
      <p className="text-base font-manrope">
        Và đây là văn bản sử dụng Manrope.
      </p> */}
    </div>
  );
}
