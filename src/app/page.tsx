import HomeHero from "@/app/modules/home/HomeHero";

export default function Home() {
  return (
    <div>
      <HomeHero />
      <h1 className="text-4xl font-svn-snell font-bold">
        Xin chào từ SVN-Snell Bold!
      </h1>
      <p className="text-lg font-eb-garamond">
        Đây là văn bản sử dụng EB Garamond.
      </p>
      <p className="text-base font-manrope">
        Và đây là văn bản sử dụng Manrope.
      </p>
    </div>
  );
}
