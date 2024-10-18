import Link from "next/link";

const Message = () => {
  return (
    <div className="bg-secondary py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-8">
          <p className="text-primary font-svn-snell text-3xl leading-relaxed">
            even though every day doesn&apos;t go as you wish<br />
            and becomes blurry like smoke<br />
            there are many paths in front of you
          </p>
        </div>
        <div className="mt-8 flex justify-between items-center">
          <Link href="/chapter-01" className="text-primary hover:underline uppercase text-sm">
            ← Previous chapter
          </Link>
          <Link href="/chapter-03" className="text-primary hover:underline uppercase text-sm">
            Next chapter →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Message;
