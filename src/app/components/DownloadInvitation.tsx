import React, { useRef, useEffect } from "react";
import html2canvas from "html2canvas";

interface DownloadInvitationProps {
  name: string;
  message: string;
}

const DownloadInvitation: React.FC<DownloadInvitationProps> = ({
  name,
  message,
}) => {
  const invitationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (invitationRef.current) {
      invitationRef.current.innerHTML = `
        <div style="background-color: #f5f5f5; padding: 3rem; max-width: 32rem; margin: 0 auto; border: 2px solid #d4af37; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <div style="text-align: center; margin-bottom: 2rem;">
            <img src="/images/logo.svg" alt="logo" style="width: 60px; height: 59px;" />
          </div>
          <h2 style="text-transform: lowercase; font-size: 2.25rem; font-family: 'svn-snell', cursive; color: #205CA4; margin-bottom: 2.5rem; text-align: center;">
            to: quỳnh phương & tiến thịnh
          </h2>
          <p style="text-transform: lowercase; color: #205CA4; margin-bottom: 1.5rem; font-family: 'eb garamond', serif; font-size: 1.25rem; text-align: justify; line-height: 1.6;">
            ${message}
          </p>
          <p style="text-transform: lowercase; font-size: 2.25rem; font-family: 'svn-snell', cursive; color: #205CA4; margin-top: 1.5rem; text-align: center;">
            from: ${name}
          </p>
          <div style="text-align: center; margin-top: 4rem;">
            <img src="/images/wedding/image-1.1.png" alt="wedding couple" style="max-width: 100%; height: auto; border-radius: 8px;" />
          </div>
        </div>
      `;
    }
  }, [name, message]);

  const handleDownload = async () => {
    if (invitationRef.current) {
      try {
        const canvas = await html2canvas(invitationRef.current, {
          backgroundColor: "#F5F5F5",
          useCORS: true,
          scale: 2,
          onclone: (clonedDoc) => {
            const styles = clonedDoc.createElement("style");
            styles.innerHTML = `
              @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,700;1,400;1,700&display=swap');
              * {
                color: #205CA4 !important;
                background-color: #F5F5F5 !important;
              }
            `;
            clonedDoc.head.appendChild(styles);
          },
        });

        const dataUrl = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "wedding_invitation.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        console.error("Error generating invitation image:", error);
      }
    }
  };

  return (
    <>
      <div
        ref={invitationRef}
        style={{ position: "absolute", left: "-9999px", top: "-9999px" }}
      ></div>
      <button
        onClick={handleDownload}
        className="bg-primary text-white px-6 py-2 rounded-full transition-all duration-300 font-manrope text-sm tracking-wider hover:bg-primary-dark hover:shadow-lg hover:scale-105 hover:text-secondary"
      >
        DOWNLOAD LETTER
      </button>
    </>
  );
};

export default DownloadInvitation;
