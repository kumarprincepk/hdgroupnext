"use client";

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
            style={{ height: "70vh", overflow: "auto" }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <Document
                file={selectedPdf.file}
                onLoadSuccess={onLoadSuccess}
                onLoadError={(err) => console.error("PDF load error:", err)}
                loading={<p className="p-4">Loading PDF...</p>}
              >
                <Page
                  pageNumber={pageNumber}
                  width={Math.min(800, window.innerWidth - 40)}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
              </Document>
            </div>
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
