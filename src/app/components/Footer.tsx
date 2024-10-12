import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <Image
          src="/images/logo.png"
          alt="PT Logo"
          width={50}
          height={50}
          className="mb-4"
        />
        <div className="flex items-center mb-6">
          <p className="font-eb-garamond mb-4 mr-4">designed by Phuong./.</p>
          <div className="flex items-center space-x-1">
            <Image
              src="/images/footer/footer-1.png"
              alt="Couple 1"
              width={120}
              height={120}
            />
            <Image
              src="/images/footer/footer-2.png"
              alt="Couple 2"
              width={120}
              height={120}
            />
            <Image
              src="/images/footer/footer-3.png"
              alt="Couple 3"
              width={120}
              height={120}
            />
          </div>

          <p className="font-eb-garamond mb-4 ml-4">developed by Thinh./.</p>
        </div>
        <p className="font-eb-garamond text-sm">
          our day will be completed by you.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
