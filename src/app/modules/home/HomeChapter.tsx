/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const ViewPhotoButton = () => {
  return (
    <p className="font-manrope text-sm text-primary mt-8 hover:opacity-80 cursor-pointer">{`VIEW PHOTO ->`}</p>
  );
};

const HomeChapter = () => {
  return (
    <div className="bg-secondary p-8 flex flex-col items-center pb-20">
      {/* Chapter 01 */}
      <div className="w-full max-w-4xl flex justify-between items-center mb-16 gap-8">
        <div className="w-1/2 pr-8 text-right">
          <h3 className="text-xl font-eb-garamond italic text-primary">
            Chapter 01
          </h3>
          <h1 className="text-6xl font-svn-snell text-primary mb-4">i sea u</h1>
          <p className="font-eb-garamond text-xl text-primary">
            tôi gửi tình yêu cho em qua từng con chữ, <br /> gửi tình yêu cho em
            qua những tiếng thầm thì,
            <br /> gửi tình yêu cho em qua vạn con sóng,
            <br />
            gửi cho em yêu thương nơi tôi
          </p>
          <ViewPhotoButton />
        </div>
        <div className="w-1/2">
          <h2 className="text-8xl font-svn-snell text-primary mb-2 text-right">
            01
          </h2>
          <Image
            className="w-full"
            src="/images/wedding/image-1.5.png"
            alt="Chapter 1"
            width={400}
            height={300}
            objectFit="cover"
          />
        </div>
      </div>

      {/* Chapter 02 */}
      <div className="w-full max-w-4xl flex justify-between items-center mb-16 gap-8">
        <div className="w-1/2">
          <h2 className="text-8xl font-svn-snell text-primary mb-2 text-left">
            02
          </h2>
          <Image
            className="w-full"
            src="/images/wedding/image-1.6.png"
            alt="Chapter 2"
            width={400}
            height={300}
            objectFit="cover"
          />
        </div>
        <div className="w-1/2 pl-8">
          <h3 className="text-xl font-eb-garamond italic text-primary">
            Chapter 02
          </h3>
          <h1 className="text-6xl font-svn-snell text-primary mb-4">
            Together
          </h1>
          <p className="font-eb-garamond text-xl text-primary">
            even though every day doesn't go as you wish
            <br /> and becomes blurry like smoke
            <br /> there are many paths in front of you
          </p>
          <ViewPhotoButton />
        </div>
      </div>

      {/* Chapter 03 */}
      <div className="w-full max-w-4xl flex justify-between items-center gap-8">
        <div className="w-1/2 pr-8 text-right">
          <h3 className="text-xl font-eb-garamond italic text-primary">
            Chapter 03
          </h3>
          <h1 className="text-6xl font-svn-snell text-primary mb-4">
            Present Perfect Continuous
          </h1>
          <p className="font-eb-garamond text-xl text-primary">
            những hành động, sự việc đã diễn ra ở quá khứ,
            <br /> nhưng vẫn tiếp tục ở hiện tại và tiếp diễn
            <br /> trong tương lai
          </p>
          <ViewPhotoButton />
        </div>
        <div className="w-1/2">
          <h2 className="text-8xl font-svn-snell text-primary mb-2 text-right">
            03
          </h2>
          <Image
            className="w-full"
            src="/images/wedding/image-1.7.png"
            alt="Chapter 3"
            width={400}
            height={300}
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeChapter;
