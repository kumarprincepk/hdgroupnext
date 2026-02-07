"use client";

import React from "react";
import PropTypes from "prop-types";

const PdfModal = ({ isOpen, onClose, pdf }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
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
            style={{ height: "70vh", overflow: "hidden" }}
          >
            <iframe
              src={`${pdf?.file}#toolbar=0&navpanes=0&scrollbar=1`}
              style={{
                width: "100%",
                height: "100%",
                border: "none",
              }}
              title={pdf?.title}
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

