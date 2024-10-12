/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const HomeHero = () => {
  return (
    <div className="flex h-screen p-1 bg-primary gap-1">
      <div className="w-[7%] relative h-full">
        <Image
          src="/images/wedding/image-1.2.png"
          alt="Wedding couple"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="w-[33%] relative">
        <Image
          src="/images/wedding/image-1.1.png"
          alt="Wedding invitation"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="w-[60%] relative bg-white">
        <div className="absolute top-4 left-4">
          <Image
            src="/images/logo-blue.png"
            alt="Logo"
            width={100}
            height={100}
          />
        </div>
        <div className="absolute top-4 right-4 text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div className="flex flex-col justify-center items-center text-primary h-full p-8 ">
          <div className="font-eb-garamond">The Preface</div>
          <div className="text-5xl font-svn-snell text-center">
            <p className="mb-2">When things are hard and you're tired</p>
            <p className="mb-2 ">I'll shine on you</p>
            <p className="mb-2 ">Smile brightly</p>
            <p>So we can be strength of each other</p>

            <div className="mt-20">
              <div className="font-manrope text-xs mb-4">SAVE THE DATE</div>
              <div className="flex justify-between font-eb-garamond text-lg ">
                <div>OCTOBER 20</div>
                <div>-</div>
                <div>CUNG VAN HOA HUU NGHI VIET - XO</div>
                <div>-</div>
                <div>17:00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
