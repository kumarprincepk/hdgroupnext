"use client";

import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

/* ✅ PDF.js worker */
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function PdfViewer({
  selectedPdf,
  pageNumber,
  numPages,
  onPageChange,
  onLoadSuccess,
  onClose,
}) {
  const [width, setWidth] = useState(800);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
    // Calculate width on client side only
    const calculatedWidth = typeof window !== "undefined" 
      ? Math.min(800, window.innerWidth - 40)
      : 800;
    setWidth(calculatedWidth);

    const handleResize = () => {
      setWidth(Math.min(800, window.innerWidth - 40));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="modal fade show d-block"
      style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
    >
      <div className="modal-dialog modal-xl modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{selectedPdf.title}</h5>
            <button className="btn-close" onClick={onClose} />
          </div>

          <div
            className="modal-body p-0"
            style={{ height: "70vh", overflow: "auto", display: "flex", justifyContent: "center" }}
          >
            {isReady && (
              <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "flex-start", padding: "20px 0" }}>
                <Document
                  file={selectedPdf.file}
                  onLoadSuccess={onLoadSuccess}
                  onLoadError={(err) => console.error("PDF load error:", err)}
                  loading={<p className="p-4">Loading PDF...</p>}
                >
                  <Page
                    pageNumber={pageNumber}
                    width={width}
                    renderTextLayer={true}
                    renderAnnotationLayer={true}
                  />
                </Document>
              </div>
            )}
          </div>

          {numPages && numPages > 1 && (
            <div className="modal-footer justify-content-center">
              <button
                className="btn btn-outline-primary"
                disabled={pageNumber === 1}
                onClick={() => onPageChange(pageNumber - 1)}
              >
                Previous
              </button>

              <span className="mx-3">
                Page {pageNumber} of {numPages}
              </span>

              <button
                className="btn btn-outline-primary"
                disabled={pageNumber === numPages}
                onClick={() => onPageChange(pageNumber + 1)}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
