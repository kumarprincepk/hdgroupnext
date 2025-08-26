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
  const [key, setKey] = useState(0);
  const overlayRef = useRef(null);
  const intervalRef = useRef(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const images = [
    { original: "/images/picture9.jpg", thumbnail: "/images/picture9.jpg" },
    { original: "/images/picture14.jpg", thumbnail: "/images/picture14.jpg" },
    { original: "/images/picture1.jpg", thumbnail: "/images/picture1.jpg" },
    { original: "/images/picture2.jpeg", thumbnail: "/images/picture2.jpeg" },
    { original: "/images/picture10.jpg", thumbnail: "/images/picture10.jpg" },
    { original: "/images/picture3.jpg", thumbnail: "/images/picture3.jpg" },
    { original: "/images/picture11.jpg", thumbnail: "/images/picture11.jpg" },
    { original: "/images/picture4.jpg", thumbnail: "/images/picture4.jpg" },
    { original: "/images/picture5.jpg", thumbnail: "/images/picture5.jpg" },
    { original: "/images/picture6.jpeg", thumbnail: "/images/picture6.jpeg" },
    { original: "/images/picture7.jpeg", thumbnail: "/images/picture7.jpeg" },
    { original: "/images/picture8.jpeg", thumbnail: "/images/picture8.jpeg" },
    { original: "/images/picture12.jpg", thumbnail: "/images/picture12.jpg" },
    { original: "/images/picture13.jpg", thumbnail: "/images/picture13.jpg" },
  ];

  const MAX_VISIBLE = 7;
  const visibleThumbnails = images.slice(0, MAX_VISIBLE);
  const hiddenImagesCount = Math.max(0, images.length - MAX_VISIBLE);

  const openGalleryAt = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
    setSlideDirection("right");
  };

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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        handleClose();
      } else if (e.key === "ArrowLeft") {
        setSlideDirection("right");
        goToPrev();
      } else if (e.key === "ArrowRight") {
        setSlideDirection("left");
        goToNext();
      } else if (e.code === "Space") {
        e.preventDefault();
        togglePlayPause();
      }
    };

    window.addEventListener("keydown", handleKeyDown, { passive: false });
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isPlaying, images.length]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="mb-5 mx-auto">
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
            </button>
          );
        })}
      </section>

      <div className="text-start mb-7 mt-5 md:mb-10">
        <div className="heading-section mb-4 text-left">
          <h4 className="text-1 split-text effect-right"> Spotlight</h4>
        </div>
        <p className="text-sm md:text-base text-start text-gray-900">
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Explore a curated selection of our latest shots. Tap any tile to open
          the immersive gallery, swipe or use the arrows to navigate, and hit
          play for a smooth slideshow experience.
        </p>
      </div>

      {isOpen && (
        <div
          ref={overlayRef}
          className="fixed inset-0 bg-black/95 z-50 flex flex-col"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between p-3 sm:p-4 text-white">
            <div className="text-sm sm:text-base">
              {currentIndex + 1} / {images.length}
            </div>
            <div className="flex gap-2">
              <button
                onClick={togglePlayPause}
                className="w-10 h-10 flex items-center justify-center hover:bg-white/20 rounded transition-all duration-200 hover:scale-110 focus:outline-none"
                aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
              >
                {isPlaying ? <PauseIcon /> : <PlayIcon />}
              </button>

              <button
                onClick={toggleFullscreen}
                className="w-10 h-10 flex items-center justify-center hover:bg-white/20 rounded transition-all duration-200 hover:scale-110 focus:outline-none"
                aria-label={
                  isFullscreen ? "Exit fullscreen" : "Enter fullscreen"
                }
              >
                {isFullscreen ? <ExitFullscreenIcon /> : <FullscreenIcon />}
              </button>

              <button
                onClick={handleClose}
                className="w-10 h-10 flex items-center justify-center hover:bg-white/20 rounded transition-all duration-200 hover:scale-110 focus:outline-none"
                aria-label="Close gallery"
              >
                <CloseIcon />
              </button>
            </div>
          </div>

          <div
            className="flex-grow flex items-center justify-center relative"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <button
              onClick={goToPrev}
              className="absolute left-3 sm:left-4 z-10 w-10 h-10 flex items-center justify-center text-white bg-black/50 rounded-full hover:bg-black/70 transition-all duration-200 hover:scale-110 focus:outline-none"
              aria-label="Previous image"
            >
              <PrevIcon />
            </button>

            <div
              className="relative w-full h-full flex items-center justify-center overflow-hidden"
              data-direction={slideDirection}
            >
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

            <button
              onClick={goToNext}
              className="absolute right-3 sm:right-4 z-10 w-10 h-10 flex items-center justify-center text-white bg-black/50 rounded-full hover:bg-black/70 transition-all duration-200 hover:scale-110 focus:outline-none"
              aria-label="Next image"
            >
              <NextIcon />
            </button>
          </div>

          <div className="p-3 sm:p-4 bg-black/70 overflow-x-auto">
            <div className="flex gap-2 sm:gap-3 justify-center">
              {images.map((img, index) => (
                <button
                  key={index}
                  type="button"
                  className={`relative w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 rounded overflow-hidden border-2 transition-all duration-200 focus:outline-none ${
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

      <style jsx global>{`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        body {
          font-family: Arial, sans-serif;
          background: #f8f9fa;
        }

        .gallery {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          grid-auto-rows: 200px;
          gap: 8px;
          grid-template-areas:
            "a a b b c d"
            "a a e f g g";
          align-items: stretch;
          grid-auto-flow: dense;
        }

        .image {
          position: relative;
          overflow: hidden;
          border-radius: 8px;
          display: block;
          min-height: 0;
          height: 100%;
          width: 100%;
          background: #eee;
          z-index: 0;
        }

        .image > span,
        .image > span > img {
          position: absolute !important;
          inset: 0 !important;
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
          border-radius: 8px;
          display: block;
        }

        .gallery-thumb {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
          border-radius: 8px;
          display: block;
        }

        .image-a {
          grid-area: a;
        }
        .image-b {
          grid-area: b;
        }
        .image-c {
          grid-area: c;
        }
        .image-d {
          grid-area: d;
        }
        .image-e {
          grid-area: e;
        }
        .image-f {
          grid-area: f;
        }
        .image-g {
          grid-area: g;
        }
        .image img,
        .image .gallery-thumb {
          transition: transform 0.3s ease-in-out;
          cursor: pointer;
        }

        .image:hover img,
        .image:hover .gallery-thumb {
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

        /* Cross-browser fullscreen sizing */
        :-webkit-full-screen {
          width: 100%;
          height: 100%;
        }
        :-moz-full-screen {
          width: 100%;
          height: 100%;
        }
        :-ms-fullscreen {
          width: 100%;
          height: 100%;
        }
        :fullscreen {
          width: 100%;
          height: 100%;
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
