// components/FullscreenButton.tsx
import React, { useRef } from 'react';

const FullscreenButton: React.FC = () => {
  const isFullscreenRef = useRef(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }

    isFullscreenRef.current = !isFullscreenRef.current;
  };

  return (
    <button
      onClick={toggleFullscreen}
      className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded"
    >
      {isFullscreenRef.current ? 'Exit Fullscreen' : 'Fullscreen'}
    </button>
  );
};

export default FullscreenButton;
