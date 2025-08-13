"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function GalleryImage() {
  const galleryRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const images = [
    { original: "/images/icon.png", thumbnail: "/images/icon.png" },
    { original: "/images/agent-item.jpg", thumbnail: "/images/agent-item.jpg" },
    { original: "/images/blog-grid-2.jpg", thumbnail: "/images/blog-grid-2.jpg" },
    { original: "/images/blog-grid-3.jpg", thumbnail: "/images/blog-grid-3.jpg" },
  ];

  const openGalleryAt = (index) => {
    setIsOpen(true);
    setTimeout(() => {
      if (galleryRef.current) {
        galleryRef.current.slideToIndex(index);
      }
    }, 50);
  };

  const handlePlayPause = () => {
    if (!galleryRef.current) return;
    
    if (isPlaying) {
      galleryRef.current.pause();
    } else {
      galleryRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleFullScreenToggle = () => {
    const galleryElement = document.querySelector('.image-gallery');
    if (!galleryElement) return;

    if (document.fullscreenElement || 
        document.webkitFullscreenElement || 
        document.mozFullScreenElement ||
        document.msFullscreenElement) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    } else {
      if (galleryElement.requestFullscreen) {
        galleryElement.requestFullscreen();
      } else if (galleryElement.webkitRequestFullscreen) {
        galleryElement.webkitRequestFullscreen();
      } else if (galleryElement.mozRequestFullScreen) {
        galleryElement.mozRequestFullScreen();
      } else if (galleryElement.msRequestFullscreen) {
        galleryElement.msRequestFullscreen();
      }
    }
    setIsFullScreen(!isFullScreen);
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullScreen(!!(document.fullscreenElement || 
                        document.webkitFullscreenElement || 
                        document.mozFullScreenElement ||
                        document.msFullscreenElement));
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  return (
    <div className="p-4">
      {/* Thumbnails */}
      <div className="grid grid-cols-2 gap-4">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img.thumbnail}
            alt={`Image ${index + 1}`}
            className="cursor-pointer rounded shadow-md hover:scale-105 transition-transform"
            onClick={() => openGalleryAt(index)}
            width={500}
            height={500}
          />
        ))}
      </div>

      {/* Fullscreen Gallery */}
      {isOpen && (
        <div className="fixed inset-0 bg-black z-50">
          <ImageGallery
            ref={galleryRef}
            items={images}
            showThumbnails={true}
            showNav={true}
            showPlayButton={false}
            showFullscreenButton={false}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            renderCustomControls={() => (
              <div className="absolute top-4 right-4 flex gap-3 text-white text-2xl z-50">
                <button
                  onClick={handlePlayPause}
                  className="hover:scale-110 transition-transform p-2 rounded-full bg-black/50"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? "⏸" : "▶"}
                </button>

                <button
                  onClick={handleFullScreenToggle}
                  className="hover:scale-110 transition-transform p-2 rounded-full bg-black/50"
                  aria-label={isFullScreen ? "Exit Fullscreen" : "Enter Fullscreen"}
                >
                  {isFullScreen ? "🗗" : "⛶"}
                </button>

                <button
                  onClick={() => {
                    if (isPlaying) galleryRef.current?.pause();
                    if (isFullScreen && document.exitFullscreen) {
                      document.exitFullscreen();
                    }
                    setIsOpen(false);
                    setIsPlaying(false);
                    setIsFullScreen(false);
                  }}
                  className="hover:scale-110 transition-transform p-2 rounded-full bg-black/50"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>
            )}
          />
        </div>
      )}
    </div>
  );
}
