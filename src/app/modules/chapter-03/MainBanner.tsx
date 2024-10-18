import Image from 'next/image';

const MainBanner = () => {
  return (
    <div className="bg-secondary p-4 md:p-8">
      <h1 className="text-center font-svn-snell text-3xl md:text-4xl my-16 text-primary">
        Present Perfect Continuous
      </h1>
      <div className="max-w-6xl mx-auto">
        {/* Desktop version */}
        <div className="hidden md:block">
          <Image
            src="/images/chapter-03/banner-1.2.png"
            alt="Present Perfect Continuous"
            width={1200}
            height={800}
            layout="responsive"
            className="w-full"
          />
        </div>

        {/* Mobile version */}
        <div className="md:hidden space-y-4">
          <Image
            src="/images/chapter-03/mobile-1.1.png"
            alt="Present Perfect Continuous 1"
            width={400}
            height={300}
            layout="responsive"
            className="w-full"
          />
          <Image
            src="/images/chapter-03/mobile-1.2.png"
            alt="Present Perfect Continuous 2"
            width={400}
            height={300}
            layout="responsive"
            className="w-full"
          />
          <Image
            src="/images/chapter-03/mobile-1.3.png"
            alt="Present Perfect Continuous 3"
            width={400}
            height={300}
            layout="responsive"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
