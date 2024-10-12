import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <Image
          src="/images/logo.png"
          alt="PT Logo"
          width={50}
          height={50}
          className="mb-4"
        />
        <div className="flex space-x-4 mb-4">
          <Image
            src="/couple1.jpg"
            alt="Couple 1"
            width={100}
            height={100}
            className="rounded-full"
          />
          <Image
            src="/couple2.jpg"
            alt="Couple 2"
            width={100}
            height={100}
            className="rounded-full"
          />
          <Image
            src="/couple3.jpg"
            alt="Couple 3"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>
        <p className="text-sm mb-4">we do not sell or redistribute by you</p>
      </div>
    </footer>
  );
};

export default Footer;
