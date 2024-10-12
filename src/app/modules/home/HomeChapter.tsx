/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const ViewPhotoButton = () => {
  return (
    <p className="font-manrope text-sm text-primary mt-8 hover:opacity-80 cursor-pointer">{`VIEW PHOTO ->`}</p>
  );
};

const HomeChapter = () => {
  return (
    <div className="bg-secondary p-4 md:p-8 flex flex-col items-center pb-10 md:pb-20">
      {/* Chapter 01 */}
      <div className="w-full max-w-4xl flex flex-col md:flex-row justify-between items-center mb-8 md:mb-16 gap-4 md:gap-8">
        <div className="w-full md:w-1/2 md:pr-8 text-center md:text-right order-2 md:order-1">
          <h3 className="text-lg md:text-xl font-eb-garamond italic text-primary">
            Chapter 01
          </h3>
          <h1 className="text-4xl md:text-6xl font-svn-snell text-primary mb-2 md:mb-4">i sea u</h1>
          <p className="font-eb-garamond text-base md:text-xl text-primary">
            tôi gửi tình yêu cho em qua từng con chữ, <br /> gửi tình yêu cho em
            qua những tiếng thầm thì,
            <br /> gửi tình yêu cho em qua vạn con sóng,
            <br />
            gửi cho em yêu thương nơi tôi
          </p>
          <ViewPhotoButton />
        </div>
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <h2 className="text-6xl md:text-8xl font-svn-snell text-primary mb-2 text-center md:text-right">
            01
          </h2>
          <Image
            priority
            className="w-full"
            src="/images/wedding/image-1.5.png"
            alt="Chapter 1"
            width={400}
            height={300}
            quality={100}
          />
        </div>
      </div>

      {/* Chapter 02 */}
      <div className="w-full max-w-4xl flex flex-col md:flex-row justify-between items-center mb-8 md:mb-16 gap-4 md:gap-8">
        <div className="w-full md:w-1/2 order-1">
          <h2 className="text-6xl md:text-8xl font-svn-snell text-primary mb-2 text-center md:text-left">
            02
          </h2>
          <Image
            className="w-full"
            src="/images/wedding/image-1.6.png"
            alt="Chapter 2"
            width={400}
            height={300}
            quality={100}
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-8 text-center md:text-left order-2">
          <h3 className="text-lg md:text-xl font-eb-garamond italic text-primary">
            Chapter 02
          </h3>
          <h1 className="text-4xl md:text-6xl font-svn-snell text-primary mb-2 md:mb-4">
            Together
          </h1>
          <p className="font-eb-garamond text-base md:text-xl text-primary">
            even though every day doesn't go as you wish
            <br /> and becomes blurry like smoke
            <br /> there are many paths in front of you
          </p>
          <ViewPhotoButton />
        </div>
      </div>

      {/* Chapter 03 */}
      <div className="w-full max-w-4xl flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
        <div className="w-full md:w-1/2 md:pr-8 text-center md:text-right order-2 md:order-1">
          <h3 className="text-lg md:text-xl font-eb-garamond italic text-primary">
            Chapter 03
          </h3>
          <h1 className="text-4xl md:text-6xl font-svn-snell text-primary mb-2 md:mb-4">
            Present Perfect Continuous
          </h1>
          <p className="font-eb-garamond text-base md:text-xl text-primary">
            những hành động, sự việc đã diễn ra ở quá khứ,
            <br /> nhưng vẫn tiếp tục ở hiện tại và tiếp diễn
            <br /> trong tương lai
          </p>
          <ViewPhotoButton />
        </div>
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <h2 className="text-6xl md:text-8xl font-svn-snell text-primary mb-2 text-center md:text-right">
            03
          </h2>
          <Image
            className="w-full"
            src="/images/wedding/image-1.7.png"
            alt="Chapter 3"
            width={400}
            height={300}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeChapter;
