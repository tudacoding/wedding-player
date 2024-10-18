import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import HomeSendMessage from "../modules/home/HomeSendMessage";

const ContinueChapter = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogPosition, setDialogPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  const openDialog = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;
      setDialogPosition({
        x: window.innerWidth / 2,
        y: rect.top + scrollY - 400
      });
    }
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (isDialogOpen && buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        const scrollY = window.scrollY || window.pageYOffset;
        setDialogPosition({
          x: window.innerWidth / 2,
          y: rect.top + scrollY
        });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isDialogOpen]);

  return (
    <div className="bg-secondary p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <p className="text-primary font-svn-snell italic text-lg md:text-3xl text-center my-16">
          những hành động, sự việc đã diễn ra ở quá khứ,
          <br />
          vẫn tiếp tục ở hiện tại và tiếp diễn trong tương lai
        </p>

        <div className="relative">
          <Image
            src="/images/chapter-03/banner-1.3.png"
            alt="Couple in red outfits"
            width={800}
            height={600}
            layout="responsive"
            className="w-full"
          />
        </div>
        <div className="my-8 flex justify-between items-center">
          <Link
            href="/chapter-02"
            className="text-primary hover:underline uppercase text-sm"
          >
            ← Previous chapter
          </Link>
          <button
            ref={buttonRef}
            onClick={openDialog}
            className="text-primary hover:underline uppercase text-sm"
          >
            Send your wishes →
          </button>
        </div>
      </div>

      {isDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div 
            className="bg-white rounded-lg shadow-xl w-full max-w-2xl"
            style={{
              position: 'absolute',
              left: `${dialogPosition.x}px`,
              top: `${dialogPosition.y}px`,
              transform: 'translate(-50%, 0)'
            }}
          >
            <div className="p-6">
              <button
                onClick={closeDialog}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <HomeSendMessage />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContinueChapter;
