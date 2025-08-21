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
  const [slideDirection, setSlideDirection] = useState(null);
  const galleryRef = useRef(null);
  const intervalRef = useRef(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

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

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        setSlideDirection('left');
        goToNext();
      } else {
        setSlideDirection('right');
        goToPrev();
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(() => {
        setSlideDirection('left');
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
    setSlideDirection('right');
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setSlideDirection('left');
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') {
        handleClose();
      } else if (e.key === 'ArrowLeft') {
        setSlideDirection('right');
        goToPrev();
      } else if (e.key === 'ArrowRight') {
        setSlideDirection('left');
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
            className="relative aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer group"
            onClick={() => openGalleryAt(index)}
          >
            <Image
              src={img.thumbnail}
              alt={`Thumbnail ${index + 1}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
        
        {/* View More Button */}
        {hiddenImagesCount > 0 && (
          <div 
            className="relative aspect-square bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg shadow-md flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 group"
            onClick={() => openGalleryAt(4)}
          >
            <div className="text-4xl font-bold text-white transition-transform duration-300 group-hover:scale-110">+{hiddenImagesCount}</div>
            <div className="text-white mt-2 transition-transform duration-300 group-hover:scale-105">View More</div>
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
                className="w-10 h-10 flex items-center justify-center text-white hover:bg-white hover:bg-opacity-20 rounded focus:outline-none transition-all duration-200 hover:scale-110"
                aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
              >
                {isPlaying ? <PauseIcon /> : <PlayIcon />}
              </button>
              
              <button
                onClick={toggleFullscreen}
                className="w-10 h-10 flex items-center justify-center text-white hover:bg-white hover:bg-opacity-20 rounded focus:outline-none transition-all duration-200 hover:scale-110"
                aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
              >
                {isFullscreen ? <ExitFullscreenIcon /> : <FullscreenIcon />}
              </button>
              
              <button
                onClick={handleClose}
                className="w-10 h-10 flex items-center justify-center text-white hover:bg-white hover:bg-opacity-20 rounded focus:outline-none transition-all duration-200 hover:scale-110"
                aria-label="Close gallery"
              >
                <CloseIcon />
              </button>
            </div>
          </div>

          {/* Main Image */}
          <div 
            className="flex-grow flex items-center justify-center relative"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <button
              onClick={goToPrev}
              className="absolute left-4 z-10 w-10 h-10 flex items-center justify-center text-white bg-black bg-opacity-50 rounded-full hover:bg-opacity-70 focus:outline-none transition-all duration-200 hover:scale-110"
              aria-label="Previous image"
            >
              <PrevIcon />
            </button>
            
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
              <Image
                src={images[currentIndex].original}
                alt={`Image ${currentIndex + 1}`}
                fill
                className={`object-contain transition-transform duration-500 ${
                  slideDirection === 'left' ? 'animate-slide-left' : 
                  slideDirection === 'right' ? 'animate-slide-right' : ''
                }`}
                priority
                onTransitionEnd={() => setSlideDirection(null)}
              />
            </div>
            
            <button
              onClick={goToNext}
              className="absolute right-4 z-10 w-10 h-10 flex items-center justify-center text-white bg-black bg-opacity-50 rounded-full hover:bg-opacity-70 focus:outline-none transition-all duration-200 hover:scale-110"
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
                  className={`relative w-16 h-16 flex-shrink-0 cursor-pointer border-2 transition-all duration-200 ${index === currentIndex ? 'border-white scale-110' : 'border-transparent hover:scale-105'}`}
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

      <style jsx global>{`
        @keyframes slide-left {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        
        @keyframes slide-right {
          from { transform: translateX(0); }
          to { transform: translateX(100%); }
        }
        
        .animate-slide-left {
          animation: slide-left 0.5s ease-in-out;
        }
        
        .animate-slide-right {
          animation: slide-right 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}
