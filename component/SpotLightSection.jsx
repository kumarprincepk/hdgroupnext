"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

// Icons
const PlayIcon = () => <span aria-hidden="true">▶</span>;
const PauseIcon = () => <span aria-hidden="true">⏸</span>;
const FullscreenIcon = () => <span aria-hidden="true">⛶</span>;
const ExitFullscreenIcon = () => <span aria-hidden="true">⛶</span>;
const CloseIcon = () => <span aria-hidden="true">×</span>;
const PrevIcon = () => <span aria-hidden="true">◀</span>;
const NextIcon = () => <span aria-hidden="true">▶</span>;

export default function Gallery({ images = [], title, description }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(null);
  const [key, setKey] = useState(0);

  const overlayRef = useRef(null);
  const intervalRef = useRef(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const MAX_VISIBLE = 7;
  const visibleThumbnails = images.slice(0, MAX_VISIBLE);
  const hiddenImagesCount = Math.max(0, images.length - MAX_VISIBLE);

  const openGalleryAt = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
    setSlideDirection("right");
  };

  // Swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (touchStartX.current == null || touchEndX.current == null) return;
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        setSlideDirection("left");
        goToNext();
      } else {
        setSlideDirection("right");
        goToPrev();
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Slideshow
  const togglePlayPause = () => {
    if (isPlaying) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(() => {
        setSlideDirection("left");
        goToNext();
      }, 3000);
    }
    setIsPlaying((p) => !p);
  };

  // Fullscreen
  const toggleFullscreen = () => {
    const el = overlayRef.current || document.documentElement;
    if (!document.fullscreenElement) {
      el.requestFullscreen?.()
        .then(() => setIsFullscreen(true))
        .catch((err) =>
          console.error(`Error enabling fullscreen: ${err?.message || err}`)
        );
    } else {
      document.exitFullscreen?.().then(() => setIsFullscreen(false));
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsPlaying(false);
    clearInterval(intervalRef.current);
  };

  // Navigation
  const goToPrev = () => {
    setSlideDirection("right");
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setKey((prev) => prev + 1);
  };
  const goToNext = () => {
    setSlideDirection("left");
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setKey((prev) => prev + 1);
  };

  // Keyboard support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") handleClose();
      else if (e.key === "ArrowLeft") goToPrev();
      else if (e.key === "ArrowRight") goToNext();
      else if (e.code === "Space") {
        e.preventDefault();
        togglePlayPause();
      }
    };
    window.addEventListener("keydown", handleKeyDown, { passive: false });
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Fullscreen tracking
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  // Cleanup slideshow
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="mb-5 mx-auto">
      {/* Thumbnails grid */}
      <section className="gallery" aria-label="Image gallery grid">
        {visibleThumbnails.map((img, idx) => {
          const areaClass = `image-${String.fromCharCode(97 + idx)}`;
          return (
            <button
              key={idx}
              type="button"
              className={`image ${areaClass}`}
              onClick={() => openGalleryAt(idx)}
              aria-label={`Open image ${idx + 1}`}
            >
              <Image
                src={img.thumbnail}
                alt={`Thumbnail ${idx + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="gallery-thumb"
                priority={idx < 2}
              />
              {hiddenImagesCount > 0 && idx === MAX_VISIBLE - 1 && (
                <div className="absolute inset-0 bg-black/50 text-white flex items-center justify-center text-xl font-semibold">
                  +{hiddenImagesCount} more
                </div>
              )}
            </button>
          );
        })}
      </section>

      {/* Title & Description */}
      {(title || description) && (
        <div className="text-start mb-7 mt-5 md:mb-10">
          {title && (
            <div className="heading-section mb-4 text-left">
              <h4 className="text-1 split-text effect-right text-black">
                {title}
              </h4>
            </div>
          )}
          {description && (
            <p className="text-sm md:text-base text-start text-gray-900">
              {description}
            </p>
          )}
        </div>
      )}

      {/* Overlay */}
      {isOpen && (
        <div
          ref={overlayRef}
          className="fixed inset-0 bg-black/95 z-50 flex flex-col"
          role="dialog"
          aria-modal="true"
        >
          {/* Top bar */}
          <div className="flex items-center justify-between p-3 sm:p-4 text-white">
            <div className="text-sm sm:text-base">
              {currentIndex + 1} / {images.length}
            </div>
            <div className="flex gap-2">
              <button
                onClick={togglePlayPause}
                className="control-btn"
                aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
              >
                {isPlaying ? <PauseIcon /> : <PlayIcon />}
              </button>
              <button
                onClick={toggleFullscreen}
                className="control-btn"
                aria-label={
                  isFullscreen ? "Exit fullscreen" : "Enter fullscreen"
                }
              >
                {isFullscreen ? <ExitFullscreenIcon /> : <FullscreenIcon />}
              </button>
              <button
                onClick={handleClose}
                className="control-btn"
                aria-label="Close gallery"
              >
                <CloseIcon />
              </button>
            </div>
          </div>

          {/* Main image with arrows */}
          <div
            className="flex-grow flex items-center justify-center relative"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <button onClick={goToPrev} className="nav-btn left-3 sm:left-4">
              <PrevIcon />
            </button>

            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
              <Image
                key={key}
                src={images[currentIndex].original}
                alt={`Image ${currentIndex + 1}`}
                fill
                sizes="100vw"
                className={`object-contain transition-transform duration-500 ${
                  slideDirection === "left"
                    ? "animate-slide-left"
                    : slideDirection === "right"
                    ? "animate-slide-right"
                    : "animate-slide-in"
                }`}
                priority
                onTransitionEnd={() => setSlideDirection(null)}
              />
            </div>

            <button onClick={goToNext} className="nav-btn right-3 sm:right-4">
              <NextIcon />
            </button>
          </div>

          {/* Thumbnail strip */}
          <div className="p-3 sm:p-4 bg-black/70 overflow-x-auto">
            <div className="flex gap-2 sm:gap-3 justify-center">
              {images.map((img, index) => (
                <button
                  key={index}
                  type="button"
                  className={`relative w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 rounded overflow-hidden border-2 transition-all duration-200 ${
                    index === currentIndex
                      ? "border-white scale-110"
                      : "border-transparent hover:scale-105"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to image ${index + 1}`}
                >
                  <Image
                    src={img.thumbnail}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Styles */}
      <style jsx global>{`
        .gallery {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          grid-auto-rows: 200px;
          gap: 8px;
          grid-template-areas:
            "a a b b c d"
            "a a e f g g";
        }
        .image {
          position: relative;
          overflow: hidden;
          border-radius: 8px;
          background: #eee;
        }
        .gallery-thumb {
          object-fit: cover;
          border-radius: 8px;
          transition: transform 0.3s ease-in-out;
        }
        .image:hover .gallery-thumb {
          transform: scale(1.1);
        }

        .control-btn {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: transparent;
          transition: transform 0.2s, background 0.2s;
        }
        .control-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.1);
        }
        .nav-btn {
          position: absolute;
          z-index: 10;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.5);
          border-radius: 50%;
          color: white;
          transition: transform 0.2s, background 0.2s;
        }
        .nav-btn:hover {
          background: rgba(0, 0, 0, 0.7);
          transform: scale(1.1);
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: scale(0.96);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes slideLeft {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideRight {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slideIn 0.3s ease-out forwards;
        }
        .animate-slide-left {
          animation: slideLeft 0.45s ease-out forwards;
        }
        .animate-slide-right {
          animation: slideRight 0.45s ease-out forwards;
        }

        @media (max-width: 1024px) {
          .gallery {
            grid-template-columns: repeat(4, 1fr);
            grid-auto-rows: 180px;
            grid-template-areas:
              "a a b b"
              "a a c d";
          }
        }
        @media (max-width: 640px) {
          .gallery {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: 160px;
            grid-template-areas:
              "a a"
              "b c";
            gap: 6px;
          }
        }
      `}</style>
    </div>
  );
}
