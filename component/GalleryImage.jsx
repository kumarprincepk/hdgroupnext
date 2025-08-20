"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const PlayIcon = () => <span aria-hidden="true">▶</span>;
const PauseIcon = () => <span aria-hidden="true">⏸</span>;
const FullscreenIcon = () => <span aria-hidden="true">⛶</span>;
const ExitFullscreenIcon = () => <span aria-hidden="true">⛶</span>;
const CloseIcon = () => <span aria-hidden="true">×</span>;
const PrevIcon = () => <span aria-hidden="true">◀</span>;
const NextIcon = () => <span aria-hidden="true">▶</span>;

export default function GalleryImage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const galleryRef = useRef(null);
  const intervalRef = useRef(null);

  const images = [
    { original: "/images/blog-grid-1.jpg", thumbnail: "/images/blog-grid-1.jpg" },
    { original: "/images/agent-item.jpg", thumbnail: "/images/agent-item.jpg" },
    { original: "/images/commercial.jpg", thumbnail: "/images/commercial.jpg" },
    { original: "/images/blog-grid-2.jpg", thumbnail: "/images/blog-grid-2.jpg" },
    { original: "/images/blog-grid-1.jpg", thumbnail: "/images/blog-grid-1.jpg" },
    { original: "/images/agent-item.jpg", thumbnail: "/images/agent-item.jpg" },
    { original: "/images/commercial.jpg", thumbnail: "/images/commercial.jpg" },
    { original: "/images/blog-grid-2.jpg", thumbnail: "/images/blog-grid-2.jpg" },
  ];

  const visibleThumbnails = images.slice(0, 4);
  const hiddenImagesCount = images.length - 4;

  const openGalleryAt = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(() => {
        goToNext();
      }, 3000);
    }
    setIsPlaying(!isPlaying);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsPlaying(false);
    clearInterval(intervalRef.current);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') {
        handleClose();
      } else if (e.key === 'ArrowLeft') {
        goToPrev();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === ' ') {
        togglePlayPause();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, isPlaying]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-6">Spotlight</h1>
      
      {/* Thumbnail Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {visibleThumbnails.map((img, index) => (
          <div 
            key={index} 
            className="relative aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={() => openGalleryAt(index)}
          >
            <Image
              src={img.thumbnail}
              alt={`Thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
        
        {/* View More Button */}
        {hiddenImagesCount > 0 && (
          <div 
            className="relative aspect-square bg-gray-200 rounded-lg shadow-md flex flex-col items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={() => openGalleryAt(4)}
          >
            <div className="text-4xl font-bold text-gray-700">+{hiddenImagesCount}</div>
            <div className="text-gray-600 mt-2">View More</div>
          </div>
        )}
      </div>

      {/* Fullscreen Gallery Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col">
          {/* Top Controls */}
          <div className="flex justify-between items-center p-4 bg-black bg-opacity-70 text-white">
            <div className="text-lg">
              {currentIndex + 1} / {images.length}
            </div>
            <div className="flex gap-2">
              <button
                onClick={togglePlayPause}
                className="w-10 h-10 flex items-center justify-center text-white hover:bg-white hover:bg-opacity-20 rounded focus:outline-none"
                aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
              >
                {isPlaying ? <PauseIcon /> : <PlayIcon />}
              </button>
              
              <button
                onClick={toggleFullscreen}
                className="w-10 h-10 flex items-center justify-center text-white hover:bg-white hover:bg-opacity-20 rounded focus:outline-none"
                aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
              >
                {isFullscreen ? <ExitFullscreenIcon /> : <FullscreenIcon />}
              </button>
              
              <button
                onClick={handleClose}
                className="w-10 h-10 flex items-center justify-center text-white hover:bg-white hover:bg-opacity-20 rounded focus:outline-none"
                aria-label="Close gallery"
              >
                <CloseIcon />
              </button>
            </div>
          </div>

          {/* Main Image */}
          <div className="flex-grow flex items-center justify-center relative">
            <button
              onClick={goToPrev}
              className="absolute left-4 z-10 w-10 h-10 flex items-center justify-center text-white bg-black bg-opacity-50 rounded-full hover:bg-opacity-70 focus:outline-none"
              aria-label="Previous image"
            >
              <PrevIcon />
            </button>
            
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={images[currentIndex].original}
                alt={`Image ${currentIndex + 1}`}
                fill
                className="object-contain"
                priority
              />
            </div>
            
            <button
              onClick={goToNext}
              className="absolute right-4 z-10 w-10 h-10 flex items-center justify-center text-white bg-black bg-opacity-50 rounded-full hover:bg-opacity-70 focus:outline-none"
              aria-label="Next image"
            >
              <NextIcon />
            </button>
          </div>

          {/* Thumbnail Strip */}
          <div className="p-4 bg-black bg-opacity-70 overflow-x-auto">
            <div className="flex gap-2 justify-center">
              {images.map((img, index) => (
                <div
                  key={index}
                  className={`relative w-16 h-16 flex-shrink-0 cursor-pointer border-2 ${index === currentIndex ? 'border-white' : 'border-transparent'}`}
                  onClick={() => setCurrentIndex(index)}
                >
                  <Image
                    src={img.thumbnail}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
