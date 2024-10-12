import React, { useRef, useEffect } from 'react';
import html2canvas from 'html2canvas';

interface DownloadInvitationProps {
  name: string;
  message: string;
}

const DownloadInvitation: React.FC<DownloadInvitationProps> = ({ name, message }) => {
  const invitationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (invitationRef.current) {
      invitationRef.current.innerHTML = `
        <div style="background-color: #F5F5F5; padding: 2rem; max-width: 28rem; margin: 0 auto;">
          <h2 style="font-size: 1.875rem; font-family: 'SVN-Snell', sans-serif; color: #333333; margin-bottom: 1rem;">
            to: Ouỳnh Phương & Tiến Thịnh
          </h2>
          <p style="color: #333333; margin-bottom: 1rem; font-family: 'EB Garamond', serif; font-size: 1.125rem; text-align: justify;">
            ${message}
          </p>
          <p style="font-size: 1.875rem; font-family: 'SVN-Snell', sans-serif; color: #333333; margin-top: 2rem;">
            from: ${name}
          </p>
        </div>
      `;
    }
  }, [name, message]);

  const handleDownload = async () => {
    if (invitationRef.current) {
      try {
        const canvas = await html2canvas(invitationRef.current, {
          backgroundColor: '#F5F5F5',
          useCORS: true,
          scale: 2,
          onclone: (clonedDoc) => {
            const styles = clonedDoc.createElement('style');
            styles.innerHTML = `
              * {
                color: #333333 !important;
                background-color: #F5F5F5 !important;
              }
            `;
            clonedDoc.head.appendChild(styles);
          }
        });
        
        const dataUrl = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'invitation.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        console.error('Error generating invitation image:', error);
      }
    }
  };

  return (
    <>
      <div ref={invitationRef} style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}></div>
      <button
        onClick={handleDownload}
        className="mt-4 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors duration-200"
      >
        Download Photo
      </button>
    </>
  );
};

export default DownloadInvitation;
