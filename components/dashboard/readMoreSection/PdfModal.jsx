"use client";

import React, { useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";

const PdfModal = ({ isOpen, onClose, pdf }) => {
  const [loading, setLoading] = useState(true);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
      setLoading(true);
    }
  };

  const handleIframeLoad = () => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div
      className="modal fade show d-block"
      style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
      onClick={handleBackdropClick}
    >
      <div className="modal-dialog modal-xl modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{pdf?.title}</h5>
            <button className="btn-close" onClick={onClose} />
          </div>

          <div
            className="modal-body p-0"
            style={{ height: "70vh", overflow: "hidden", position: "relative" }}
          >
            {loading && (
              <div
                className="d-flex justify-content-center align-items-center"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "#f8f9fa",
                  zIndex: 10,
                }}
              >
                <div style={{ animation: "pulse 1.5s ease-in-out infinite" }}>
                  <Image
                    src="/images/logo/logo-icon.png"
                    alt="Loading"
                    width={80}
                    height={80}
                  />
                </div>
                <style jsx>{`
                  @keyframes pulse {
                    0%, 100% { opacity: 0.4; transform: scale(0.95); }
                    50% { opacity: 1; transform: scale(1.05); }
                  }
                `}</style>
              </div>
            )}
            <iframe
              src={`${pdf?.file}#toolbar=0&navpanes=0&scrollbar=1`}
              style={{
                width: "100%",
                height: "100%",
                border: "none",
              }}
              title={pdf?.title}
              onLoad={handleIframeLoad}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

PdfModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  pdf: PropTypes.shape({
    id: PropTypes.number,
    file: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
};

export default PdfModal;

