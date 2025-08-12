"use client";
import React, { useEffect } from "react";
import "lightbox.js-react/dist/index.css";

const { initLightboxJS } =
  typeof window !== "undefined"
    ? require("lightbox.js")
    : { initLightboxJS: () => {} };

const SpotLightSection = () => {
  const images = [
    "/images/blog-grid-1.jpg",
    "/images/agent-item.jpg",
    "/images/commercial.jpg",
    "/images/blog-grid-2.jpg",
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      initLightboxJS("unique-gallery-id", {
        licenseKey: "your_license_key_if_any",
        showDownloadButton: true,
      });
    }
  }, []);

  return (
    <div className="lbx-gallery" data-lightboxjs="unique-gallery-id">
      {images.map((src, index) => (
        <a
          href={src}
          data-lightboxjs-id="gallery"
          key={index}
          style={{
            display: "inline-block",
            margin: "10px",
          }}
        >
          <Image
            src={src}
            alt={`Gallery image ${index + 1}`}
            style={{
              width: "200px",
              height: "150px",
              objectFit: "cover",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          />
        </a>
      ))}
    </div>
  );
};

export default SpotLightSection;
