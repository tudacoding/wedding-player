import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto flex flex-col items-center px-4">
        <Image
          src="/images/logo.png"
          alt="PT Logo"
          width={50}
          height={50}
          className="mb-4"
          style={{ width: '50px', height: 'auto' }}
        />
        <div className="flex flex-col items-center mb-6 sm:flex-row sm:justify-center">
          <p className="font-eb-garamond mb-4 sm:mb-0 sm:mr-4 text-center">designed by Phuong./.</p>
          <div className="flex items-center space-x-1 mb-4 sm:mb-0">
            <Image
              priority
              src="/images/footer/footer-1.png"
              alt="Couple 1"
              width={80}
              height={80}
              style={{ width: '80px', height: 'auto' }}
            />
            <Image
              priority
              src="/images/footer/footer-2.png"
              alt="Couple 2"
              width={80}
              height={80}
              style={{ width: '80px', height: 'auto' }}
            />
            <Image
              priority
              src="/images/footer/footer-3.png"
              alt="Couple 3"
              width={80}
              height={80}
              style={{ width: '80px', height: 'auto' }}
            />
          </div>
          <p className="font-eb-garamond sm:ml-4 text-center">developed by Thinh./.</p>
        </div>
        <p className="font-eb-garamond text-sm text-center">
          our day will be completed by you.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
